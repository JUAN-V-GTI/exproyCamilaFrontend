import { useState } from "react";

import { initialClienteData } from "../constants/clienteConstants";
import axios from "axios";
import { API_ERROR_MESSAGES } from "../constants/clienteConstants";

const API_URL = "http://192.168.100.2:8083/api/clientes";

const useClienteForm = () => {
  const [view, setView] = useState("default");
  const [clienteID, setClienteID] = useState("");
  const [clienteData, setClienteData] = useState(null);
  const [newClienteData, setNewClienteData] = useState(initialClienteData);
  const [isClienteDisabled, setIsClienteDisabled] = useState(false);
  const [clientesList, setClientesList] = useState([]);

  const handleInputChange = (name, value) => {
    if (view === "edit") {
      setClienteData({ ...clienteData, [name]: value });
    } else {
      setNewClienteData({ ...newClienteData, [name]: value });
    }
  };

  const handleSearchCliente = async () => {
    try {
      const response = await axios.get(`${API_URL}/search/${clienteID}`);
      setClienteData(response.data);
      setView("edit");
    } catch (error) {
      console.error(API_ERROR_MESSAGES.SEARCH_CLIENTE, error);
    }
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post(
        `${API_URL}/save/client`,
        newClienteData
      );
      alert("Cliente registrado con éxito");
      setNewClienteData(initialClienteData);
    } catch (error) {
      console.error(API_ERROR_MESSAGES.REGISTER_CLIENTE, error);
    }
  };

  const handleSaveChanges = async () => {
    try {
      const response = await axios.put(
        `${API_URL}/update/${clienteID}`,
        clienteData
      );
      alert("Cliente actualizado con éxito");
      setClienteData(response.data);
    } catch (error) {
      console.error(API_ERROR_MESSAGES.UPDATE_CLIENTE, error);
    }
  };

  const handleDisableCliente = async () => {
    try {
      const response = await axios.put(`${API_URL}/disable/${clienteID}`);
      setIsClienteDisabled(true);
      alert("Cliente deshabilitado con éxito");
    } catch (error) {
      console.error(API_ERROR_MESSAGES.DISABLE_CLIENTE, error);
    }
  };

  const handleEnableCliente = async () => {
    try {
      console.log(`URL: ${API_URL}/enable/${clienteID}`);
      const response = await axios.put(`${API_URL}/enable/${clienteID}`);
      setIsClienteDisabled(false);
      alert("Cliente habilitado con éxito");
    } catch (error) {
      console.error(API_ERROR_MESSAGES.ENABLE_CLIENTE, error);
    }
  };
  const fetchAllClientes = async () => {
    try {
      const response = await axios.get(`${API_URL}/lista/all`);
      console.log("Response data:", response.data); // Verificar los datos recibidos
      setClientesList(response.data);
    } catch (error) {
      console.error(API_ERROR_MESSAGES.FETCH_ALL_CLIENTES, error);
    }
  };

  return {
    view,
    setView,
    clienteID,
    clienteData,
    setClienteID,
    clientesList,
    newClienteData,
    isClienteDisabled,
    handleInputChange,
    handleSearchCliente,
    handleRegister,
    handleSaveChanges,
    handleDisableCliente,
    handleEnableCliente,
    fetchAllClientes,
  };
};

export default useClienteForm;
