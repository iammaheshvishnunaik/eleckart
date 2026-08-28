import { useDispatch } from "react-redux";
import { Link } from "react-router-dom"
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../../store/cartSlice";

import type { AppDispatch } from "../../store/store";
import type { Product } from "../../types/product";

interface CartItemProps {
  item: Product & {
    quantity: number;
  };
}

const CartItem = ({ item }: CartItemProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const productUrl = `/products/${item.category}/${item.slug}/${item._id}`;
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md sm:p-5">
      <div className="flex gap-4 sm:gap-6">
        {/* Product Image */}
        <div className="flex h-28 w-28 flex-shrink-0 items-center justify-center rounded-lg bg-gray-50 sm:h-36 sm:w-36">
          <Link to={productUrl}> <img
            src={item.images[0]}
            alt={item.name}
            className="h-full w-full object-contain p-2"
          />
          </Link>
        </div>

        {/* Product Details */}
        <div className="flex min-w-0 flex-1 flex-col">
          {/* Name + Remove */}
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <Link to={productUrl}><h2 className="line-clamp-2 text-base font-semibold text-gray-900 sm:text-lg">
                {item.name}
              </h2>
              </Link>
              <p className="mt-1 text-sm text-gray-500">
                {item.brand}
              </p>
            </div>

            <button
              onClick={() =>
                dispatch(removeFromCart(item._id))
              }
              className="shrink-0 pt-0.5 text-sm font-medium text-gray-500 transition hover:text-red-600"
            >
              Remove
            </button>
          </div>

          {/* Price */}
          <div className="mt-3 flex items-center gap-2">
            <span className="text-lg font-bold text-gray-900">
              ₹{item.price.toLocaleString("en-IN")}
            </span>

            <span className="text-sm text-gray-400 line-through">
              ₹{item.originalPrice.toLocaleString("en-IN")}
            </span>

            <span className="text-sm font-medium text-green-600">
              {item.discount}% off
            </span>
          </div>

          {/* Quantity */}
          <div className="mt-auto pt-4">
            <div className="flex w-fit items-center overflow-hidden rounded-lg border border-gray-300">
              <button
                onClick={() =>
                  dispatch(decreaseQuantity(item._id))
                }
                disabled={item.quantity === 1}
                className="flex h-9 w-9 items-center justify-center text-lg font-medium text-gray-700 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
              >
                −
              </button>

              <span className="flex h-9 min-w-10 items-center justify-center border-x border-gray-300 px-3 text-sm font-semibold">
                {item.quantity}
              </span>

              <button
                onClick={() =>
                  dispatch(increaseQuantity(item._id))
                }
                className="flex h-9 w-9 items-center justify-center text-lg font-medium text-gray-700 transition hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;