import axios from 'axios';
import type { Product } from '../../types';

async function getProducts(): Promise<Product[]> {
    try {
        const response = await axios.get<Product[]>('http://localhost:3000/productos');
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error; // Lanza el error para que el llamador pueda manejarlo si es necesario
    }
}
