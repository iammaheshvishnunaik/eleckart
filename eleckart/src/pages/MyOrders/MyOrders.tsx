import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import Breadcrumb from "../../components/common/Breadcrumb";

interface Order {
    _id: string;
    orderId: string;
    items: {
        productId: string;
        name: string;
        brand: string;
        image: string;
        price: number;
        quantity: number;
        category: string;
        slug: string;
    }[];
    shippingAddress: {
        fullName: string;
        mobile: string;
        address: string;
        city: string;
        state: string;
        pincode: string;
    };
    paymentMethod: string;
    paymentStatus: string;
    totalAmount: number;
    orderStatus: string;
    createdAt: string;
}

const MyOrders = () => {
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState(true);

    const token = useSelector(
        (state: RootState) => state.auth.token
    );

    /* Breadcrumb */
    const breadcrumbItems = [
        {
            label: "Home",
            path: "/",
        },
        {
            label: "Profile",
            path: "/profile",
        },
        {
            label: "My Orders",
            path: "/my-orders",
        }
    ];

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await fetch(
                    "http://localhost:5000/api/orders/my-orders",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                const data = await response.json();

                if (!data.success) {
                    throw new Error(
                        data.message || "Failed to fetch orders"
                    );
                }

                setOrders(data.orders);
            } catch (error) {
                console.error("Failed to fetch orders:", error);
            } finally {
                setLoading(false);
            }
        };

        if (token) {
            fetchOrders();
        }
    }, [token]);

    if (loading) {
        return (
            <div className="flex min-h-[400px] items-center justify-center">
                <p className="text-gray-500">
                    Loading orders...
                </p>
            </div>
        );
    }

    if (orders.length === 0) {
        return (
            <div className="min-h-screen bg-gray-50">
                <Breadcrumb items={breadcrumbItems} />
                <div className="flex min-h-[400px] flex-col items-center justify-center">
                    <h2 className="text-xl font-semibold text-gray-900">
                        No orders yet
                    </h2>

                    <p className="mt-2 text-sm text-gray-500">
                        Your orders will appear here.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Breadcrumb items={breadcrumbItems} />
            <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
                <h1 className="text-2xl font-bold text-gray-900">
                    My Orders
                </h1>

                <div className="mt-6 space-y-6">
                    {orders.map((order) => (
                        <div
                            key={order.orderId}
                            className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
                        >
                            <div className="flex flex-col justify-between gap-3 border-b border-gray-200 pb-4 sm:flex-row">
                                <div>
                                    <p className="text-sm text-gray-500">
                                        Order ID
                                    </p>

                                    <p className="mt-1 font-medium text-gray-900">
                                        {order.orderId}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500">
                                        Order Date
                                    </p>

                                    <p className="mt-1 font-medium text-gray-900">
                                        {new Date(
                                            order.createdAt
                                        ).toLocaleDateString(
                                            "en-IN"
                                        )}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500">
                                        Status
                                    </p>

                                    <p className="mt-1 font-medium capitalize text-green-600">
                                        {order.orderStatus}
                                    </p>
                                </div>
                            </div>

                            <div className="divide-y divide-gray-200">
                                {order.items.map((item) => (
                                    <div
                                        key={item.productId}
                                        className="flex gap-4 py-5"
                                    >
                                        <Link
                                            to={`/products/${item.category}/${item.slug}/${item.productId}`}
                                        >
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="h-20 w-20 cursor-pointer rounded-lg object-contain"
                                            />
                                        </Link>

                                        <div className="flex-1">
                                            <Link
                                                to={`/products/${item.category}/${item.slug}/${item.productId}`}
                                                className="font-medium text-gray-900 hover:text-indigo-600"
                                            >
                                                {item.name}
                                            </Link>

                                            <p className="mt-1 text-sm text-gray-500">
                                                {item.brand}
                                            </p>

                                            <p className="mt-2 text-sm text-gray-600">
                                                Quantity:{" "}
                                                {item.quantity}
                                            </p>
                                        </div>

                                        <p className="font-semibold text-gray-900">
                                            ₹
                                            {(
                                                item.price *
                                                item.quantity
                                            ).toLocaleString(
                                                "en-IN"
                                            )}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t border-gray-200 pt-4">
                                <div className="flex justify-between">
                                    <span className="font-semibold text-gray-900">
                                        Total
                                    </span>

                                    <span className="text-lg font-bold text-gray-900">
                                        ₹
                                        {order.totalAmount.toLocaleString(
                                            "en-IN"
                                        )}
                                    </span>
                                </div>

                                <div className="mt-2 text-sm text-gray-500">
                                    Payment:{" "}
                                    <span className="capitalize">
                                        {order.paymentMethod}
                                    </span>
                                </div>

                                <div className="mt-1 text-sm text-gray-500">
                                    Payment Status:{" "}
                                    <span className="capitalize">
                                        {order.paymentStatus}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyOrders;