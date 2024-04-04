import { Text, FlatList, StyleSheet } from 'react-native';
import EventCard from '../../components/EventCard';

export default function ListContainer({ events, action }) {

    function renderItem({ item }) {
        return <EventCard
            item={item}
            action={action} />;
    }

    if (events.length > 0) {
        return <FlatList
            style={styles.container}
            data={events}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
        />
    } else {
        return (<Text>Nenhum evento cadastrado!</Text>);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})