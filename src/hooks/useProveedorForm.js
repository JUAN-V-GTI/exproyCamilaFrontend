import { useState } from "react";
import { initialProveedorData } from "../constants/proveedorConstants";
import { API_ERROR_MESSAGES } from "../constants/proveedorConstants";
import Constants from 'expo-constants';
import axios from 'axios'; 

const apiUrl = Constants.expoConfig.extra.env.API_URL_PROVEEDOR;
const anotherEnvVar = Constants.expoConfig.extra.env.ANOTHER_ENV_VAR;
const useProveedorForm = () => {
  const [view, setView] = useState("default");
  const [proveedorID, setProveedorID] = useState("");
  const [proveedorData, setProveedorData] = useState(null);
  const [newProveedorData, setNewProveedorData] = useState(initialProveedorData);
  const [isProveedorDisabled, setIsProveedorDisabled] = useState(false);
  const [proveedoresList, setProveedoresList] = useState([]);

  const handleInputChange = (name, value) => {
    if (view === "edit") {
      setProveedorData({ ...proveedorData, [name]: value });
    } else {
      setNewProveedorData({ ...newProveedorData, [name]: value });
    }
  };

  const handleSearchProveedor = async () => {
    try {
      const response = await axios.get(`${apiUrl}/search/${proveedorID}`);
      setProveedorData(response.data);
      setView("edit");
    } catch (error) {
      console.error(API_ERROR_MESSAGES.SEARCH_PROVEEDOR, error);
    }
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post(
        `${apiUrl}/save/proveedor`,
        newProveedorData
      );
      alert("Proveedor registrado con éxito");
      setNewProveedorData(initialProveedorData);
    } catch (error) {
      console.error(API_ERROR_MESSAGES.REGISTER_PROVEEDOR, error);
    }
  };

  const handleSaveChanges = async () => {
    try {
      const response = await axios.put(
        `${apiUrl}/update/${proveedorID}`,
        proveedorData
      );
      alert("Proveedor actualizado con éxito");
      setProveedorData(response.data);
    } catch (error) {
      console.error(API_ERROR_MESSAGES.UPDATE_PROVEEDOR, error);
    }
  };

  const handleDisableProveedor = async () => {
    try {
      const response = await axios.put(`${apiUrl}/disable/${proveedorID}`);
      setIsProveedorDisabled(true);
      alert("Proveedor deshabilitado con éxito");
    } catch (error) {
      console.error(API_ERROR_MESSAGES.DISABLE_PROVEEDOR, error);
    }
  };

  const handleEnableProveedor = async () => {
    try {
      console.log(`URL: ${apiUrl}/enable/${proveedorID}`);
      const response = await axios.put(`${apiUrl}/enable/${proveedorID}`);
      setIsProveedorDisabled(false);
      alert("Proveedor habilitado con éxito");
    } catch (error) {
      console.error(API_ERROR_MESSAGES.ENABLE_PROVEEDOR, error);
    }
  };

  const fetchAllProveedores = async () => {
    try {
      const response = await axios.get(`${apiUrl}/lista/all`);
      console.log("Response data:", response.data); // Verificar los datos recibidos
      setProveedoresList(response.data);
    } catch (error) {
      console.error(API_ERROR_MESSAGES.FETCH_ALL_PROVEEDORES, error);
    }
  };

  return {
    view,
    setView,
    proveedorID,
    setProveedorID,
    proveedorData,
    proveedoresList,
    newProveedorData,
    isProveedorDisabled,
    handleInputChange,
    handleSearchProveedor,
    handleRegister,
    handleSaveChanges,
    handleDisableProveedor,
    handleEnableProveedor,
    fetchAllProveedores,
  };
};

export default useProveedorForm;