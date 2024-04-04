import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import DetailsContainer from './DetailsContainer';
import GalleryContainer from './GalleryContainer';
import HotelsContainer from './HotelsContainer';

const Tabs = createBottomTabNavigator();

export default function ShowContainer(props) {
    const { params } = props.route;
    const { id } = params;
    console.log(id);
    
    const [event, setEvent] = useState(null);
    const [image, setImage] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [msg, setMsg] = useState(null);

    useEffect(() => {
        const url = 'https://infnet-react-native-default-rtdb.firebaseio.com';
        const resource = 'events';
        fetch(`${url}/${resource}/${id}.json`)
            .then(res => res.json())
            .then(event => {
                setEvent({
                    _id: id,
                    ...event
                })
            })
            .catch(error => setMsg(error.message))
            .finally(setIsLoading(false));
    }, [id]);

    return (
        <>
            {isLoading && <ActivityIndicator />}
            {event && <Tabs.Navigator
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                <Tabs.Screen name='Detalhes'>
                    {() => <DetailsContainer event={event} />}
                </Tabs.Screen>
                <Tabs.Screen name='Galeria'>
                    {() => <GalleryContainer images={event.images} />}
                </Tabs.Screen>
                <Tabs.Screen name='Hotéis'>
                    {() => <HotelsContainer hotels={event.hotels} />}
                </Tabs.Screen>
            </Tabs.Navigator>}
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 4,
    },
    image: {
        width: "100%",
        height: 150,
        resizeMode: 'cover',
    },
    imageController: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    }
})