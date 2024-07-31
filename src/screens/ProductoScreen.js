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
import useProductoForm from "../hooks/useProductoForm";
import styles from "../../styles/productoStyles";
import TextInputWithIcon from "../components/TextInputWithIcon";
import Header from "../components/Header"; 
import { SafeAreaView } from "react-native-safe-area-context";

const ProductoScreen = ({ navigation }) => {
    const {
        view,
        setView,
        productoID,
        setProductoID,
        productoData,
        newProductoData,
        isProductoDisabled,
        handleRegister,
        handleInputChange,
        handleSearchProducto,
        handleSaveChanges,
        handleDisableProducto,
        handleEnableProducto,
        handleImagePick,
        selectedImage,
    } = useProductoForm();

    const handleGoHome = () => {
        navigation.navigate("Home");
    };
    
    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.container}
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
                        {productoData && (
                            <ScrollView style={styles.scrollView}>
                                <TextInputWithIcon
                                    icon="user"
                                    placeholder="Producto"
                                    value={productoData.producto || ""}
                                    onChangeText={(text) => handleInputChange("producto", text)}
                                />
                                <TextInputWithIcon
                                    icon="user"
                                    placeholder="Genero"
                                    value={productoData.genero || ""}
                                    onChangeText={(text) => handleInputChange("genero", text)}
                                />
                                <TextInputWithIcon
                                    icon="user"
                                    placeholder="Talla"
                                    value={productoData.talla || ""}
                                    onChangeText={(text) => handleInputChange("talla", text)}
                                />
                                <TextInputWithIcon
                                    icon="institution"
                                    placeholder="Color"
                                    value={productoData.color || ""}
                                    onChangeText={(text) => handleInputChange("color", text)}
                                />
                                <TextInputWithIcon
                                    icon="phone"
                                    placeholder="Precio"
                                    value={productoData.precio || ""}
                                    onChangeText={(text) => handleInputChange("precio", text)}
                                />
                                <TouchableOpacity
                                    style={styles.imagePickerButton}
                                    onPress={handleImagePick}
                                >
                                    <Text style={styles.buttonText}>Seleccionar Imagen</Text>
                                </TouchableOpacity>
                                {selectedImage && (
                                    <Image
                                        source={{ uri: selectedImage.uri }}
                                        style={styles.imagePreview}
                                    />
                                )}
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
                                        style={[styles.saveButton, { backgroundColor: "red" }]}
                                        onPress={handleDisableProducto}
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
                            placeholder="Producto"
                            value={newProductoData.producto}
                            onChangeText={(text) => handleInputChange("producto", text)}
                        />
                        <TextInputWithIcon
                            icon="user"
                            placeholder="Genero"
                            value={newProductoData.genero}
                            onChangeText={(text) => handleInputChange("genero", text)}
                        />
                        <TextInputWithIcon
                            icon="user"
                            placeholder="Talla"
                            value={newProductoData.talla}
                            onChangeText={(text) => handleInputChange("talla", text)}
                        />
                        <TextInputWithIcon
                            icon="institution"
                            placeholder="Color"
                            value={newProductoData.color}
                            onChangeText={(text) => handleInputChange("color", text)}
                        />
                        <TextInputWithIcon
                            icon="phone"
                            placeholder="Precio"
                            value={newProductoData.precio}
                            onChangeText={(text) => handleInputChange("precio", text)}
                        />
                        <TouchableOpacity
                            style={styles.imagePickerButton}
                            onPress={handleImagePick}
                        >
                            <Text style={styles.buttonText}>Seleccionar Imagen</Text>
                        </TouchableOpacity>
                        {selectedImage && (
                            <Image
                                source={{ uri: selectedImage.uri }}
                                style={styles.imagePreview}
                            />
                        )}
                        <TouchableOpacity
                            style={styles.saveButton}
                            onPress={handleRegister}
                        >
                            <Text style={styles.buttonText}>Registrar Producto</Text>
                        </TouchableOpacity>
                    </ScrollView>
                )}
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default ProductoScreen;
