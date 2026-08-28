import { ShoppingCart } from "lucide-react";
import type { Product } from "../../../types/product";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../../store/store";
import { addToCart } from "../../../store/cartSlice";

interface ProductInfoProps {
    product: Product;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
    const dispatch = useDispatch<AppDispatch>();
    const cartItems = useSelector(
        (state: RootState) => state.cart.items
    );
    const isInCart = cartItems.some(
        (item) => item._id === product._id
    );

    return (
        <div className="space-y-6">

            {/* Product Name & Brand */}
            <div>
                <h1 className="text-2xl font-semibold leading-tight text-gray-900 sm:text-3xl">
                    {product.name}
                </h1>

                <p className="mt-2 text-sm text-gray-500">
                    Brand:{" "}
                    <span className="font-medium text-gray-800">
                        {product.brand}
                    </span>
                </p>
            </div>

            {/* Rating & Reviews */}
            <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 rounded bg-green-600 px-2.5 py-1 text-sm font-medium text-white">
                    <span>★</span>
                    <span>{product.rating}</span>
                </div>

                <span className="text-sm text-gray-500">
                    {product.reviewCount} Reviews
                </span>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200" />

            {/* Price */}
            <div>
                <div className="flex flex-wrap items-center gap-3">

                    <span className="text-3xl font-bold text-gray-900">
                        ₹{product.price.toLocaleString("en-IN")}
                    </span>

                    <span className="text-lg text-gray-500 line-through">
                        ₹{product.originalPrice.toLocaleString("en-IN")}
                    </span>

                    <span className="text-lg font-semibold text-green-600">
                        {product.discount}% off
                    </span>

                </div>
            </div>

            {/* Description */}
            <div>
                <h2 className="mb-2 text-lg font-semibold text-gray-900">
                    Description
                </h2>

                <p className="leading-7 text-gray-600">
                    {product.description}
                </p>
            </div>


            {/* Specifications */}
            <div>
                <h2 className="mb-2 text-lg font-semibold text-gray-900">
                    Specifications
                </h2>

                <div className="leading-7 text-gray-600">
                    {product.specifications.map((spec, index) => (
                        <div key={index}>
                            <label className="leading-7 text-gray-600 font-bold mr-2">
                                {spec.key}:
                            </label>
                            <label className="leading-7 text-gray-600">
                                {spec.value}
                            </label>
                        </div>
                    ))

                    }
                </div>
            </div>


            {/* Stock Status */}
            <div>
                {product.inStock ? (
                    <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-green-500" />

                        <span className="font-semibold text-green-600">
                            In Stock
                        </span>
                    </div>
                ) : (
                    <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-500" />

                        <span className="font-semibold text-red-600">
                            Out of Stock
                        </span>
                    </div>
                )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row">

                <button
                    type="button"
                    onClick={() => dispatch(addToCart(product))}
                    disabled={!product.inStock}
                    className={`flex w-1/2
                        ${isInCart ? "text-green-600 border-green-600 hover:bg-indigo-50" : "text-indigo-600 border-indigo-600 hover:bg-indigo-50"} 
                        items-center justify-center rounded-md bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-gray-300`}
                >
                    <ShoppingCart size={20} className="mr-2" />
                    {isInCart ? "✓ Added to Cart" : "Add to Cart"}
                </button>

                {/*<button
                    type="button"
                    disabled={!product.inStock}
                    className="flex flex-1 items-center justify-center gap-2 rounded-md bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-gray-300"
                >
                    <Zap size={20} />
                    Buy Now
                </button>*/}

            </div>

        </div>
    );
};

export default ProductInfo;