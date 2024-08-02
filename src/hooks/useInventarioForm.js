import { useState } from "react";
import {initialProductoData,API_ERROR_MESSAGES} from "../constants/productoConstants";
import axios from "axios";

const apiUrl = "http://192.168.100.2:8083/api/productos";

const useInventarioForm = () => {
  const [view, setView] = useState("default");
  const [productoID, setProductoID] = useState("");
  const [productoData, setProductoData] = useState(null);
  const [newProductoData, setNewProductoData] = useState(initialProductoData);
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
      const response = await axios.get(`${apiUrl}/search/filter`, {
        params: {
          modelo: newProductoData.modelo,
          talla: newProductoData.talla,
          color: newProductoData.color,
        },
      });
      setProductosList(response.data);
      setView("search");
    } catch (error) {
      console.error(API_ERROR_MESSAGES.SEARCH_PRODUCTO, error);
    }
  };

  const fetchAllProductos = async () => {
    try {
      const response = await axios.get(`${apiUrl}/lista/all`);
      setProductosList(response.data);
    } catch (error) {
      console.error(API_ERROR_MESSAGES.FETCH_ALL_PRODUCTOS, error);
    }
  };

  return {
    view,
    setView,
    productoID,
    setProductoID,
    handleSearchProducto,
    handleSearchProducto,
    fetchAllProductos,
    productosList,
  };
};
export default useInventarioForm;
