import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

import { login } from '../services/Auth.js';
import Icon from 'react-native-vector-icons/Ionicons';
import { Alert } from 'react-native';

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberPassword, setRememberPassword] = useState(false);

    const handleLogin = async () => {
        if (!username || !password) {
            Alert.alert("Campos Vacíos", "Por favor ingrese su usuario y contraseña.");
            return;
        }
    
        try {
            await login({ username, password });
    
            // Verificar si el usuario es "juanAdmin"
            if (username === "JuanAdmin"|| username === "RaquelAdmin") {
                navigation.navigate('Home', { username });
            } else {
                // Navegar a otra pantalla si no es "juanAdmin"
                navigation.navigate('HomeVen', { username });
            }
        } catch (error) {
            console.error(error);
            Alert.alert("Error de Login", "Usuario no encontrado. Verifique sus credenciales.");
        }
    };
    

    const handleRegister = () => {
        navigation.navigate('Register');
    };

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/logo.png')} style={styles.logo} />
            <Text style={styles.titulo}>Login</Text>


          <View style={styles.inputContainer}>
                <Icon name="person-outline" size={24} color="#525fe1" style={styles.icon} />
                <TextInput
                    placeholder="Username"
                    style={styles.textInput}
                    placeholderTextColor="#525fe1"
                    value={username}
                    onChangeText={setUsername}
                />
            </View>
            <View style={styles.inputContainer}>
                <Icon name="lock-closed-outline" size={24} color="#525fe1" style={styles.icon} />
                <TextInput
                    placeholder="Password"
                    style={styles.textInput}
                    placeholderTextColor="#525fe1"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    autoCapitalize="none"
                />
            </View>
          
            <View style={styles.padreBoton}>
                <TouchableOpacity style={styles.cajaBoton} onPress={handleLogin}>
                    <Text style={styles.textBoton}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cajaBoton} onPress={handleRegister}>
                    <Text style={styles.textBoton}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#c8c8ff',
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    titulo: {
        fontSize: 24,
        marginBottom: 40,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 8,
        marginBottom: 15,
        paddingHorizontal: 10,
        elevation: 5,
        width: '90%',
    },
    icon: {
        marginRight: 10,
    },
    textInput: {
        flex: 1,
        height: 50,
        color: '#525fe1',
    },
    checkboxT: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    Terminos: {
        marginLeft: 10,
    },
    padreBoton: {
        flexDirection: 'row', // Alineación horizontal
        justifyContent: 'center', // Centra los elementos horizontalmente
        alignItems: 'center',
        marginTop: 50,
    },
    cajaBoton: {
        backgroundColor: '#525fe1',
        borderRadius: 10,

        paddingVertical: 10,
        width: 150,
        marginTop: 100,
        marginHorizontal: 10, // Espacio horizontal entre los botones
    },
    textBoton: {
        textAlign: 'center',
        color: 'white',
    },
});

export default LoginScreen;
