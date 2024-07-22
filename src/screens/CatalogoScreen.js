import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Modal,StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation desde react-navigation

const CatalogScreen = () => {
  const navigation = useNavigation(); // Obtiene el objeto navigation

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const hombresData = [
    { id: 1, nombre: 'Hombre 1', imagen: require('../../assets/hombre1.png'), size: '42', model: '24680', color: 'Marrón', price:850 },
    { id: 2, nombre: 'Hombre 2', imagen: require('../../assets/HO2.png'), size: '40', model: '12345', color: 'Negro', price:850 },
    { id: 3, nombre: 'Hombre 1', imagen: require('../../assets/HO3.png'), size: '42', model: '24680', color: 'Marrón', price:850 },
    { id: 4, nombre: 'Hombre 2', imagen: require('../../assets/hombre1.png'), size: '40', model: '12345', color: 'Negro', price:850 },
    { id: 5, nombre: 'Hombre 1', imagen: require('../../assets/HO2.png'), size: '42', model: '24680', color: 'Marrón', price:850 },
    { id: 6, nombre: 'Hombre 2', imagen: require('../../assets/HO3.png'), size: '40', model: '12345', color: 'Negro', price:850 },
  ];

  const mujeresData = [
    { id: 1, nombre: 'Mujer 1', imagen: require('../../assets/mujer1.png'), size: 'S', model: '65432', color: 'Negro', price:850 },
    { id: 2, nombre: 'Mujer 2', imagen: require('../../assets/MU2.png'), size: 'M', model: '98765', color: 'Rojo', price:850},
    { id: 3, nombre: 'Mujer 1', imagen: require('../../assets/MU3.png'), size: 'S', model: '65432', color: 'Negro', price:850 },
    { id: 4, nombre: 'Mujer 2', imagen: require('../../assets/mujer1.png'), size: 'M', model: '98765', color: 'Rojo', price:850},
    { id: 5, nombre: 'Mujer 1', imagen: require('../../assets/MU2.png'), size: 'S', model: '65432', color: 'Negro', price:850 },
    { id: 6, nombre: 'Mujer 2', imagen: require('../../assets/MU3.png'), size: 'M', model: '98765', color: 'Rojo', price:850},
  ];

  const openModal = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10 }}>
        
        <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginTop: 10,marginBottom: 7,marginLeft:60}}>
          Catálogo Hombres
        </Text>
        <View style={{ width: 24, height: 24 }} />
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../assets/salir.png')}
            style={{ width: 24, height: 24, marginRight:10,marginLeft:10, }}
          />
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {hombresData.map((item) => (
          <TouchableOpacity key={item.id} onPress={() => openModal(item)}>
            <View style={{ margin: 6, width: 200, height: 250, borderWidth: 1, borderColor: '#c1c1c1',borderRadius:10, backgroundColor: '#fafafa' }}>
              <View style={{ padding: 10 }}>
                {/* <Text>{item.nombre}</Text> */}
                <Text>Talla: {item.size}</Text>
                <Text>Modelo: {item.model}</Text>
                <Text>Color: {item.color}</Text>
                <Text style={item.precio}>Precio: ${item.price}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Image source={item.imagen} style={{ width: '70%', height: '70%' }} resizeMode="cover" />
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginTop: 1,marginBottom: 10 }}>
        Catálogo Mujeres
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {mujeresData.map((item) => (
          <TouchableOpacity key={item.id} onPress={() => openModal(item)}>
            <View style={{ margin: 6,marginBottom:40, width: 200, height: 250, borderWidth: 1, borderColor: '#c1c1c1',borderRadius:10,backgroundColor: '#fafafa' }}>
              <View style={{ padding: 10 }}>
                {/* <Text>{item.nombre}</Text> */}
                <Text>Talla: {item.size}</Text>
                <Text>Modelo: {item.model}</Text>
                <Text>Color: {item.color}</Text>
                <Text style={item.precio}>Precio: ${item.price}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Image source={item.imagen} style={{ width: '70%', height: '70%' }} resizeMode="cover" />
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Modal visible={modalVisible} transparent={true} onRequestClose={closeModal}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
          <TouchableOpacity style={{ position: 'absolute', top: 20, right: 20 }} onPress={closeModal}>
            <Text style={{ color: 'white', fontSize: 18 }}>Cerrar</Text>
          </TouchableOpacity>
          {selectedItem && (
            <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
              <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>{selectedItem.nombre}</Text>
              <Text>Talla: {selectedItem.size}</Text>
              <Text>Modelo: {selectedItem.model}</Text>
              <Text>Color: {selectedItem.color}</Text>
              <Image source={selectedItem.imagen} style={{ width: 300, height: 400, marginTop: 10 }} resizeMode="contain" />
            </View>
          )}
        </View>
      </Modal>
    </View>
  );
};const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#dedede',
    },
   
 
    // inputContainer: {
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     backgroundColor: 'white',
    //     borderRadius: 8,
    //     marginBottom: 15,
    //     paddingHorizontal: 10,
    //     elevation: 5,
    //     width: '90%',
    // },
    // icon: {
    //     marginRight: 10,
    // },
    // textInput: {
    //     flex: 1,
    //     height: 50,
    //     color: '#525fe1',
    // },
    // checkboxT: {
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     marginBottom: 20,
    // },
    // Terminos: {
    //     marginLeft: 10,
    // },
    // padreBoton: {
    //     flexDirection: 'row', // Alineación horizontal
    //     justifyContent: 'center', // Centra los elementos horizontalmente
    //     alignItems: 'center',
    //     marginTop: 50,
    // },
    // cajaBoton: {
    //     backgroundColor: '#525fe1',
    //     borderRadius: 10,

    //     paddingVertical: 10,
    //     width: 150,
    //     marginTop: 100,
    //     marginHorizontal: 10, // Espacio horizontal entre los botones
    // },
    // textBoton: {
    //     textAlign: 'center',
    //     color: 'white',
    // },
});

export default CatalogScreen;
