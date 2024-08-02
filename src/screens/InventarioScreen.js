import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  TextInput,
  StyleSheet,
} from "react-native";
import useInventarioForm from "../hooks/useInventarioForm";
import { SafeAreaView } from "react-native-safe-area-context";

const InventarioScreen = ({ navigation }) => {
  const {
    handleSearchProducto,
    fetchAllProductos,
    productosList,
  } = useInventarioForm();

  const [filterModelo, setFilterModelo] = useState("");
  const [filterTalla, setFilterTalla] = useState("");
  const [filterColor, setFilterColor] = useState("");
  const [showProductos, setShowProductos] = useState(false);

  useEffect(() => {
    fetchAllProductos();
  }, []);

  const handleSearch = async () => {
    await handleSearchProducto({
      modelo: filterModelo,
      talla: filterTalla,
      color: filterColor,
    });
    setShowProductos(true);
  };

  const renderProductoItem = ({ item }) => (
    <View style={styles.tableRow}>
      <Text style={styles.id}>{item.id}</Text>
      <Text style={styles.producto}>{item.producto}</Text>
      <Text style={styles.modelo}>{item.modelo}</Text>
      <Text style={styles.talla}>{item.talla}</Text>
      <Text style={styles.color}>{item.color}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.filterContainer}>
        <TextInput
          style={styles.input}
          placeholder="Modelo"
          value={filterModelo}
          onChangeText={setFilterModelo}
        />
        <TextInput
          style={styles.input}
          placeholder="Talla"
          value={filterTalla}
          onChangeText={setFilterTalla}
        />
        <TextInput
          style={styles.input}
          placeholder="Color"
          value={filterColor}
          onChangeText={setFilterColor}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Mostrar Productos</Text>
        </TouchableOpacity>
      </View>

      {showProductos && (
        <View style={styles.containerTable}>
          <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderCell}>ID</Text>
            <Text style={styles.tableHeaderNombre}>Producto</Text>
            <Text style={styles.tableHeaderNombre}>Modelo</Text>
            <Text style={styles.tableHeaderNombre}>Talla</Text>
            <Text style={styles.tableHeaderNombre}>Color</Text>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 5,
    padding: 10,
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: "#F9F9F9",
  },
  searchButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#4CAF50",
  },
  searchButtonText: {
    color: "#FFFFFF",
    textAlign: "center",
  },
  containerTable: {
    flex: 1,
    marginTop: 20,
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#F1F1F1",
    padding: 10,
  },
  tableHeaderCell: {
    flex: 1,
    fontWeight: "bold",
    textAlign: "center",
  },
  tableHeaderNombre: {
    flex: 2,
    fontWeight: "bold",
    textAlign: "center",
  },
  tableRow: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
  },
  id: {
    flex: 1,
    textAlign: "center",
  },
  producto: {
    flex: 2,
    textAlign: "center",
  },
  modelo: {
    flex: 2,
    textAlign: "center",
  },
  talla: {
    flex: 2,
    textAlign: "center",
  },
  color: {
    flex: 2,
    textAlign: "center",
  },
  scrollView: {
    marginHorizontal: 20,
  },
});

export default InventarioScreen;
