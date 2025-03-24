import axios from 'axios';

const API_URL = 'https://67e0f8d858cc6bf785239861.mockapi.io/K23CNT3-Ldt-2310900092/ldt-user';

export const getUsers = () => axios.get(API_URL);
export const getUser = (id) => axios.get(`${API_URL}/${id}`);
export const createUser = (user) => axios.post(API_URL, user);
export const updateUser = (id, user) => axios.put(`${API_URL}/${id}`, user);
export const deleteUser = (id) => axios.delete(`${API_URL}/${id}`);
