import axios from 'axios';

const API_URL = 'http://192.168.100.2:8080/cam';
//----------------------------token------------------------------//
const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};
//----------------------------login------------------------------//
export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    setAuthToken(response.data.token);
    return response.data;
  } catch (error) {
    //...
  }
};
//----------------------------register------------------------------//
export const register = async (registerData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, registerData);
    if (response.status === 200 || response.status === 201) {
      return response.data;
    } else {
      console.error('Error en la respuesta del servidor:', response.status, response.data);
      throw new Error('Error en la respuesta del servidor');
    }
  } catch (error) {
    console.error('Error al registrar usuario', error);
    throw error;
  }
};

export const logout = () => {
  setAuthToken(null);
};
//----------------------------cliente------------------------------//
// Agregamos las funciones para consumir las APIs de clientes
export const getClienteById = async (id, token) => {
  setAuthToken(token);
  try {
    const response = await axios.get(`${API_URL}/api/clientes/search/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
//----------------------------crear cliente------------------------------//
export const createCliente = async (clienteData, token) => {
  setAuthToken(token);
  try {
    const response = await axios.post(`${API_URL}/api/clientes/save/client`, clienteData);
    if (response.status === 200 || response.status === 201) {
      return response.data;
    } else {
      console.error('Error en la respuesta del servidor:', response.status, response.data);
      throw new Error('Error en la respuesta del servidor');
    }
  } catch (error) {
    console.error('Error al crear cliente', error);
    throw error;
  }
};
//----------------------------actualizar cliente------------------------------//
export const updateCliente = async (id, clienteData, token) => {
  setAuthToken(token);
  try {
    const response = await axios.put(`${API_URL}/api/clientes/update/${id}`, clienteData);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
//----------------------------deshabilitar cliente------------------------------//
export const disableCliente = async (id, token) => {
  setAuthToken(token);
  try {
    const response = await axios.delete(`${API_URL}/api/clientes/desable/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
//----------------------------busqueda de proveedor por id------------------------------//
// Agregamos las funciones para consumir las APIs de clientes
export const getProveedorById = async (id, token) => {
  setAuthToken(token);
  try {
    const response = await axios.get(`${API_URL}/api/proveedor/search/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
//----------------------------crear proveedor------------------------------//
export const createProveedor = async (proveedorData, token) => {
  setAuthToken(token);
  try {
    const response = await axios.post(`${API_URL}/api/proveedor/save/proveedor`, proveedorData);
    if (response.status === 200 || response.status === 201) {
      return response.data;
    } else {
      console.error('Error en la respuesta del servidor:', response.status, response.data);
      throw new Error('Error en la respuesta del servidor');
    }
  } catch (error) {
    console.error('Error al crear proveedor', error);
    throw error;
  }
};
//----------------------------actualizar proveedor------------------------------//
export const updateProveedor = async (id, proveedorData, token) => {
  setAuthToken(token);
  try {
    const response = await axios.put(`${API_URL}/api/proveedor/update/${id}`, proveedorData);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
//----------------------------deshabilitar proveedor------------------------------//
export const disableProveedor = async (id, token) => {
  setAuthToken(token);
  try {
    const response = await axios.delete(`${API_URL}/api/proveedor/desable/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};