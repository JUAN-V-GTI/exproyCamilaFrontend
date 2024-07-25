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
import ProductoScreen from '../screens/ProductoScreen';
import VentasScreen from '../screens/VentasScreen';
import CatalogoScreen from '../screens/CatalogoScreen';

const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HomeVen" component={HomeVenScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Cliente" component={ClientesScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Catalogo" component={CatalogoScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Venta" component={VentasScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Producto" component={ProductoScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Inventario" component={InventarioScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Vendedor" component={VendedoresScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
