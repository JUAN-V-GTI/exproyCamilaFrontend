import { useState } from 'react';
import { initialProductoData } from '../constants/productoConstants';
import axios from 'axios';

const API_URL = 'http://192.168.100.2:8083/api/productos';

const useProductoForm = () => {
  const [view, setView] = useState('default');
  const [productoID, setProductoID] = useState('');
  const [productoData, setProductoData] = useState(null);
  const [newProductoData, setNewProductoData] = useState(initialProductoData);
    

  const handleInputChange = (name, value) => {
    if (view === 'edit') {
      setProductoData({ ...productoData, [name]: value });
    } else {
      setNewProductoData({ ...newProductoData, [name]: value });
    }
  };

  const handleSearchProducto = async () => {
    try {
      const response = await axios.get(`${API_URL}/search/${productoID}`);
      setProductoData(response.data);
      setView('edit');
    } catch (error) {
      console.error('Error al buscar producto', error);
    }
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post(`${API_URL}/save/producto`, newProductoData);
      alert('Producto registrado con éxito');
      setNewProductoData(initialProductoData);
    } catch (error) {
      console.error('Error al registrar producto', error);
    }
  };

  const handleSaveChanges = async () => {
    try {
      const response = await axios.put(`${API_URL}/update/${productoID}`, productoData);
      alert('Producto actualizado con éxito');
      setProductoData(response.data);
    } catch (error) {
      console.error('Error al actualizar producto', error);
    }
  };

  const handleDisable = async () => {
    try {
      const response = await axios.delete(`${API_URL}/disable/${productoID}`);
      alert('Producto deshabilitado con éxito');
    } catch (error) {
      console.error('Error al deshabilitar producto', error);
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
    handleDisable,
  };
};

export default useProductoForm;