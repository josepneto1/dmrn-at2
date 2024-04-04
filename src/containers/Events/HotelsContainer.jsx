import { FlatList, StyleSheet, View } from "react-native";
import HotelCard from "../../components/HotelCard";

export default function HotelsContainer({ hotels }) {
    return (
        <View style={styles.container}>
            <FlatList
                data={hotels}
                renderItem={
                    ({ item }) => <HotelCard hotel={item} />
                }
                keyExtractor={item => 'hotel_' + item.name}
            />
        
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})