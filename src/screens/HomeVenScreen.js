import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const HomeVenScreen = ({ route }) => {
    const { username } = route.params;
    const navigation = useNavigation();
  
    const handleCatalogo = () => {
      navigation.navigate('Catalogo');
    };
    const handleVenta = () => {
        navigation.navigate('Venta');
      };
      const handlePedido = () => {
        navigation.navigate('Pedido');
      };
      const handleCliente = () => {
        navigation.navigate('Cliente');
      };
      const handleInventario = () => {
        navigation.navigate('Inventario');
      };
      const handleVendedor = () => {
        navigation.navigate('Vendedor');
      };
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Bienvenida, {username}!</Text>
                <Text style={styles.headerText}>VENDEDOR</Text>
            </View>

            <ScrollView >
                <View style={styles.row}>
                    <TouchableOpacity style={styles.button} onPress={handleCatalogo}>
                        <View style={styles.imageContainer}>
                            <Image source={require('../../assets/catalog.png')} style={styles.image} />
                        </View>
                        <Text style={styles.buttonText}>CATALOGO</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={handleCliente}>
                        <View style={styles.imageContainer}>
                          <Image source={require('../../assets/doc.png')} style={styles.image} />
                        </View>
                        <Text style={styles.buttonText}>CLIENTES</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.button} onPress={handlePedido}>
                        <View style={styles.imageContainer}>
                            <Image source={require('../../assets/pedi.png')} style={styles.image} />
                        </View>
                        <Text style={styles.buttonText}>PEDIDOS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={handleCliente}>
                <View style={styles.imageContainer}>
                <Image source={require('../../assets/doc.png')} style={styles.image} />
                </View>
                <Text style={styles.buttonText}>VENTAS</Text>
            </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.button} onPress={handleInventario}>
                        <View style={styles.imageContainer}>
                            <Image source={require('../../assets/inve.png')} style={styles.image} />
                        </View>
                        <Text style={styles.buttonText}>INVENTARIO</Text>
                    </TouchableOpacity>
                    
                </View>
            </ScrollView>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d8f5ff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#cce8f2',
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
        backgroundColor: '#ffff',
        padding: 10,
        paddingVertical: 40,
        borderRadius: 8,
        elevation: 20,
        borderColor: '#138ede',
        margin: 18, // Agrega un margen de 8px en todos los lados
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

export default HomeVenScreen;
