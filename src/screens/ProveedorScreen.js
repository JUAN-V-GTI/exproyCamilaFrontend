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
import useProveedorForm from "../hooks/useProveedorForm";
import styles from "../../styles/formsStyles";

import TextInputWithIcon from "../components/TextInputWithIcon";
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome";

const ProveedoresScreen = ({ navigation }) => {
  const {
    view,
    setView,
    proveedorID,
    setProveedorID,
    proveedorData,
    newProveedorData,
    handleRegister,
    handleInputChange,
    handleSearchProveedor,
    handleSaveChanges,
    isProveedorDisabled,
    handleDisableProveedor,
    handleEnableProveedor,
    fetchAllProveedores,
    proveedoresList,
  } = useProveedorForm();
  const [showProveedores, setShowProveedores] = useState(false);

  useEffect(() => {
    fetchAllProveedores();
  }, []);

  const handleGoHome = () => {
    navigation.navigate("Home");
  };

  const renderProveedorItem = ({ item }) => {
    console.log("Proveedor item:", item);
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
          onPress={() => setShowProveedores(!showProveedores)}
        >
          <Text style={styles.showButtonText}>
            {showProveedores ? "Ocultar Proveedores" : "Mostrar Proveedores"}
          </Text>
        </TouchableOpacity>

        {showProveedores && (
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
                data={proveedoresList}
                renderItem={renderProveedorItem}
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
                placeholder="Buscar Proveedor por ID"
                value={proveedorID}
                onChangeText={setProveedorID}
              />
              <TouchableOpacity
                style={styles.searchButton}
                onPress={handleSearchProveedor}
              >
                <Text style={styles.searchButtonText}>Buscar</Text>
              </TouchableOpacity>
            </View>
            {proveedorData && (
              <ScrollView style={styles.scrollView}>
                <TextInputWithIcon
                  icon="user"
                  placeholder="Nombre"
                  value={proveedorData.name}
                  onChangeText={(text) => handleInputChange("name", text)}
                />
                <TextInputWithIcon
                  icon="user"
                  placeholder="Apellido Paterno"
                  value={proveedorData.firstname}
                  onChangeText={(text) => handleInputChange("firstname", text)}
                />
                <TextInputWithIcon
                  icon="user"
                  placeholder="Apellido Materno"
                  value={proveedorData.lastname}
                  onChangeText={(text) => handleInputChange("lastname", text)}
                />
                 <TextInputWithIcon
                    icon="institution"
                    placeholder="Empresa"
                    value={proveedorData.empresa}
                    onChangeText={(text) =>handleInputChange("empresa", text)}
                  />
                <TextInputWithIcon
                  icon="phone"
                  placeholder="Teléfono"
                  value={proveedorData.phoneNumber}
                  keyboardType="numeric"
                  maxLength={10}
                  onChangeText={(text) => {
                    const numericText = text.replace(/[^0-9]/g, "");
                    if (numericText.length <= 10) {
                      handleInputChange("phoneNumber", numericText);
                    }
                    if (text !== numericText) {
                      Alert.alert(
                        "Error",
                        "Solo se aceptan dígitos",
                        [
                          { text: "OK", onPress: () => console.log("OK Pressed") },
                        ],
                        { cancelable: false }
                      );
                    }
                  }}
                />
                <TextInputWithIcon
                    icon="credit-card"
                    placeholder="Número de cuenta"
                    value={proveedorData.numeroCuenta}
                    onChangeText={(text) =>handleInputChange("numeroCuenta", text)}
                    
                  />
                <TextInputWithIcon
                  icon="envelope"
                  placeholder="Correo Electrónico"
                  value={proveedorData.email}
                  onChangeText={(text) => handleInputChange("email", text.toLowerCase())}
                />
                <TextInputWithIcon
                  icon="shield"
                  placeholder="Rol"
                  value={proveedorData.notes}
                  onChangeText={(text) => handleInputChange("rol", text)}
                />
                <TouchableOpacity
                  style={styles.saveButton}
                  onPress={handleSaveChanges}
                >
                  <Text style={styles.buttonText}>Guardar Cambios</Text>
                </TouchableOpacity>
                {isProveedorDisabled ? (
                  <TouchableOpacity
                    style={[styles.saveButton, { backgroundColor: "#8dd684" }]}
                    onPress={handleEnableProveedor}
                  >
                    <Text style={styles.buttonText}>Habilitar</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={[styles.saveButton, { backgroundColor: "#8d0000" }]}
                    onPress={handleDisableProveedor}
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
              value={newProveedorData.name}
              onChangeText={(text) => handleInputChange("name", text)}
            />
            <TextInputWithIcon
              icon="user"
              placeholder="Apellido Paterno"
              value={newProveedorData.firstname}
              onChangeText={(text) => handleInputChange("firstname", text)}
            />
            <TextInputWithIcon
              icon="user"
              placeholder="Apellido Materno"
              value={newProveedorData.lastname}
              onChangeText={(text) => handleInputChange("lastname", text)}
            />
            <TextInputWithIcon
                icon="institution"
                placeholder="Empresa"
                value={newProveedorData.empresa}
                onChangeText={(text) => handleInputChange("empresa", text)}
              />
            <TextInputWithIcon
              icon="phone"
              placeholder="Teléfono"
              value={newProveedorData.phoneNumber}
              keyboardType="numeric"
              maxLength={10}
              onChangeText={(text) => {
                const numericText = text.replace(/[^0-9]/g, "");
                if (numericText.length <= 10) {
                  handleInputChange("phoneNumber", numericText);
                }
                if (text !== numericText) {
                  Alert.alert(
                    "Error",
                    "Solo se aceptan dígitos",
                    [
                      { text: "OK", onPress: () => console.log("OK Pressed") },
                    ],
                    { cancelable: false }
                  );
                }
              }}
            />
            <TextInputWithIcon
                icon="credit-card"
                placeholder="Número de cuenta"
                value={newProveedorData.numeroCuenta}
                onChangeText={(text) => handleInputChange("numeroCuenta", text)}
              />
            <TextInputWithIcon
              icon="envelope"
              placeholder="Correo Electrónico"
              value={newProveedorData.email}
              onChangeText={(text) => handleInputChange("email", text.toLowerCase())}
            />
             <TextInputWithIcon
                icon="shield"
                placeholder="Rol"
                value={newProveedorData.rol}
                onChangeText={(text) => handleInputChange("rol", text)}
              />
            <TouchableOpacity
              style={styles.saveButton}
              onPress={handleRegister}
            >
              <Text style={styles.buttonText}>Registrar</Text>
            </TouchableOpacity>
          </ScrollView>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ProveedoresScreen;
