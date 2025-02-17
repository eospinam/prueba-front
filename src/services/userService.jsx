import React from 'react'

const API_URL = import.meta.env.VITE_API_URL;;

const UserCreate = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/User`,data );
    return response.data;
  } catch (error) {
    console.error('Error en login:', error);
    throw error;
  }
};
const UserGet = async () => {
  try {
    const response = await axios.get(`${API_URL}/User`);
    return response.data;
  } catch (error) {
    console.error('Error en login:', error);
    throw error;
  }
};

const  UserUpdate = async (id,data) => {
  try {
    const response = await axios.put(`${API_URL}/User/${id}`,data );
    return response.data;
  } catch (error) {
    console.error('Error en login:', error);
    throw error;
  }
};

const  UserDelete = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/User/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error en login:', error);
    throw error;
  }
};

const userService ={
    UserCreate,
    UserUpdate,
    UserGet,
    UserDelete
}

export default userService
