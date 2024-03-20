import axios from "axios";

/* const API_URL = "https://jsonplaceholder.typicode.com/api/";
 */ const API_URL = "http://localhost:3001/";

export const fetchProducts = async () => {
  const response = await axios.get(API_URL + "trips");
  return response.data;
};

export const fetchProduct = async (id: number) => {
  const response = await axios.get(API_URL + "trips/" + id);
  return response.data;
};

export const fetchProductsBySeller = async (userId: number) => {
  try {
    const response = await axios.get(`${API_URL}trips/seller/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error al encontrar los productos por vendedor:", error);
    throw error;
  }
};

export const addProduct = async (data: any) => {
  try {
    //query params ?userId=${data.id}
    const response = await axios.post(`/trips/${data.id}`, data);
    return response.data;
  } catch (error) {
    console.error("Error al agregar el producto:", error);
    throw error;
  }
};

export const updateProduct = async (id: number, data: any) => {
  try {
    const response = await axios.put("/api/trips/" + id, data);
    return response.data;
  } catch (error) {
    console.error("Error al actualizar el producto:", error);
    throw error;
  }
};

export const deleteProduct = async (id: number) => {
  try {
    const response = await axios.delete("/api/trips/" + id);
    return response.data;
  } catch (error) {
    console.error("Error al borrar el producto:", error);
    throw error;
  }
};
