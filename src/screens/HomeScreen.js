import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Asegúrate de tener react-native-vector-icons instalado

const HomeScreen = ({ route }) => {
  const { username } = route.params;
  const navigation = useNavigation();
  const [showDropdown, setShowDropdown] = useState(false); // Estado para la visibilidad del dropdown

  const handleLogout = () => {
    // Implementa la lógica de cierre de sesión aquí
    navigation.navigate('Login'); // Navega a la pantalla de inicio de sesión después de cerrar sesión
  };

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
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Bienvenido, Administrador!</Text>
            <TouchableOpacity onPress={() => setShowDropdown(!showDropdown)}>
              <View style={styles.avatar}>
                <Icon name="account-circle" size={30} color="#fff" />
              </View>
            </TouchableOpacity>
          </View>

          {showDropdown && (
            <View style={styles.dropdown}>
              <TouchableOpacity style={styles.dropdownItem} onPress={() => {}}>
                <Icon name="account-circle" size={20} color="#333" />
                <Text style={styles.dropdownText}>{username}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.dropdownItem} onPress={handleLogout}>
                <Icon name="logout" size={20} color="#333" />
                <Text style={styles.dropdownText}>Salir de sesión</Text>
              </TouchableOpacity>
            </View>
          )}

          <ScrollView>
            <View style={styles.row}>
              <TouchableOpacity style={styles.button} onPress={handleCatalogo}>
                <View style={styles.imageContainer}>
                  <Image source={require('../../assets/catalog.png')} style={styles.image} />
                </View>
                <Text style={styles.buttonText}>CATALOGO</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={handleVenta}>
                <View style={styles.imageContainer}>
                  <Image source={require('../../assets/mon.png')} style={styles.image} />
                </View>
                <Text style={styles.buttonText}>VENTAS</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity style={styles.button} onPress={handlePedido}>
                <View style={styles.imageContainer}>
                  <Image source={require('../../assets/camions.png')} style={styles.image} />
                </View>
                <Text style={styles.buttonText}>PRODUCTO</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={handleCliente}>
                <View style={styles.imageContainer}>
                  <Image source={require('../../assets/doc.png')} style={styles.image} />
                </View>
                <Text style={styles.buttonText}>CLIENTES</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity style={styles.button} onPress={handleInventario}>
                <View style={styles.imageContainer}>
                  <Image source={require('../../assets/inve.png')} style={styles.image} />
                </View>
                <Text style={styles.buttonText}>INVENTARIO</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={handleVendedor}>
                <View style={styles.imageContainer}>
                  <Image source={require('../../assets/VEND.png')} style={styles.image} />
                </View>
                <Text style={styles.buttonText}>VENDEDORES</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
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
  avatar: {
    backgroundColor: '#558B2F',
    padding: 8,
    borderRadius: 50,
  },
  dropdown: {
    position: 'absolute',
    top: 50,
    right: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 15,
    zIndex: 1,
  },
  dropdownItem: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropdownText: {
    marginLeft: 10,
  },
  buttonsContainer: {
    flex: 1,
    padding: 26,
    marginTop: 1,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  image: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
  button: {
    flex: 1,
    backgroundColor: '#ffff',
    padding: 10,
    paddingVertical: 40,
    borderRadius: 8,
    elevation: 20,
    borderColor: '#138ede',
    margin: 18,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 55,
    marginBottom: 20,
    paddingHorizontal: 1,
  },
  buttonText: {
    textAlign: 'center',
    textAlignVertical: 'justify',
    fontSize: 12,
    numberOfLines: 2,
    lineHeight: 24,
    alignContent: 'flex-end',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
