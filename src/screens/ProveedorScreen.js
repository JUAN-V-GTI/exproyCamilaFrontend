import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import useProveedorForm from "../hooks/useProveedorForm";
import styles from "../../styles/formsStyles";
import TextInputWithIcon from "../components/TextInputWithIcon";
import Header from "../components/Header"; 
import { SafeAreaView } from "react-native-safe-area-context";

const ProveedorScreen =({ navigation }) => {
const {
    view,
    setView,
    proveedorID,
    setProveedorID,
    proveedorDate,
    newProveedorDate,
    isProveedorDisabled,
    handleInputChange,
    handleSearchProveedor,
    handleRegister,
    handleSaveChanges,
    handleDisableProveedor,
    handleEnableProveedor,   
} = useProveedorForm();

const handleGoHome = () => {
    navigation.navigate("Home");
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

      {view === "default" && (
        <View style={styles.defaultView}>
          <Image
            source={require("../../assets/logo.png")}
            style={styles.logo}
          />
          <Text style={styles.logoText}>En construcción</Text>
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
              {proveedorDate && (
                <ScrollView style={styles.scrollView}>
                  <TextInputWithIcon
                    icon="user"
                    placeholder="Nombre"
                    value={proveedorDate.name}
                    onChangeText={(text) => handleInputChange("name", text)}
                  />
                  <TextInputWithIcon
                    icon="user"
                    placeholder="Apellido Paterno"
                    value={proveedorDate.firstname}
                    onChangeText={(text) => handleInputChange("firstname", text)}
                  />
                  <TextInputWithIcon
                    icon="user"
                    placeholder="Apellido Materno"
                    value={proveedorDate.lastname}
                    onChangeText={(text) => handleInputChange("lastname", text)}
                  />
                  <TextInputWithIcon
                    icon="bank"
                    placeholder="Número de cuenta"
                    value={proveedorDate.numeroCuenta}
                    onChangeText={(text) =>handleInputChange("numeroCuenta", text)}
                  />
                  <TextInputWithIcon
                    icon="phone"
                    placeholder="Teléfono"
                    value={proveedorDate.phoneNumber}
                    onChangeText={(text) =>handleInputChange("phoneNumber", text)}
                  />
                  <TextInputWithIcon
                    icon="envelope"
                    placeholder="Correo Electrónico"
                    value={proveedorDate.email}
                    onChangeText={(text) => handleInputChange("email", text)}
                  />
                  <TextInputWithIcon
                    icon="shield-account"
                    placeholder="Rol"
                    value={proveedorDate.rol}
                    onChangeText={(text) => handleInputChange("rol", text)}
                  />

                  <TextInputWithIcon
                    icon="institution"
                    placeholder="Empresa"
                    value={proveedorDate.empresa}
                    onChangeText={(text) =>handleInputChange("empresa", text)}
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
                      style={[styles.saveButton, { backgroundColor: "red" }]}
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
                value={newProveedorDate.name}
                onChangeText={(text) => handleInputChange("name", text)}
              />
              <TextInputWithIcon
                icon="user"
                placeholder="Apellido Paterno"
                value={newProveedorDate.firstname}
                onChangeText={(text) => handleInputChange("firstname", text)}
              />
              <TextInputWithIcon
                icon="user"
                placeholder="Apellido Materno"
                value={newProveedorDate.lastname}
                onChangeText={(text) => handleInputChange("lastname", text)}
              />
              <TextInputWithIcon
                icon="bank"
                placeholder="Número de cuenta"
                value={newProveedorDate.numeroCuenta}
                onChangeText={(text) => handleInputChange("numeroCuenta", text)}
              />
              <TextInputWithIcon
                icon="phone"
                placeholder="Teléfono"
                value={newProveedorDate.phoneNumber}
                onChangeText={(text) => handleInputChange("phoneNumber", text)}
              />
               <TextInputWithIcon
                icon="envelope"
                placeholder="Correo Electrónico"
                value={newProveedorDate.email}
                onChangeText={(text) => handleInputChange("email", text)}
              />
              <TextInputWithIcon
                icon="shield-account"
                placeholder="Rol"
                value={newProveedorDate.rol}
                onChangeText={(text) => handleInputChange("rol", text)}
              />


              <TextInputWithIcon
                icon="institution"
                placeholder="Empresa"
                value={newProveedorDate.empresa}
                onChangeText={(text) => handleInputChange("empresa", text)}
              />
             
             

              <TouchableOpacity
                style={styles.saveButton}
                onPress={handleRegister}
              >
                <Text style={styles.buttonText}>Registrar proveedor</Text>
              </TouchableOpacity>
            </ScrollView>
          )}
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  };
export default ProveedorScreen;