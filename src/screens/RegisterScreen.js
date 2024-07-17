import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { register } from '../services/Auth.js';

const RegisterScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [country, setCountry] = useState('');
    const [role, setRole] = useState('');

    const handleRegister = async () => {
        try {
            await register({ username, password, firstname, lastname, country, role });
            navigation.navigate('Login');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Register</Text>
            <TextInput
                placeholder="Username"
                style={styles.textInput}
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                placeholder="Password"
                style={styles.textInput}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TextInput
                placeholder="Firstname"
                style={styles.textInput}
                value={firstname}
                onChangeText={setFirstname}
            />
            <TextInput
                placeholder="Lastname"
                style={styles.textInput}
                value={lastname}
                onChangeText={setLastname}
            />
            <TextInput
                placeholder="Country"
                style={styles.textInput}
                value={country}
                onChangeText={setCountry}
            />
            <TextInput
                placeholder="Role"
                style={styles.textInput}
                value={role}
                onChangeText={setRole}
            />
            <TouchableOpacity style={styles.cajaBoton} onPress={handleRegister}>
                <Text style={styles.textBoton}>Register</Text>
            </TouchableOpacity>
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
    cajaBoton: {
        backgroundColor: '#525fe1',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    textBoton: {
        color: '#fff',
    },
});

export default RegisterScreen;
