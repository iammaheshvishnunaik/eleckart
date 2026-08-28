import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { Link } from "react-router-dom"

import CartItem from "../../components/Cart/CartItem";
import OrderSummary from "../../components/Cart/OrderSummary";

const Cart = () => {
    const cartItems = useSelector(
        (state: RootState) => state.cart.items
    );

    const subtotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const totalSavings = cartItems.reduce(
        (total, item) =>
            total +
            (item.originalPrice - item.price) * item.quantity,
        0
    );

    const totalQuantity = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                {/* Page Header */}
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                        Shopping Cart
                    </h1>

                    {cartItems.length > 0 && (
                        <p className="mt-1 text-sm text-gray-500">
                            {totalQuantity}{" "}
                            {totalQuantity === 1 ? "item" : "items"} in your cart
                        </p>
                    )}
                </div>

                {/* Empty Cart */}
                {cartItems.length === 0 ? (
                    <div className="rounded-xl border border-gray-200 bg-white px-6 py-16 text-center shadow-sm">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-3xl">
                            🛒
                        </div>

                        <h2 className="mt-5 text-xl font-bold text-gray-900">
                            Your cart is empty
                        </h2>

                        <p className="mt-2 text-sm text-gray-500">
                            Looks like you haven't added anything to your cart yet.
                        </p>
                        <Link to="/products">
                            <button className="mt-6 rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700">
                                Continue Shopping
                            </button>
                        </Link>
                    </div>
                ) : (
                    /* Cart Content */
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_350px]">
                        {/* Cart Items */}
                        <div className="space-y-4">
                            {cartItems.map((item) => (
                                <CartItem
                                    key={item._id}
                                    item={item}
                                />
                            ))}
                        </div>

                        {/* Order Summary */}
                        <OrderSummary
                            subtotal={subtotal}
                            totalSavings={totalSavings}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;