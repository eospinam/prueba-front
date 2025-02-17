import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;;

const login = async (correo, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      correo,
      password,
    });
    if (response.data.token) {
      localStorage.setItem('DataToken', JSON.stringify(response.data.token));
    }
    return response.data;
  } catch (error) {
    console.error('Error en login:', error);
    throw error;
  }
};

const logout = () => {
  localStorage.removeItem('DataToken');
};

const authService = {
  login,
  logout,
};

export default authService;