// src/hooks/useCliente.js
import { useState } from 'react';
import { initialClienteData } from '../constants/clienteConstants';
import axios from 'axios';
// import { createCliente } from '../services/Auth';  // Asegúrate de tener este servicio implementado.


const API_URL = 'http://192.168.100.2:8083/api/clientes';

const useClienteForm = () => {
  const [view, setView] = useState('default');
  const [clienteID, setClienteID] = useState('');
  const [clienteData, setClienteData] = useState(null);
  const [newClienteData, setNewClienteData] = useState(initialClienteData);

  const handleInputChange = (name, value) => {
    if (view === 'edit') {
      setClienteData({ ...clienteData, [name]: value });
    } else {
      setNewClienteData({ ...newClienteData, [name]: value });
    }
  };

  const handleSearchCliente = async () => {
    try {
      const response = await axios.get(`${API_URL}/search/${clienteID}`);
      setClienteData(response.data);
      setView('edit');
    } catch (error) {
      console.error(API_ERROR_MESSAGES.SEARCH_CLIENTE, error);
    }
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post(`${API_URL}/save/client`, newClienteData);
      alert('Cliente registrado con éxito');
      setNewClienteData(initialClienteData);
    } catch (error) {
      console.error(API_ERROR_MESSAGES.REGISTER_CLIENTE, error);
    }
  };

  const handleSaveChanges = async () => {
    try {
      const response = await axios.put(`${API_URL}/update/${clienteID}`, clienteData);
      alert('Cliente actualizado con éxito');
      setClienteData(response.data);
    } catch (error) {
      console.error(API_ERROR_MESSAGES.UPDATE_CLIENTE, error);
    }
  };

  return {
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
  };
};

export default useClienteForm;
