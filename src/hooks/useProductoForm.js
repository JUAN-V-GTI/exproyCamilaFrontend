import { useState } from "react";
import { initialProductoData } from "../constants/productoConstants";
import axios from "axios";
import { launchImageLibrary } from "react-native-image-picker";
import { API_ERROR_MESSAGES } from "../constants/productoConstants";

const API_URL = "http://192.168.100.2:8083/api/productos";

const useProductoForm = () => {
  const [view, setView] = useState("default");
  const [productoID, setProductoID] = useState("");
  const [productoData, setProductoData] = useState({});
  const [newProductoData, setNewProductoData] = useState(initialProductoData);
  const [isProductoDisabled, setIsProductoDisabled] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleInputChange = (name, value) => {
    if (view === "edit") {
      setProductoData({ ...productoData, [name]: value });
    } else {
      setNewProductoData({ ...newProductoData, [name]: value });
    }
  };

  const handleImagePick = () => {
    const options = {
      mediaType: "photo",
      quality: 1,
    };
    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.assets && response.assets.length > 0) {
        setSelectedImage(response.assets[0]);
        handleInputChange("imagen", response.assets[0].uri);
      }
    });
  };

  const handleSearchProducto = async () => {
    try {
      const response = await axios.get(`${API_URL}/search/${productoID}`);
      setProductoData(response.data);
      setView("edit");
    } catch (error) {
      console.error(API_ERROR_MESSAGES.SEARCH_PRODUCTO, error);
    }
  };

  const handleRegister = async () => {
    try {
      const formData = new FormData();
      for (const key in newProductoData) {
        formData.append(key, newProductoData[key]);
      }
      if (selectedImage) {
        formData.append("imagen", {
          uri: selectedImage.uri,
          type: selectedImage.type,
          name: selectedImage.fileName,
        });
      }
  
      const response = await axios.post(`${API_URL}/save/producto`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      alert("Producto registrado con éxito");
      setNewProductoData(initialProductoData);
    } catch (error) {
      console.error(API_ERROR_MESSAGES.REGISTER_PRODUCTO, error);
    }
  };
  const handleSaveChanges = async () => {
    try {
      const formData = new FormData();
      for (const key in productoData) {
        formData.append(key, productoData[key]);
      }
      if (selectedImage) {
        formData.append("imagen", {
          uri: selectedImage.uri,
          type: selectedImage.type,
          name: selectedImage.fileName,
        });
      }

      const response = await axios.put(`${API_URL}/update/${productoID}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Producto actualizado con éxito");
      setProductoData(response.data);
    } catch (error) {
      console.error(API_ERROR_MESSAGES.UPDATE_PRODUCTO, error);
    }
  };

  const handleDisableProducto = async () => {
    try {
      await axios.patch(`${API_URL}/disable/${productoID}`);
      alert("Producto deshabilitado con éxito");
      setIsProductoDisabled(true);
    } catch (error) {
      console.error(API_ERROR_MESSAGES.DISABLE_PRODUCTO, error);
    }
  };

  const handleEnableProducto = async () => {
    try {
      await axios.patch(`${API_URL}/enable/${productoID}`);
      setIsProductoDisabled(false);
      alert("Producto habilitado con éxito");
    } catch (error) {
      console.error(API_ERROR_MESSAGES.ENABLE_PRODUCTO, error);
    }
  };

  const handleUploadFile = async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await axios.post(`${API_URL}/uploads`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Archivo subido con éxito");
      return response.data;
    } catch (error) {
      console.error("Error al subir el archivo", error);
    }
  };

  const handleDeleteFile = async (filename) => {
    try {
      await axios.delete(`${API_URL}/uploads/${filename}`);
      alert("Archivo eliminado con éxito");
    } catch (error) {
      console.error("Error al eliminar el archivo", error);
    }
  };

  return {
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
    handleUploadFile,
    handleDeleteFile,
  };
};

export default useProductoForm;
