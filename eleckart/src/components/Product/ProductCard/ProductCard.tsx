import type { Product } from "../../../types/product";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../../store/store";
import { addToCart } from "../../../store/cartSlice";
import { Link } from "react-router-dom";

interface ProductCardProps {
    products: Product;
}

const ProductCard = ({ products }: ProductCardProps) => {

    const dispatch = useDispatch<AppDispatch>();
    const cartItems = useSelector(
        (state: RootState) => state.cart.items
    );
    const isInCart = cartItems.some(
        (item) => item._id === products._id
    );

    return (
        <Link to={`/products/${products.category}/${products.slug}/${products._id}`}>
            <div className="group flex h-full flex-col rounded-lg border border-gray-200 bg-white p-3 transition-shadow hover:shadow-lg">
                {/* Product Image */}
                <div className="relative flex h-52 items-center justify-center overflow-hidden rounded-md bg-gray-50">
                    <img
                        src={products.images[0]}
                        alt={products.name}
                        className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />

                    {/* Discount */}
                    {products.discount > 0 && (
                        <span className="absolute left-2 top-2 rounded bg-green-600 px-2 py-1 text-xs font-medium text-white">
                            {products.discount}% OFF
                        </span>
                    )}
                </div>

                {/* Product Information */}
                <div className="mt-3 flex flex-1 flex-col">
                    <p className="text-xs text-gray-500">{products.brand}</p>

                    <h3 className="mt-1 line-clamp-2 text-sm font-medium text-gray-800">
                        {products.name}
                    </h3>

                    {/* Rating */}
                    <div className="mt-2 flex items-center gap-1">
                        <span className="rounded bg-green-600 px-1.5 py-0.5 text-xs text-white">
                            {products.rating} ★
                        </span>
                    </div>

                    {/* Price */}
                    <div className="mt-2 flex items-center gap-2 mb-2">
                        <span className="text-lg font-bold text-gray-900">
                            ₹{products.price.toLocaleString("en-IN")}
                        </span>

                        <span className="text-xs text-gray-400 line-through">
                            ₹{products.originalPrice.toLocaleString("en-IN")}
                        </span>
                    </div>

                    {/* Add to Cart */}
                    <button
                        type="button"
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();

                            dispatch(addToCart(products));
                        }}
                        disabled={!products.inStock || isInCart}
                        className={`mt-auto w-full rounded-md py-2 text-sm font-medium transition-colors ${!products.inStock
                                ? "cursor-not-allowed bg-gray-300 text-gray-600"
                                : isInCart
                                    ? "cursor-default bg-green-600 text-white"
                                    : "bg-indigo-600 text-white hover:bg-indigo-700"
                            }`}
                    >
                        {!products.inStock
                            ? "Out of Stock"
                            : isInCart
                                ? "✓ Added to Cart"
                                : "Add to Cart"}
                    </button>
                </div>
            </div>
        </Link >
    );
};

export default ProductCard;