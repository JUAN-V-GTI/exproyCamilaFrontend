import { useState } from "react";
import { initialClienteData,API_ERROR_MESSAGES  } from "../constants/clienteConstants";
import Constants from 'expo-constants';
import axios from 'axios'; // Add this line to import axios

const apiUrl = Constants.expoConfig.extra.env.API_URL_CATALOGS;
const anotherEnvVar = Constants.expoConfig.extra.env.ANOTHER_ENV_VAR;

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
      const response = await axios.get(`${apiUrl}/search/${clienteID}`);
      setClienteData(response.data);
      setView("edit");
    } catch (error) {
      console.error(API_ERROR_MESSAGES.SEARCH_CLIENTE, error);
    }
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post(
        `${apiUrl}/save/client`,
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
        `${apiUrl}/update/${clienteID}`,
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
      const response = await axios.put(`${apiUrl}/disable/${clienteID}`);
      setIsClienteDisabled(true);
      alert("Cliente deshabilitado con éxito");
    } catch (error) {
      console.error(API_ERROR_MESSAGES.DISABLE_CLIENTE, error);
    }
  };

  const handleEnableCliente = async () => {
    try {
      console.log(`URL: ${apiUrl}/enable/${clienteID}`);
      const response = await axios.put(`${apiUrl}/enable/${clienteID}`);
      setIsClienteDisabled(false);
      alert("Cliente habilitado con éxito");
    } catch (error) {
      console.error(API_ERROR_MESSAGES.ENABLE_CLIENTE, error);
    }
  };
  const fetchAllClientes = async () => {
    try {
      const response = await axios.get(`${apiUrl}/lista/all`);
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