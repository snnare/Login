import axios from 'axios';
import { API_URL } from '../utils/config';

// Función para registrar usuarios
export async function registerApi(values) {
    try {
        const url = `${API_URL}/auth/local/register`;
        const response = await axios.post(url, values);
        return response.data; // Retorna la respuesta del registro
    } catch (error) {
        console.error('Error al registrar el usuario:', error);
        return null; // Retorna null en caso de error
    }
}

// Función para iniciar sesión de usuarios
export async function loginApi(values) {
    try {
        const url = `${API_URL}/auth/local`;
        const response = await axios.post(url, values);
        return response.data; // Retorna la respuesta del inicio de sesión
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        return null; // Retorna null en caso de error
    }
}
