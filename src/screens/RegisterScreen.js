import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet ,Image 
    
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
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
             <Image source={require('../../assets/logo.png')} style={styles.logo} />
            <Text style={styles.titulo}>Register</Text>
            <View style={styles.inputContainer}>
                <Icon name="person-outline" size={24} color="#525fe1" style={styles.icon} />
                <TextInput
                    placeholder="Username"
                    style={styles.textInput}
                    value={username}
                    onChangeText={setUsername}
                />
            </View>
            <View style={styles.inputContainer}>
                <Icon name="lock-closed-outline" size={24} color="#525fe1" style={styles.icon} />
                <TextInput
                    placeholder="Password"
                    style={styles.textInput}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
            </View>
            <View style={styles.inputContainer}>
                <Icon name="person-outline" size={24} color="#525fe1" style={styles.icon} />
                <TextInput
                    placeholder="Firstname"
                    style={styles.textInput}
                    value={firstname}
                    onChangeText={setFirstname}
                />
            </View>
            <View style={styles.inputContainer}>
                <Icon name="person-outline" size={24} color="#525fe1" style={styles.icon} />
                <TextInput
                    placeholder="Lastname"
                    style={styles.textInput}
                    value={lastname}
                    onChangeText={setLastname}
                />
            </View>
            <View style={styles.inputContainer}>
                <Icon name="mail-outline" size={24} color="#525fe1" style={styles.icon} />
                <TextInput
                    placeholder="Email"
                    style={styles.textInput}
                    value={country}
                    onChangeText={setCountry}
                />
            </View>
            <View style={styles.inputContainer}>
                <Icon name="briefcase-outline" size={24} color="#525fe1" style={styles.icon} />
                <TextInput
                    placeholder="Role"
                    style={styles.textInput}
                    value={role}
                    onChangeText={setRole}
                />
            </View>
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
        backgroundColor: '#c8c8ff',
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    titulo: {
        fontSize: 24,
        marginBottom: 20,
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
    cajaBoton: {
        backgroundColor: '#525fe1',
        borderRadius: 10,
        paddingVertical: 10,
        width: 150,
        marginTop: 20,
        marginHorizontal: 10, 
    },
    textBoton: {
        textAlign: 'center',
        color: 'white',
    },
});

export default RegisterScreen;