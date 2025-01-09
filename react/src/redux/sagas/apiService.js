import axios from "axios";

const apiUrl = process.env.REACT_APP_BACKEND_URL;

export const authApi = {
  login: (credentials) => axios.post(`${apiUrl}/login`, credentials),
};

export const productApi = {
  fetchProductData: (productId) => axios.get(`${apiUrl}/api/data/${productId}`),
};
