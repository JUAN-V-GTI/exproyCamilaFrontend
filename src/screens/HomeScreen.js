import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c8c8ff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#c6e4ff',
    },
    headerText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonsContainer: {
        flex: 1,
        padding: 26,
        marginTop: 1, // separacion de cabecera
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10, // Agrega un margen inferior para separar la imagen del texto
    },
    image: {
        width: 70, // Ancho de la imagen
        height: 70, // Alto de la imagen
        resizeMode: 'contain', // Ajusta la imagen para que se ajuste al contenedor
    },
    button: {
        flex: 1,
        backgroundColor: '#c0c0c0',
        padding: 40,
        paddingVertical: 40,
        borderRadius: 8,
        elevation: 20,
        borderColor: '#138ede',
        margin: 8, // Agrega un margen de 8px en todos los lados
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 55,
        marginBottom: 20,
        paddingHorizontal: 1, // Agrega un padding horizontal de 16px
    },
    buttonText: {
        textAlign: 'center',
        textAlignVertical: 'justify',
        fontSize: 12,
        numberOfLines: 2, // Fija el número de líneas a 1
        lineHeight: 24, // Ajusta la altura de la línea de texto
        alignContent: 'flex-end',
        textDecorationLine: 'underline', // Agrega un subrayado al texto
        fontWeight: "bold",
    },
});

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Bienvenida!</Text>
                <Text style={styles.headerText}>VENDEDOR</Text>
            </View>

            <ScrollView >
                <View style={styles.row}>
                    <TouchableOpacity style={styles.button} onPress={() => { }}>
                        <View style={styles.imageContainer}>
                            <Image source={require('../../assets/catalog.png')} style={styles.image} />
                        </View>
                        <Text style={styles.buttonText}>CATALOGO</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => { }}>
                        <View style={styles.imageContainer}>
                            <Image source={require('../../assets/mon.png')} style={styles.image} />
                        </View>
                        <Text style={styles.buttonText}>VENTAS</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.button} onPress={() => { }}>
                        <View style={styles.imageContainer}>
                            <Image source={require('../../assets/camions.png')} style={styles.image} />
                        </View>
                        <Text style={styles.buttonText}>PEDIDOS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => { }}>
                        <View style={styles.imageContainer}>
                            <Image source={require('../../assets/doc.png')} style={styles.image} />
                        </View>
                        <Text style={styles.buttonText}>CLIENTES</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.button} onPress={() => { }}>
                        <View style={styles.imageContainer}>
                            <Image source={require('../../assets/inve.png')} style={styles.image} />
                        </View>
                        <Text style={styles.buttonText}>INVENTARIO</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => { }}>
                        <View style={styles.imageContainer}>
                            <Image source={require('../../assets/admin.png')} style={styles.image} />
                        </View>
                        <Text style={styles.buttonText}>USUARIO</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

export default HomeScreen;
