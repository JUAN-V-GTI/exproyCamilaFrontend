import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const PedidosScreen = () => {
    return (
        <ImageBackground
           
            resizeMode="contain" // Ajusta el tamaño de la imagen para mantener su relación de aspecto
        >
            <View style={styles.container}>
                <Text style={styles.text}>producto</Text>
            </View>
        </ImageBackground>
    );
};


   

export default PedidosScreen;
