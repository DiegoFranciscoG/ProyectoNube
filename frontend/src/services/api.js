import axios from 'axios';

const API_URL = 'http://localhost:8080/api/tareas';

export const getTareas = () => axios.get(API_URL);
export const createTarea = (tarea) => axios.post(API_URL, tarea);
export const updateTarea = (id, tarea) => axios.put(`${API_URL}/${id}`, tarea);
export const deleteTarea = (id) => axios.delete(`${API_URL}/${id}`);
