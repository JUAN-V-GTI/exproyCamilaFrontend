import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const ProductCard = ({ data }) => {
    const renderItem = ({ item }) => {
        return (
            <View style={styles.card}>
                <Image source={{ uri: item.imagen }} style={styles.image} />
                <View style={styles.details}>
                    <Text style={styles.name}>{item.nombre}</Text>
                    <Text>Talla: {item.size}</Text>
                    <Text>Modelo: {item.model}</Text>
                    <Text>Color: {item.color}</Text>
                    <Text>Género: {item.gender}</Text>
                    <Text style={styles.price}>Precio: ${item.price}</Text>
                </View>
            </View>
        );
    };

    return (
        <Carousel
            data={data}
            renderItem={renderItem}
            sliderWidth={300}
            itemWidth={300}
            layout="default"
        />
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    details: {
        flex: 1,
        padding: 10,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    price: {
        marginTop: 5,
        fontWeight: 'bold',
        color: '#007bff',
    },
});

export default ProductCard;
