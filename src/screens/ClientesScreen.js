import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Linking,
  FlatList,
  Alert,
} from "react-native";
import useClienteForm from "../hooks/useClienteForm";
import styles from "../../styles/formsStyles";

import TextInputWithIcon from "../components/TextInputWithIcon";
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome";

const ClientesScreen = ({ navigation }) => {
  const {
    view,
    setView,
    clienteID,
    setClienteID,
    clienteData,
    newClienteData,
    handleRegister,
    handleInputChange,
    handleSearchCliente,
    handleSaveChanges,
    isClienteDisabled,
    handleDisableCliente,
    handleEnableCliente,
    fetchAllClientes,
    clientesList,
  } = useClienteForm();
  const [showClientes, setShowClientes] = useState(false); // Define el estado aquí
  useEffect(() => {
    fetchAllClientes();
  }, []);

  const handleGoHome = () => {
    navigation.navigate("Home");
  };

  const renderClienteItem = ({ item }) => {
    console.log("Cliente item:", item); // Verificar los datos de cada cliente
    return (
      <View style={styles.tableRow}>
        <Text style={styles.id}>{item.id}</Text>
        <Text style={styles.nombre}>{`${item.name} ${item.firstname}`}</Text>
        <View style={styles.icon1}>
          <TouchableOpacity
            onPress={() => Linking.openURL(`tel:${item.phoneNumber}`)}
          >
            <Icon name="phone" style={{ fontSize: 24, color: "#007bff" }} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(`whatsapp://send?phone=${item.phoneNumber}`)
            }
          >
            <Icon name="whatsapp" style={{ fontSize: 24, color: "#34C759" }} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL(`mailto:${item.email}`)}
          >
            <Icon name="envelope" style={{ fontSize: 24, color: "#250e95" }} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      ></KeyboardAvoidingView>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Header setView={setView} handleGoHome={handleGoHome} />
        <TouchableOpacity
          style={styles.showButton}
          onPress={() => setShowClientes(!showClientes)}
        >
          <Text style={styles.showButtonText}>
            {showClientes ? "Ocultar Clientes" : "Mostrar Clientes"}
          </Text>
        </TouchableOpacity>

        {showClientes && (
          <View style={styles.containerTable}>
            <View style={styles.tableHeader}>
              <Text style={styles.tableHeaderCell}>ID</Text>
              <Text style={styles.tableHeaderNombre}>Nombre</Text>
              <View style={styles.tableHeaderIconos}>
                <Icon name="phone" style={{ fontSize: 24 }} />
                <Icon name="whatsapp" style={{ fontSize: 24 }} />
                <Icon name="envelope" style={{ fontSize: 24 }} />
              </View>
            </View>

            <ScrollView style={styles.scrollView}>
      <FlatList
        data={clientesList}
        renderItem={renderClienteItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </ScrollView>
  </View>
        )}

        {view === "edit" && (
          <View style={styles.editView}>
            <View style={styles.searchContainer}>
              <TextInputWithIcon
                icon="search"
                placeholder="Buscar Cliente por ID"
                value={clienteID}
                onChangeText={setClienteID}
              />
              <TouchableOpacity
                style={styles.searchButton}
                onPress={handleSearchCliente}
              >
                <Text style={styles.searchButtonText}>Buscar</Text>
              </TouchableOpacity>
            </View>
            {clienteData && (
              <ScrollView style={styles.scrollView}>
                <TextInputWithIcon
                  icon="user"
                  placeholder="Nombre"
                  value={clienteData.name}
                  onChangeText={(text) => handleInputChange("name", text)}
                />
                <TextInputWithIcon
                  icon="user"
                  placeholder="Apellido Paterno"
                  value={clienteData.firstname}
                  onChangeText={(text) => handleInputChange("firstname", text)}
                />
                <TextInputWithIcon
                  icon="user"
                  placeholder="Apellido Materno"
                  value={clienteData.lastname}
                  onChangeText={(text) => handleInputChange("lastname", text)}
                />
                <TextInputWithIcon
                  icon="institution"
                  placeholder="Institución"
                  value={clienteData.institution}
                  onChangeText={(text) =>
                    handleInputChange("institution", text)
                  }
                />
                <TextInputWithIcon
  icon="phone"
  placeholder="Teléfono"
  value={clienteData.phoneNumber}
  keyboardType="numeric" // Aceptar solo números
  maxLength={10} // Limitar la longitud a 10 caracteres
  onChangeText={(text) => {
    const numericText = text.replace(/[^0-9]/g, ''); // Eliminar caracteres no numéricos
    if (numericText.length <= 10) {
      handleInputChange("phoneNumber", numericText);
    }
    if (text !== numericText) {
      Alert.alert(
        'Error',
        'Solo se aceptan dígitos',
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false }
      );
    }
  }}
/>
<TextInputWithIcon
  icon="envelope"
  placeholder="Correo Electrónico"
  value={clienteData.email}
  onChangeText={(text) => handleInputChange("email", text.toLowerCase())}
/>
                <TextInputWithIcon
                  icon="sticky-note"
                  placeholder="Notas"
                  value={clienteData.notes}
                  onChangeText={(text) => handleInputChange("notes", text)}
                />
                <TouchableOpacity
                  style={styles.saveButton}
                  onPress={handleSaveChanges}
                >
                  <Text style={styles.buttonText}>Guardar Cambios</Text>
                </TouchableOpacity>
                {isClienteDisabled ? (
                  <TouchableOpacity
                    style={[styles.saveButton, { backgroundColor: "#8dd684" }]}
                    onPress={handleEnableCliente}
                  >
                    <Text style={styles.buttonText}>Habilitar</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={[styles.saveButton, { backgroundColor: "red" }]}
                    onPress={handleDisableCliente}
                  >
                    <Text style={styles.buttonText}>Deshabilitar</Text>
                  </TouchableOpacity>
                )}
              </ScrollView>
            )}
          </View>
        )}

        {view === "register" && (
          <ScrollView style={styles.scrollView}>
            <TextInputWithIcon
              icon="user"
              placeholder="Nombre"
              value={newClienteData.name}
              onChangeText={(text) => handleInputChange("name", text)}
            />
            <TextInputWithIcon
              icon="user"
              placeholder="Apellido Paterno"
              value={newClienteData.firstname}
              onChangeText={(text) => handleInputChange("firstname", text)}
            />
            <TextInputWithIcon
              icon="user"
              placeholder="Apellido Materno"
              value={newClienteData.lastname}
              onChangeText={(text) => handleInputChange("lastname", text)}
            />
            <TextInputWithIcon
              icon="institution"
              placeholder="Institución"
              value={newClienteData.institution}
              onChangeText={(text) => handleInputChange("institution", text)}
            />
            <TextInputWithIcon
  icon="phone"
  placeholder="Teléfono"
  value={newClienteData.phoneNumber}
  keyboardType="numeric" // Aceptar solo números
  maxLength={10} // Limitar la longitud a 10 caracteres
  onChangeText={(text) => {
    const numericText = text.replace(/[^0-9]/g, ''); // Eliminar caracteres no numéricos
    if (numericText.length <= 10) {
      handleInputChange("phoneNumber", numericText);
    }
    if (text !== numericText) {
      Alert.alert(
        'Error',
        'Solo se aceptan dígitos',
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false }
      );
    }
  }}
/>
<TextInputWithIcon
  icon="envelope"
  placeholder="Correo Electrónico"
  value={newClienteData.email}
  onChangeText={(text) => handleInputChange("email", text.toLowerCase())}
/>
            <TextInputWithIcon
              icon="sticky-note"
              placeholder="Notas"
              value={newClienteData.notes}
              onChangeText={(text) => handleInputChange("notes", text)}
            />
            <TouchableOpacity
              style={styles.saveButton}
              onPress={handleRegister}
            >
              <Text style={styles.buttonText}>Registrar Cliente</Text>
            </TouchableOpacity>
          </ScrollView>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default ClientesScreen;
