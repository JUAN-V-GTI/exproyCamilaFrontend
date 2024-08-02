import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { LinearGradient } from 'expo-linear-gradient';

const HomeScreen = ({ route }) => {
  const { username } = route.params;
  const navigation = useNavigation();
  const [showDropdown, setShowDropdown] = useState(false); // Estado para la visibilidad del dropdown

  const handleLogout = () => {
    // Implementa la lógica de cierre de sesión aquí
    navigation.navigate('Login'); // Navega a la pantalla de inicio de sesión después de cerrar sesión
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
  const handleProducto = () => {
    navigation.navigate('Producto');
  };
  const handleProveedor = () => {
    navigation.navigate('Proveedor');
  };
  const handleRegister = () => {
    navigation.navigate('Register');
  };
  const handleCatalogo = () => {
    navigation.navigate('Catalogo');
  };
  return (
    
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Bienvenido</Text>
            <TouchableOpacity onPress={() => setShowDropdown(!showDropdown)}>
              <View style={styles.avatar}>
                <Icon name="account-circle" size={30} color="#fff" />
              </View>
            </TouchableOpacity>
          </View>

          {showDropdown && (
            <View style={styles.dropdown}>
              
              <Text style={styles.dropdownText}>Camila</Text>

              <TouchableOpacity style={styles.dropdownItem} onPress={() => {}}>
                <Icon name="account-circle" size={20} color="#8dd684" />
                <Text style={styles.dropdownText}>{username}</Text>
              </TouchableOpacity>

             
              <View style={styles.dropdownItem}>
                <Icon name="security" size={20} color="#8dd684" />
                <Text style={styles.dropdownText}>Rol: Administrador</Text>
              </View>

             
              <TouchableOpacity
                style={styles.dropdownItem}
                onPress={handleLogout}
              >
                <Icon name="logout" size={20} color="#8dd684" />
                <Text style={styles.dropdownText}>Salir de sesión</Text>
              </TouchableOpacity>
            </View>
          )}

          <ScrollView>
            <View style={styles.row}>
              <TouchableOpacity style={styles.button} onPress={handleCliente}>
                <View style={styles.imageContainer}>
                  <Image source={require('../../assets/doc.png')} style={styles.image} />
                </View>
                <Text style={styles.buttonText}>CLIENTES</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={handleRegister}>
                <View style={styles.imageContainer}>
                  <Image source={require('../../assets/VEND.png')} style={styles.image} />
                </View>
                <Text style={styles.buttonText}>VENDEDORES</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity style={styles.button} onPress={handleProducto}>
                <View style={styles.imageContainer}>
                  <Image source={require('../../assets/mujer1.png')} style={styles.image} />
                </View>
                <Text style={styles.buttonText}>PRODUCTO</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={handleProveedor}>
                <View style={styles.imageContainer}>
                  <Image source={require('../../assets/camions.png')} style={styles.image} />
                </View>
                <Text style={styles.buttonText}>PROVEEDORES</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity style={styles.button} onPress={handleInventario}>
                <View style={styles.imageContainer}>
                  <Image source={require('../../assets/inve.png')} style={styles.image} />
                </View>
                <Text style={styles.buttonText}>INVENTARIO</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={handleCatalogo}>
                <View style={styles.imageContainer}>
                  <Image source={require('../../assets/catalog.png')} style={styles.image} />
                </View>
                <Text style={styles.buttonText}>CATALOGO</Text>
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
    backgroundColor: '#a1fbff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#a1fbff',
  },
  headerText: {
    fontSize: 19,
    fontWeight: 'bold',
    marginStart:11,
  },
  avatar: {
    backgroundColor: '#002792',
    padding: 8,
    borderRadius: 50,
    marginEnd:11,
  },
  dropdown: {
    position: 'absolute',
    top: 50,
    right: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.250,
    shadowRadius: 3.84,
    elevation: 1,
    zIndex: 1,
  },
  dropdownItem: {
    padding:20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropdownText: {
    marginLeft: 20,
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
    borderRadius: 10,
    elevation: 30,
    borderColor: '#70a8b8',
    borderWidth: 0,
    borderBottomWidth: 3, // Borde inferior más grueso
    borderLeftWidth: 3, // Borde izquierdo más grueso
  
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
