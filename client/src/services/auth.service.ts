import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/users";
/* const API_URL = "http://localhost:3000/api/auth/";
 */
export const fetchUsers = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const register = (name: string, email: string, password: string) => {
  return axios.post(API_URL + "signup", { name, email, password });
};






export const login = async (email: string, password: string) => {
  return axios.post(API_URL + "login", { email, password }).then((response) => {
    if (response.data.accessToken) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  });
};

export const logout = () => {
  localStorage.removeItem("user");
};

export const getCurrentUser = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);

  return null;
};
