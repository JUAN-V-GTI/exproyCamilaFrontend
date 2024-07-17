import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
// import {} from '@rneui/themed'
import { login } from '../services/Auth.js';

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberPassword, setRememberPassword] = useState(false);

    const handleLogin = async () => {
        try {
            await login({ username, password });
            navigation.navigate('Home');
        } catch (error) {
            console.error(error);
        }
    };

    const handleRegister = () => {
        navigation.navigate('Register');
    };

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/logo.png')} style={styles.logo} />
            <Text style={styles.titulo}>Login</Text>
            <TextInput
                placeholder="Username"
                style={styles.textInput}
                placeholderTextColor="#525fe1"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                placeholder="Password"
                style={styles.textInput}
                placeholderTextColor="#525fe1"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                autoCapitalize="none"
            />
            {/* <View style={styles.checkboxT}>
                <CheckBox
                    checked={rememberPassword}
                    onPress={() => setRememberPassword(!rememberPassword)}
                />
                <Text style={styles.Terminos}>Recordar Contraseñas</Text>
            </View> */}
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
        backgroundColor: '#fff',
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    titulo: {
        fontSize: 24,
        marginBottom: 20,
    },
    textInput: {
        width: '80%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
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
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%',
    },
    cajaBoton: {
        backgroundColor: '#525fe1',
        padding: 10,
        borderRadius: 5,
    },
    textBoton: {
        color: '#fff',
    },
});

export default LoginScreen;
