import axios from "axios";
import authHeader from "./auth-header";

/* const API_URL = "https://jsonplaceholder.typicode.com/api/";
 */
const API_URL = "http://localhost:3001/";

export const fetchUsers = async () => {
  const response = await axios.get(API_URL + "users");
  return response.data;
};

export const deleteUsers = async (id: number) => {
  try {
    const response = await axios.delete(API_URL + "users/" + id);
    console.log("Usuario eliminado", response);
    return response.data;
  } catch (error) {
    console.error("Error al borrar el usuario:", error);
    throw error;
  }
};

//rutas por permisos
export const getPubliContent = async () => {
  const response = await axios.get(API_URL + "all");
  return response.data;
};

export const getUserDashboard = async () => {
  const response = await axios.get(API_URL + "user", { headers: authHeader() });
  return response.data;
};

export const getAdminDashboard = async () => {
  const response = await axios.get(API_URL + "admin", {
    headers: authHeader(),
  });
  return response.data;
};
