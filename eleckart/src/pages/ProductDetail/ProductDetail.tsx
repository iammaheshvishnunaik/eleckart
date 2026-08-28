import { useParams } from "react-router-dom";
import { Products } from "../../data/products";
import Breadcrumb from "../../components/common/Breadcrumb";
import ProductGallery from "../../components/Product/ProductGallery/ProductGallery";
import ProductInfo from "../../components/Product/ProductInfo/ProductInfo";

const ProductDetail = () => {
    const { category, productId } = useParams();

    const product = Products.find((item) => item._id === productId);
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

                <ProductInfo product={product}/>

            </div>
        </div>
    );
};

export default ProductDetail;