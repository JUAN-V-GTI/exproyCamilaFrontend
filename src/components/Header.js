import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Header = ({ setView, handleGoHome }) => {
  const navigation = useNavigation(); // Obtiene el objeto navigation
  return (
    <View style={styles.header}>
      <View style={styles.menuButtons}>
        <TouchableOpacity style={styles.menuButton} onPress={() => setView('edit')}>
          <Text style={styles.menuButtonText}>EDITAR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton} onPress={() => setView('register')}>
          <Text style={styles.menuButtonText}>REGISTRAR</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/salir.png')} style={styles.exit} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  header: {
    height: 60,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuButton: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  menuButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  exit: {
    marginLeft: 15,
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
};

export default Header;
