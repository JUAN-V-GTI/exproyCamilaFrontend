import { useState } from "react";
import { initialProductoData, API_ERROR_MESSAGES } from "../constants/clienteConstants";
import axios from 'axios';

const apiUrl = "http://192.168.100.2:8083/api/productos";

const useProductoForm = () => {
  const [view, setView] = useState("default");
  const [productoID, setProductoID] = useState("");
  const [productoData, setProductoData] = useState(null);
  const [newProductoData, setNewProductoData] = useState(initialProductoData);
  const [isProductoDisabled, setIsProductoDisabled] = useState(false);
  const [productosList, setProductosList] = useState([]);

  const handleInputChange = (name, value) => {
    if (view === "edit") {
      setProductoData({ ...productoData, [name]: value });
    } else {
      setNewProductoData({ ...newProductoData, [name]: value });
    }
  };

  const handleSearchProducto = async () => {
    try {
      const response = await axios.get(`${apiUrl}/search/${productoID}`);
      setProductoData(response.data);
      setView("edit");
    } catch (error) {
      console.error(API_ERROR_MESSAGES.SEARCH_producto, error);
    }
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post(
        `${apiUrl}/save/producto`,
        newProductoData
      );
      alert("producto registrado con éxito");
      setNewProductoData(initialProductoData);
    } catch (error) {
      console.error(API_ERROR_MESSAGES.REGISTER_producto, error);
    }
  };

  const handleSaveChanges = async () => {
    try {
      const response = await axios.put(
        `${apiUrl}/update/${productoID}`,
        productoData
      );
      alert("producto actualizado con éxito");
      setProductoData(response.data);
    } catch (error) {
      console.error(API_ERROR_MESSAGES.UPDATE_producto, error);
    }
  };

  const handleDisableProducto = async () => {
    try {
      const response = await axios.put(`${apiUrl}/disable/${productoID}`);
      setIsProductoDisabled(true);
      alert("producto deshabilitado con éxito");
    } catch (error) {
      console.error(API_ERROR_MESSAGES.DISABLE_producto, error);
    }
  };

  const handleEnableProducto = async () => {
    try {
      console.log(`URL: ${apiUrl}/enable/${productoID}`);
      const response = await axios.put(`${apiUrl}/enable/${productoID}`);
      setIsProductoDisabled(false);
      alert("producto habilitado con éxito");
    } catch (error) {
      console.error(API_ERROR_MESSAGES.ENABLE_producto, error);
    }
  };

  const fetchAllProductos = async () => {
    try {
      const response = await axios.get(`${apiUrl}/lista/all`);
      console.log("Response data:", response.data); // Verificar los datos recibidos
      setProductosList(response.data);
    } catch (error) {
      console.error(API_ERROR_MESSAGES.FETCH_ALL_productoES, error);
    }
  };

  return {
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
  };
};

export default useProductoForm;
