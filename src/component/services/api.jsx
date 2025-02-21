import axios from "axios";

const API_URL = "http://localhost:5000/api"; // Ensure this is correct!

export const getTasks = async () => axios.get(`${API_URL}/tasks`);
export const addTask = async (task) => axios.post(`${API_URL}/tasks`, task);
export const updateTask = async (id, task) => axios.put(`${API_URL}/tasks/${id}`, task);
export const deleteTask = async (id) => axios.delete(`${API_URL}/tasks/${id}`);
