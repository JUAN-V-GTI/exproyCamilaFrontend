import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  FlatList,
  Alert,
} from "react-native";
import useProductoForm from "../hooks/useProductoForm";
import styles from "../../styles/formsStyles";
import TextInputWithIcon from "../components/TextInputWithIcon";
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";

const ProductosScreen = ({ navigation }) => {
  const {
    view,
    setView,
    productoID,
    setProductoID,
    productoData,
    newProductoData,
    handleRegister,
    handleInputChange,
    handleSearchProducto,
    handleSaveChanges,
    isProductoDisabled,
    handleDisableProducto,
    handleEnableProducto,
    fetchAllProductos,
    productosList,
  } = useProductoForm();
  const [showProductos, setShowProductos] = useState(false);

  useEffect(() => {
    fetchAllProductos();
  }, []);

  const handleGoHome = () => {
    navigation.navigate("Home");
  };

  const renderProductoItem = ({ item }) => {
    return (
      <View style={styles.tableRow}>
        <Text style={styles.id}>{item.id}</Text>
        <Text style={styles.nombre}>{item.producto}</Text>
        <Text style={styles.nombre}>{item.modelo}</Text>
        
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
          onPress={() => setShowProductos(!showProductos)}
        >
          <Text style={styles.showButtonText}>
            {showProductos ? "Ocultar Productos" : "Mostrar Productos"}
          </Text>
        </TouchableOpacity>

        {showProductos && (
          <View style={styles.containerTable}>
            <View style={styles.tableHeader}>
              <Text style={styles.tableHeaderCell}>ID</Text>
              <Text style={styles.tableHeaderNombre}>Producto</Text>
              <Text style={styles.tableHeaderNombre}>Modelo</Text>
              
            </View>

            <ScrollView style={styles.scrollView}>
              <FlatList
                data={productosList}
                renderItem={renderProductoItem}
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
                placeholder="Buscar Producto por ID"
                value={productoID}
                onChangeText={setProductoID}
              />
              
              <TouchableOpacity
                style={styles.searchButton}
                onPress={handleSearchProducto}
              >
                <Text style={styles.searchButtonText}>Buscar</Text>
              </TouchableOpacity>
            </View>
            {productoData ? (
              <ScrollView style={styles.scrollView}>
                <TextInputWithIcon
                  icon="shopping-cart"
                  placeholder="Producto"
                  value={productoData.producto || ""}
                  onChangeText={(text) => handleInputChange("producto", text)}
                />
                <TextInputWithIcon
                  icon="tag"
                  placeholder="Modelo"
                  value={productoData.modelo || ""}
                  onChangeText={(text) => handleInputChange("modelo", text)}
                />
                <TextInputWithIcon
                  icon="expand"
                  placeholder="Talla"
                  value={productoData.talla || ""}
                  onChangeText={(text) => handleInputChange("talla", text)}
                />
                <TextInputWithIcon
                  icon="paint-brush"
                  placeholder="Color"
                  value={productoData.color || ""}
                  onChangeText={(text) => handleInputChange("color", text)}
                />
                <TextInputWithIcon
                  icon="dollar"
                  placeholder="Precio"
                  value={productoData.precio || ""}
                  keyboardType="numeric"
                  onChangeText={(text) => handleInputChange("precio", text)}
                />
                <TextInputWithIcon
                  icon="venus-mars"
                  placeholder="Género"
                  value={productoData.genero || ""}
                  onChangeText={(text) => handleInputChange("genero", text)}
                />
                <TouchableOpacity
                  style={styles.saveButton}
                  onPress={handleSaveChanges}
                >
                  <Text style={styles.buttonText}>Guardar Cambios</Text>
                </TouchableOpacity>
                {isProductoDisabled ? (
                  <TouchableOpacity
                    style={[styles.saveButton, { backgroundColor: "#8dd684" }]}
                    onPress={handleEnableProducto}
                  >
                    <Text style={styles.buttonText}>Habilitar</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={[styles.saveButton, { backgroundColor: "#8d0000" }]}
                    onPress={handleDisableProducto}
                  >
                    <Text style={styles.buttonText}>Deshabilitar</Text>
                  </TouchableOpacity>
                )}
              </ScrollView>
            ) : (
              <Text></Text>
            )}
          </View>
        )}

        {view === "register" && (
          <ScrollView style={styles.scrollView}>
            <TextInputWithIcon
              icon="shopping-cart"
              placeholder="Producto"
              value={newProductoData?.producto || ""}
              onChangeText={(text) => handleInputChange("producto", text)}
            />
            <TextInputWithIcon
              icon="tag"
              placeholder="Modelo"
              value={newProductoData?.modelo || ""}
              onChangeText={(text) => handleInputChange("modelo", text)}
            />
            <TextInputWithIcon
              icon="expand"
              placeholder="Talla"
              value={newProductoData?.talla || ""}
              onChangeText={(text) => handleInputChange("talla", text)}
            />
            <TextInputWithIcon
              icon="paint-brush"
              placeholder="Color"
              value={newProductoData?.color || ""}
              onChangeText={(text) => handleInputChange("color", text)}
            />
            <TextInputWithIcon
              icon="dollar"
              placeholder="Precio"
              value={newProductoData?.precio || ""}
              keyboardType="numeric"
              onChangeText={(text) => handleInputChange("precio", text)}
            />
            <TextInputWithIcon
              icon="venus-mars"
              placeholder="Género"
              value={newProductoData?.genero || ""}
              onChangeText={(text) => handleInputChange("genero", text)}
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

export default ProductosScreen;
