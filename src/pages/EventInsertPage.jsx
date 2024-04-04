import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function EventInsertPage() {

    const url = 'https://infnet-react-native-default-rtdb.firebaseio.com';
    const resource = 'events';

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [dateDay, setDateDay] = useState("1");
    const [dateMonth, setDateMonth] = useState("1");
    const [dateYear, setDateYear] = useState("2024");
    const [price, setPrice] = useState("");
    const [msg, setMsg] = useState(null);


    const dias = [];
    const meses = [];
    const anos = [];

    for (let i = 1; i <= 31; i++) {
        dias.push({ value: i, label: i });
    }
    for (let i = 1; i <= 12; i++) {
        meses.push({ value: i, label: i });
    }
    for (let i = 2000; i <= 3000; i++) {
        anos.push({ value: i, label: i });
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={(text) => setName(text)}
                placeholder="Nome"
            />

            <TextInput
                style={styles.input}
                value={description}
                onChangeText={(text) => setDescription(text)}
                placeholder="Descrição"
            />

            <TextInput
                style={styles.input}
                value={location}
                onChangeText={(text) => setLocation(text)}
                placeholder="Localização"
            />

            <View style={styles.dateInputContainer}>
                <Text style={styles.dateInputLabel}>Dia: </Text>
                <Picker style={styles.dateInputPicker}
                    selectedValue={dateDay}
                    onValueChange={setDateDay}>
                    {dias.map(
                        (dia, index) =>
                            <Picker.Item
                                key={'picker_item_day_' + index}
                                {...dia} />
                    )
                    }
                </Picker>
                <Text style={styles.dateInputLabel}>Mês: </Text>
                <Picker style={styles.dateInputPicker}
                    selectedValue={dateMonth}
                    onValueChange={setDateMonth}>
                    {meses.map(
                        (mes, index) =>
                            <Picker.Item
                                key={'picker_item_month_' + index}
                                {...mes} />
                    )
                    }
                </Picker>
                <Text style={styles.dateInputLabel}>Ano: </Text>
                <Picker style={styles.dateInputPicker}
                    selectedValue={dateYear}
                    onValueChange={setDateYear}>
                    {anos.map(
                        (ano, index) =>
                            <Picker.Item
                                key={'picker_item_year_' + index}
                                {...ano} />
                    )
                    }
                </Picker>
            </View>

            <TextInput
                style={styles.input}
                value={price}
                onChangeText={(text) => setPrice(text)}
                placeholder="Preço"
                keyboardType="decimal-pad"
            />

            <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                    const newEvent = {
                        name: name,
                        description: description,
                        location: location,
                        hotels: [{
                            "name": "",
                            "address": "",
                            "proximity": 0,
                            "dailyRate": 0
                        }],
                        images: [''],
                        date: new Date(dateYear, dateMonth, dateDay),
                        price: Number.parseFloat(price),
                    }
                    fetch(`${url}/${resource}.json`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(newEvent),
                    })
                    .then(res => res.json())
                    .then(json => {
                        setMsg("Evento criado com sucesso!");
                        setTimeout(() => {
                            setMsg(null);
                        }, 5000);
                    })
                    .catch(error => setMsg(error.message));
                }}>
                <Text style={styles.btnLabel}>Salvar</Text>
            </TouchableOpacity>
            { msg && <Text style={styles.msgText}>{msg}</Text> }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 10,
    },
    input: {
        marginHorizontal: 10,
        marginVertical: 5,
        backgroundColor: '#e9edc9',
        height: 40,
        paddingHorizontal: 10,
    },
    dateInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 5,
    },
    dateInputLabel: {
        marginRight: 5,
    },
    dateInputPicker: {
        flex: 1,
        height: 40,
    },
    btn: {
        backgroundColor: '#0074d9',
        margin: 10,
        padding: 10,
        borderRadius: 5,
    },
    btnLabel: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: 'center',
        color: 'white',
    },
    msgText: {
        textAlign: 'center',
        marginTop: 10,
        color: '#003366',
    },
})
