import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const PedidosScreen = () => {
    return (
        <ImageBackground
            source={require('../../assets/cro.png')} // Ruta de tu imagen de fondo
            style={styles.background}
            resizeMode="contain" // Ajusta el tamaño de la imagen para mantener su relación de aspecto
        >
            <View style={styles.container}>
                <Text style={styles.text}>En construcción</Text>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 2, // Ajusta este valor para el margen de los lados
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start', // Alinea el contenido en la parte superior
        alignItems: 'center',
        paddingTop: 280, // Ajusta este valor según sea necesario para mover el texto más arriba
    },
    text: {
        fontSize: 22, // Ajusta el tamaño del texto según lo necesites
        fontWeight: 'bold',
        color: '#333',
        // backgroundColor: 'rgba(216, 245, 255, 0.5)', // Fondo semi-transparente para el texto
        padding: 10,
        borderRadius: 5,
    },
});

export default PedidosScreen;
