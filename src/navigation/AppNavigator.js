import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import HomeVenScreen from '../screens/HomeVenScreen';
import ClientesScreen from '../screens/ClientesScreen';
import VendedoresScreen from '../screens/VendedoresScreen';
import InventarioScreen from '../screens/InventarioScreen';
import PedidosScreen from '../screens/PedidosScreen';
import VentasScreen from '../screens/VentasScreen';
import CatalogoScreen from '../screens/CatalogoScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="HomeVen" component={HomeVenScreen} />
        <Stack.Screen name="Cliente" component={ClientesScreen} />
        <Stack.Screen name="Catalogo" component={CatalogoScreen} />
        <Stack.Screen name="Venta" component={VentasScreen} />
        <Stack.Screen name="Pedido" component={PedidosScreen} />
        <Stack.Screen name="Inventario" component={InventarioScreen} />
        <Stack.Screen name="Vendedor" component={VendedoresScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
