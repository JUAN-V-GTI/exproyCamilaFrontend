import { useState } from "react";
import { initialProveedorData } from "../constants/proveerorConstants";
import axios from "axios";
import { API_ERROR_MESSAGES } from "../constants/proveerorConstants";

const API_URL = "http://192.168.100.2:8083/api/proveedor";

const useProveedorForm = () =>{
    const [view, setView] = useState("default");
    const [proveedorID, setProveedorID] = useState("");
    const [proveedorDate, setProveedorDate] = useState(null);
    const [newProveedorDate, setNewProveedorDate] =useState (initialProveedorData);
    const [isProveedorDisabled, setIsProveedorDisabled] = useState(false);
    
    const handleInputChange = (name, value) => {
        if (view === "edit") {
          setProveedorDate({ ...proveedorDate, [name]: value });
        } else {
          setNewProveedorDate({ ...newProveedorDate, [name]: value });
        }
      };

      const handleSearchProveedor = async ()=>{ 
      try {
        const response = await axios.get(`${API_URL}/search/${proveedorID}`);
        setProveedorDate(response.data);
        setView("edit");
        } catch (error) {
            console.error(API_ERROR_MESSAGES.SEARCH_PROVEEDOR);
      }
    };
    const handleRegister = async () =>{
        try {
            const response = await axios.post(
                `${API_URL}/save/proveedor`, 
                newProveedorDate
            );
            alert("proveedor registrado con exito");
            setNewProveedorDate(initialProveedorData);
        } catch (error) {
            console.error(API_ERROR_MESSAGES.REGISTER_PROVEEDOR,error);
        }
    };
    const handleSaveChanges = async () =>{
        try {
            const response = await axios.put(
                `${API_URL}/update/${proveedorID}`,
                proveedorDate
            );
            alert("proveedor actualizado con exito");
            setProveedorDate(response.date)
        }catch (error) {
            console.error(API_ERROR_MESSAGES.UPDATE_PROVEEDOR);
        }
    };
    const handleDisableProveedor = async() =>{
        try {
            const response = await axios.put(`${API_URL}/disable/${proveedorID}`);
            setIsProveedorDisabled(true);
            alert("proveedor deshabilitado  con éxito");
           
        } catch (error){
            console.error(API_ERROR_MESSAGES.DISABLE_PROVEEDOR, error);
        }
    };

    const handleEnableProveedor = async() =>{
        try {
            console.log(`URL: ${API_URL}/enable/${proveedorID}`);
            const response = await axios.put(`${API_URL}/enable/${proveedorID}`);  
            setIsProveedorDisabled(false);
            alert("proveedor habilitado con éxito");
        
                } catch (error) {
                    console.error(API_ERROR_MESSAGES.ENABLE_PROVEEDOR, error);
                    }
                    };

return{
    view,
    setView,
    proveedorID,
    setProveedorID,
    proveedorDate,
    newProveedorDate,
    isProveedorDisabled,
    handleInputChange,
    handleSearchProveedor,
    handleRegister,
    handleSaveChanges,
    handleDisableProveedor,
    handleEnableProveedor,


};

    };

    export default useProveedorForm;