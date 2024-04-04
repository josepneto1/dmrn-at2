import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

import ListContainer from "../containers/Events/ListContainer";
import Routes from "../routes";

const Stack = createNativeStackNavigator();

function converter(data) {
    const ids = Object.keys(data); // [ idA, idB, ...]
    const events = Object.values(data); // [ {eventA}, {eventB} ]
    const eventsList = events.map((event, index) => {
        return {
            _id: ids[index],
            ...event
        }
    });
    return eventsList;
}

export default function EventsPage(props) {
    const { navigation } = props;
    const url = 'https://infnet-react-native-default-rtdb.firebaseio.com';
    const resource = 'events';
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [filter, setFilter] = useState('');
    const [filteredEvents, setFilteredEvents] = useState([]);

    useEffect(() => {
        fetch(`${url}/${resource}.json`)
            .then(res => res.json())
            .then(eventsJson => {
                const events = converter(eventsJson);
                setEvents(events);
                setFilteredEvents(events)
            })
            .finally(_ => setIsLoading(false));
    }, [filteredEvents]);
    
    function selectEvent(event) {
        navigation.navigate(Routes.EventsShowPage, { id: event._id });
    }

    const filterProducts = () => {
        const filtered = events.filter(event =>
            event.name.toLowerCase().includes(filter.toLowerCase()) ||
            event.description.toLowerCase().includes(filter.toLowerCase())
        );
        setFilteredEvents(filtered);
      };

    return (
        <>
            {isLoading ? (
                <View style={styles.loadingIndicator}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            ) : (
                <>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite o nome do produto"
                        value={filter}
                        onChangeText={text => setFilter(text)}
                    />
                    <Pressable onPress={filterProducts}>
                        <Text style={styles.button}>Buscar</Text>
                    </Pressable>
                    <ListContainer events={filteredEvents} action={selectEvent} />
                </>
            )}
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loadingIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        height: 40,
        borderColor: '#001f3f',
        borderWidth: 1,
        paddingHorizontal: 10,
        margin: 4,
      },
      button: {
        backgroundColor: '#0074d9',
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
        margin: 4,
      }
})
