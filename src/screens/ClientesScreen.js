import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import useClienteForm from "../hooks/useClienteForm";
import styles from "../../styles/clienteStyles";
import TextInputWithIcon from "../components/TextInputWithIcon";
import Header from "../components/Header"; // Ajusta la importación según tu estructura de archivos
import { SafeAreaView } from "react-native-safe-area-context";

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
  } = useClienteForm();

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
                  onChangeText={(text) =>
                    handleInputChange("phoneNumber", text)
                  }
                />
                <TextInputWithIcon
                  icon="envelope"
                  placeholder="Correo Electrónico"
                  value={clienteData.email}
                  onChangeText={(text) => handleInputChange("email", text)}
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
              onChangeText={(text) => handleInputChange("phoneNumber", text)}
            />
            <TextInputWithIcon
              icon="envelope"
              placeholder="Correo Electrónico"
              value={newClienteData.email}
              onChangeText={(text) => handleInputChange("email", text)}
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
