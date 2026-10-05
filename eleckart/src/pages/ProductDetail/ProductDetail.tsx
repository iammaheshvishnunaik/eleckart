import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Breadcrumb from "../../components/common/Breadcrumb";
import ProductGallery from "../../components/Product/ProductGallery/ProductGallery";
import ProductInfo from "../../components/Product/ProductInfo/ProductInfo";
import type { Product } from "../../types/product";
import { getProducts } from "../../services/productService";

const ProductDetail = () => {
    const { category, slug } = useParams();
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProducts();
                setProducts(data);
            } catch (error) {
                setError("Failed to load product");
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <div className="p-8 text-center">Loading product...</div>;
    }

    if (error) {
        return (
            <div className="p-8 text-center text-red-600">
                {error}
            </div>
        );
    }

    const product = products.find((item) => item.slug === slug);

    if (!product) {
        return <div>Product not found</div>;
    }

    // Breadcrumb
    const categoryLabel = category
        ? category.charAt(0).toUpperCase() + category.slice(1)
        : "";

    const breadcrumbItems = [
        {
            label: "Home",
            path: "/",
        },
        {
            label: "All Products",
            path: "/products",
        },
        {
            label: categoryLabel,
            path: `/products?category=${category}`,
        },
        {
            label: product.name,
        },
    ];

    return (
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <Breadcrumb items={breadcrumbItems} />

            <div className="grid gap-10 lg:grid-cols-2">

                <ProductGallery
                    images={product.images}
                    productName={product.name}
                />

                <ProductInfo product={product} />

            </div>
        </div>
    );
};

export default ProductDetail;