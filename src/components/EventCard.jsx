import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function EventCard({ item, action }) {

  const { name, price, images} = item;
  const imgConfig = {uri: images[0]}

  return (
    <Pressable onPress={() => action(item)}>
      <View style={styles.container}>
        <Image style={styles.cardImage} source={imgConfig}/>
        <View style={styles.cardInfo}>
            <Text style={styles.listItem}>{name}</Text>
        </View>
        <View>
            <Text style={styles.listItem}>R$ {price.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 2,
        marginVertical: 1,
        flexDirection: 'row',
        shadowColor: '#000',
        shadowRadius: 3.84,
        shadowOffset: {
            width: 0, height: 2
        },
        shadowOpacity: 0.25,
        elevation: 1,
    },
    cardImage: {
        width: 100,
        height: 100,
    },
    cardInfo: {
        flexGrow: 1,
    },
    listItem: {
        padding: 4,
        margin: 2,
    },
})