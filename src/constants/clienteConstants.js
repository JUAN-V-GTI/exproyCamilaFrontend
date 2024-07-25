//constants/clientConstatnts.js
export const initialClienteData = {
  name: "",
  firstname: "",
  lastname: "",
  institution: "",
  phoneNumber: "",
  email: "",
  notes: "",
  enabled: true,
};

export const API_ERROR_MESSAGES = {
  REGISTER_CLIENTE: "Error al registrar cliente",
  SEARCH_CLIENTE: "Error al buscar cliente",
  UPDATE_CLIENTE: "Error al actualizar cliente",
  DISABLE_CLIENTE: "Error al deshabilitar cliente",
  ENABLE_CLIENTE: "Error al habilitar cliente",
};

export const SCREEN_VIEWS = {
  DEFAULT: "default",
  EDIT: "edit",
  REGISTER: "register",
};
