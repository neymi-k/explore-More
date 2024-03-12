import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://jsonplaceholder.typicode.com/api/";

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
