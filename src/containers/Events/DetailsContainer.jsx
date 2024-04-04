import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function DetailsContainer({ event }) {
    const { name, description, images, location, price } = event;
    const [imageIndex, setImageIndex] = useState(0);

    const changeImage = (index) => {
        setImageIndex(index);
    };

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: images[imageIndex] }} />
            <View style={styles.content}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.detail}>Local: {location}</Text>
                <Text style={styles.detail}>Preço: {price}</Text>
                <ScrollView style={styles.descriptionContainer}>
                    <Text style={styles.description}>{description}</Text>
                </ScrollView>
                <View style={styles.imageContainer}>
                    {images.map((image, index) => (
                        <TouchableOpacity key={index} onPress={() => changeImage(index)}>
                            <Image style={styles.additionalImage} source={{ uri: image }} />
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: '#ffffff',
        elevation: 3,
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    },
    content: {
        padding: 16,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#333333',
    },
    detail: {
        fontSize: 16,
        color: '#666666',
        marginBottom: 4,
    },
    descriptionContainer: {
        marginTop: 8,
        maxHeight: 150,
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#666666',
    },
    imageContainer: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    additionalImage: {
        width: 80,
        height: 80,
        resizeMode: 'cover',
        marginRight: 8,
        borderRadius: 4,
    },
});
