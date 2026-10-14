
import type { Product } from "../types/product";

const API_URL = import.meta.env.VITE_API_URL;

export const getProducts = async (): Promise<Product[]> => {
    const response = await fetch(`${API_URL}/api/products`);

    if (!response.ok) {
        throw new Error("Failed to fetch products");
    }

    const data = await response.json();

    return data.products;
};