// components/ClienteForm.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from '../../styles';

const ClienteForm = ({ newClienteData, handleInputChange, handleRegister }) => {
    return (
        <ScrollView style={styles.scrollView}>
            {/* Formulario de registro */}
            <View style={styles.inputContainer}>
                <Icon name="user" size={20} style={styles.icon} />
                <TextInput
                    placeholder="Nombre"
                    style={styles.textInput}
                    value={newClienteData.name}
                    onChangeText={(text) => handleInputChange('name', text)}
                />
            </View>
            <View style={styles.inputContainer}>
                <Icon name="user" size={20} style={styles.icon} />
                <TextInput
                    placeholder="Apellido Paterno"
                    style={styles.textInput}
                    value={newClienteData.firstname}
                    onChangeText={(text) => handleInputChange('firstname', text)}
                />
            </View>
            {/* Agregar más campos según sea necesario */}
            <TouchableOpacity style={styles.saveButton} onPress={handleRegister}>
                <Text style={styles.buttonText}>Registrar Cliente</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default ClienteForm;
