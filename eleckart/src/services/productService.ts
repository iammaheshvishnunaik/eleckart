import type { Product } from "../types/product";

const API_URL = "http://localhost:5000/api/products";

export const getProducts = async (): Promise<Product[]> => {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Failed to fetch products");
    }

    const data = await response.json();

    return data.products;
};