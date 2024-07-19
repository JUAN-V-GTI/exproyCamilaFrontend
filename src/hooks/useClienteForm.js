// src/hooks/useCliente.js
import { useState } from 'react';
import { initialClienteData } from '../constants/clienteConstants';
// import { createCliente } from '../services/Auth';  // Asegúrate de tener este servicio implementado.

const useCliente = () => {
    const [view, setView] = useState('default');
    const [clienteID, setClienteID] = useState('');
    const [clienteData, setClienteData] = useState(null);
    const [newClienteData, setNewClienteData] = useState(initialClienteData);

    const handleRegister = async () => {
        try {
            await createCliente(newClienteData);
            alert('Cliente registrado exitosamente');
            setNewClienteData(initialClienteData);
            setView('default');
        } catch (error) {
            console.error('Error al registrar cliente', error);
        }
    };

    const handleInputChange = (name, value) => {
        if (view === 'edit' && clienteData) {
            setClienteData({ ...clienteData, [name]: value });
        } else {
            setNewClienteData({ ...newClienteData, [name]: value });
        }
    };

    const handleSearchCliente = () => {
        // Simulación de búsqueda de cliente
        setClienteData({
            name: 'Juan',
            firstname: 'Pérez',
            lastname: 'García',
            rfc: 'JPG123456789',
            phoneNumber: '1234567890',
            email: 'juan.perez@example.com',
            notes: 'Cliente importante',
            enabled: true,
        });
    };

    const handleSaveChanges = () => {
        // Implementar la lógica para guardar cambios
        alert('Cambios guardados exitosamente');
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

export default useCliente;
