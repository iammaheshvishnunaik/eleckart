import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from "../../store/cartSlice";
import { useState } from "react";

const CheckoutSummary = () => {
    const navigate = useNavigate();

    // Cart items
    const cartItems = useSelector(
        (state: RootState) => state.cart.items
    );

    // Selected delivery address
    const selectedAddress = useSelector(
        (state: RootState) => state.checkout.selectedAddress
    );

    // Selected payment method
    const paymentMethod = useSelector(
        (state: RootState) => state.checkout.paymentMethod
    );

    // JWT token
    const token = useSelector(
        (state: RootState) => state.auth.token
    );

    // Calculate subtotal
    const subtotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    // Calculate total savings
    const totalSavings = cartItems.reduce(
        (total, item) =>
            total +
            (item.originalPrice - item.price) * item.quantity,
        0
    );

    const deliveryCharge = 0;

    const total = subtotal + deliveryCharge;

    // Convert payment method value into display text
    const getPaymentMethodName = () => {
        switch (paymentMethod) {
            case "razorpay":
                return "Razorpay";

            case "cod":
                return "Cash on Delivery";

            default:
                return "";
        }
    };

    const dispatch = useDispatch();

    // Create order
    const createOrder = async (
        paymentStatus: "pending" | "paid",
        razorpayOrderId?: string,
        razorpayPaymentId?: string
    ) => {
        const response = await fetch(
            "http://localhost:5000/api/orders",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },

                body: JSON.stringify({
                    items: cartItems.map((item) => ({
                        productId: item._id,
                        name: item.name,
                        brand: item.brand,
                        image: item.images[0],
                        price: item.price,
                        quantity: item.quantity,
                    })),

                    shippingAddress: selectedAddress,

                    paymentMethod,

                    paymentStatus,

                    razorpayOrderId,

                    razorpayPaymentId,

                    totalAmount: total,
                }),
            }
        );

        const data = await response.json();

        if (!data.success) {
            throw new Error(
                data.message || "Failed to create order"
            );
        }

        return data.order;
    };

    // COD order
    const handlePlaceOrder = async () => {
        if (cartItems.length === 0) {
            return;
        }

        if (!selectedAddress) {
            navigate("/checkout/address");
            return;
        }

        if (!paymentMethod) {
            navigate("/checkout/payment");
            return;
        }

        try {
            const order = await createOrder("pending");

            dispatch(clearCart());

            navigate("/order-placed", {
                state: {
                    orderId: order.orderId,
                },
            });
        } catch (error) {
            console.error("Order creation failed:", error);

            alert("Unable to place order. Please try again.");
        }
    };

    /* Razorpay */

    const [isProcessing, setIsProcessing] = useState(false);

    const handleRazorpayPayment = async () => {
        try {
            setIsProcessing(true);

            //Create Razorpay order
            const response = await fetch(
                "http://localhost:5000/api/payment/create-order",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                    },

                    body: JSON.stringify({
                        amount: total,
                    }),
                }
            );

            const data = await response.json();

            if (!data.success) {
                throw new Error(
                    data.message || "Unable to create Razorpay order"
                );
            }

            //Razorpay checkout options
            const options = {
                key: import.meta.env.VITE_RAZORPAY_KEY_ID,

                amount: data.order.amount,

                currency: data.order.currency,

                name: "elecKart",

                description: "elecKart Order",

                order_id: data.order.id,

                handler: async (response: {
                    razorpay_payment_id: string;
                    razorpay_order_id: string;
                    razorpay_signature: string;
                }) => {
                    try {
                        //Send payment details to backend
                        const verifyResponse =
                            await fetch(
                                "http://localhost:5000/api/payment/verify",
                                {
                                    method: "POST",

                                    headers: {
                                        "Content-Type": "application/json",
                                    },

                                    body: JSON.stringify({
                                        razorpay_payment_id:
                                            response.razorpay_payment_id,

                                        razorpay_order_id:
                                            response.razorpay_order_id,

                                        razorpay_signature:
                                            response.razorpay_signature,
                                    }),
                                }
                            );

                        const verifyData =
                            await verifyResponse.json();

                        //Check backend response
                        if (!verifyData.success) {
                            throw new Error(
                                verifyData.message ||
                                "Payment verification failed"
                            );
                        }

                        //Create order after payment verification
                        const order = await createOrder(
                            "paid",
                            response.razorpay_order_id,
                            response.razorpay_payment_id
                        );

                        //Clear cart ONLY after order creation
                        dispatch(clearCart());

                        navigate("/order-placed", {
                            state: {
                                orderId: order.orderId,
                            },
                        });
                    } catch (error) {
                        console.error(
                            "Payment verification error:",
                            error
                        );

                        alert(
                            "Payment verification failed. Please contact support."
                        );
                    }
                },

                theme: {
                    color: "#4F46E5",
                },
            };

            //Open Razorpay
            const razorpay = new Razorpay(options);
            razorpay.open();
        } catch (error) {
            console.error(
                "Razorpay payment failed:",
                error
            );

            alert(
                "Unable to start payment. Please try again."
            );
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">

                {/* Page Header */}
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                        Order Summary
                    </h1>

                    <p className="mt-1 text-sm text-gray-500">
                        Review your order before placing it
                    </p>
                </div>

                <div className="space-y-6">

                    {/* Delivery Address */}
                    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">

                        <div className="flex items-center justify-between">

                            <h2 className="text-lg font-bold text-gray-900">
                                Delivery Address
                            </h2>

                            <button
                                type="button"
                                onClick={() =>
                                    navigate(
                                        "/checkout/address"
                                    )
                                }
                                className="text-sm font-semibold text-indigo-600 hover:text-indigo-700"
                            >
                                Change
                            </button>

                        </div>

                        {selectedAddress && (
                            <div className="mt-4 text-sm text-gray-600">

                                <p className="font-semibold text-gray-900">
                                    {
                                        selectedAddress.fullName
                                    }
                                </p>

                                <p className="mt-1">
                                    {
                                        selectedAddress.mobile
                                    }
                                </p>

                                <p className="mt-2">
                                    {
                                        selectedAddress.address
                                    }
                                </p>

                                <p>
                                    {
                                        selectedAddress.city
                                    }
                                    ,{" "}
                                    {
                                        selectedAddress.state
                                    }{" "}
                                    -{" "}
                                    {
                                        selectedAddress.pincode
                                    }
                                </p>

                            </div>
                        )}

                    </div>

                    {/* Payment Method */}
                    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">

                        <div className="flex items-center justify-between">

                            <h2 className="text-lg font-bold text-gray-900">
                                Payment Method
                            </h2>

                            <button
                                type="button"
                                onClick={() =>
                                    navigate(
                                        "/checkout/payment"
                                    )
                                }
                                className="text-sm font-semibold text-indigo-600 hover:text-indigo-700"
                            >
                                Change
                            </button>

                        </div>

                        <p className="mt-4 text-sm font-medium text-gray-700">
                            {
                                getPaymentMethodName()
                            }
                        </p>

                    </div>

                    {/* Order Items */}
                    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">

                        <h2 className="text-lg font-bold text-gray-900">
                            Order Items
                        </h2>

                        <div className="mt-5 divide-y divide-gray-200">

                            {cartItems.map(
                                (item) => (
                                    <div
                                        key={
                                            item._id
                                        }
                                        className="flex gap-4 py-5 first:pt-0 last:pb-0"
                                    >

                                        {/* Product Image */}
                                        <img
                                            src={
                                                item
                                                    .images[0]
                                            }
                                            alt={
                                                item.name
                                            }
                                            className="h-20 w-20 rounded-lg object-contain"
                                        />

                                        {/* Product Details */}
                                        <div className="min-w-0 flex-1">

                                            <p className="font-medium text-gray-900">
                                                {
                                                    item.name
                                                }
                                            </p>

                                            <p className="mt-1 text-sm text-gray-500">
                                                {
                                                    item.brand
                                                }
                                            </p>

                                            <p className="mt-2 text-sm text-gray-600">
                                                Quantity:{" "}
                                                {
                                                    item.quantity
                                                }
                                            </p>

                                        </div>

                                        {/* Product Price */}
                                        <div className="text-right">

                                            <p className="font-semibold text-gray-900">
                                                ₹
                                                {(
                                                    item.price *
                                                    item.quantity
                                                ).toLocaleString(
                                                    "en-IN"
                                                )}
                                            </p>

                                            {item.originalPrice >
                                                item.price && (
                                                    <p className="mt-1 text-sm text-green-600">
                                                        Saved ₹
                                                        {(
                                                            (item.originalPrice -
                                                                item.price) *
                                                            item.quantity
                                                        ).toLocaleString(
                                                            "en-IN"
                                                        )}
                                                    </p>
                                                )}

                                        </div>

                                    </div>
                                )
                            )}

                        </div>

                    </div>

                    {/* Price Details */}
                    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">

                        <h2 className="text-lg font-bold text-gray-900">
                            Price Details
                        </h2>

                        <div className="mt-5 space-y-4">

                            {/* Subtotal */}
                            <div className="flex justify-between text-sm">

                                <span className="text-gray-600">
                                    Subtotal
                                </span>

                                <span className="font-medium text-gray-900">
                                    ₹
                                    {subtotal.toLocaleString(
                                        "en-IN"
                                    )}
                                </span>

                            </div>

                            {/* Delivery */}
                            <div className="flex justify-between text-sm">

                                <span className="text-gray-600">
                                    Delivery
                                </span>

                                <span className="font-semibold text-green-600">
                                    FREE
                                </span>

                            </div>

                            {/* Savings */}
                            <div className="flex justify-between text-sm">

                                <span className="text-gray-600">
                                    Total Savings
                                </span>

                                <span className="font-medium text-green-600">
                                    -₹
                                    {totalSavings.toLocaleString(
                                        "en-IN"
                                    )}
                                </span>

                            </div>

                            {/* Total */}
                            <div className="flex items-center justify-between border-t border-gray-200 pt-5">

                                <span className="text-lg font-bold text-gray-900">
                                    Total Amount
                                </span>

                                <span className="text-xl font-bold text-gray-900">
                                    ₹
                                    {total.toLocaleString(
                                        "en-IN"
                                    )}
                                </span>

                            </div>

                        </div>

                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-between">

                        {/* Back */}
                        <button
                            type="button"
                            onClick={() =>
                                navigate(
                                    "/checkout/payment"
                                )
                            }
                            className="rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
                        >
                            Back
                        </button>

                        {/* Place Order */}
                        <button
                            type="button"
                            onClick={() => {

                                if (
                                    paymentMethod ===
                                    "razorpay"
                                ) {
                                    handleRazorpayPayment();
                                } else {
                                    handlePlaceOrder();
                                }

                            }}
                            disabled={
                                isProcessing
                            }
                            className="rounded-lg bg-indigo-600 px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            {isProcessing
                                ? "Processing..."
                                : "Place Order"}
                        </button>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default CheckoutSummary;