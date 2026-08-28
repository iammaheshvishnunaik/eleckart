export interface Product {
    _id: string;
    name: string;
    slug: string;
    category: string;
    brand: string;
    images: string[];
    price: number;
    originalPrice: number;
    rating: number;
    discount: number;
    reviewCount: number;
    description: string;
    specifications: {
        key: string;
        value: string;
    }[];
    isFeatured: boolean;
    createdAt: string;
    salesCount: number;
    inStock: boolean;
}