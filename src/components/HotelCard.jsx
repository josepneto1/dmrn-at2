import { StyleSheet, Text, View } from "react-native";

export default function HotelCard({ hotel }) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.header1}>{hotel.name}</Text>
                <Text style={styles.header2}>{hotel.address}</Text>
            </View>
            <View style={styles.footer}>
                <Text>R$ {hotel.dailyRate.toFixed(2)}/dia</Text>
                <Text>{hotel.proximity} m</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 4,
        padding: 2,
        backgroundColor: '#f1faee',
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    content: {
        flexGrow: 1,
    },
    header1: {
        fontSize: 22,
        marginVertical: 2,
        marginLeft: 10,
    },
    header2: {
        fontSize: 16,
        marginLeft: 15,
    },
    footer: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingHorizontal: 10,
    },
})