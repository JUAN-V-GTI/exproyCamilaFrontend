// src/components/TextInputWithIcon.js
import React from 'react';
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../styles/clienteStyles';

const TextInputWithIcon = ({ icon, placeholder, value, onChangeText }) => (
    <View style={styles.inputContainer}>
        <Icon name={icon} size={20} style={styles.icon} />
        <TextInput
            placeholder={placeholder}
            style={styles.textInput}
            value={value}
            onChangeText={onChangeText}
        />
    </View>
);

export default TextInputWithIcon;
