import { Link, useLocation } from "react-router-dom";
import { Check, Package, ShoppingBag, ArrowRight } from "lucide-react";

const OrderPlaced = () => {
    const location = useLocation();
    const orderId = location.state?.orderId;

    return (
        <div className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">

                {/* Success Header */}
                <div className="text-center">

                    {/* Success Icon */}
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-sm">
                            <Check
                                className="h-8 w-8 text-white"
                                strokeWidth={3}
                            />
                        </div>
                    </div>

                    <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Order Placed Successfully!
                    </h1>

                    <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-gray-500 sm:text-base">
                        Thank you for shopping with{" "}
                        <span className="font-semibold text-indigo-600">
                            elecKart
                        </span>
                        . Your order has been confirmed and we're getting
                        it ready for you.
                    </p>
                </div>

                {/* Order Card */}
                <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

                    {/* Order ID */}
                    <div className="border-b border-gray-200 bg-gray-50 px-6 py-5 sm:px-8">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                            <div>
                                <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                                    Order ID
                                </p>

                                <p className="mt-1 text-lg font-bold text-gray-900">
                                    #{orderId}
                                </p>
                            </div>

                            <span className="inline-flex w-fit items-center rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                                Order Confirmed
                            </span>

                        </div>
                    </div>

                    {/* Order Information */}
                    <div className="grid grid-cols-1 divide-y divide-gray-200 sm:grid-cols-3 sm:divide-x sm:divide-y-0">

                        {/* Delivery */}
                        <div className="flex items-start gap-4 p-6 sm:block sm:p-8">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50">
                                <Package className="h-5 w-5 text-indigo-600" />
                            </div>

                            <div className="sm:mt-4">
                                <p className="text-sm font-semibold text-gray-900">
                                    Delivery
                                </p>

                                <p className="mt-1 text-sm text-gray-500">
                                    Expected in 3–5 business days
                                </p>
                            </div>
                        </div>

                        {/* Payment */}
                        <div className="flex items-start gap-4 p-6 sm:block sm:p-8">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-50">
                                <Check className="h-5 w-5 text-green-600" />
                            </div>

                            <div className="sm:mt-4">
                                <p className="text-sm font-semibold text-gray-900">
                                    Payment
                                </p>

                                <p className="mt-1 text-sm text-gray-500">
                                    Payment confirmed
                                </p>
                            </div>
                        </div>

                        {/* Order Status */}
                        <div className="flex items-start gap-4 p-6 sm:block sm:p-8">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-50">
                                <ShoppingBag className="h-5 w-5 text-purple-600" />
                            </div>

                            <div className="sm:mt-4">
                                <p className="text-sm font-semibold text-gray-900">
                                    Order Status
                                </p>

                                <p className="mt-1 text-sm text-gray-500">
                                    Being prepared
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* What's Next */}
                    <div className="border-t border-gray-200 px-6 py-6 sm:px-8">

                        <h2 className="text-base font-bold text-gray-900">
                            What happens next?
                        </h2>

                        <div className="mt-5 space-y-4">

                            <div className="flex gap-3">
                                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-600">
                                    1
                                </div>

                                <div>
                                    <p className="text-sm font-semibold text-gray-900">
                                        Order confirmation
                                    </p>

                                    <p className="mt-1 text-sm text-gray-500">
                                        We've received your order and will
                                        start preparing it shortly.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-600">
                                    2
                                </div>

                                <div>
                                    <p className="text-sm font-semibold text-gray-900">
                                        Order shipped
                                    </p>

                                    <p className="mt-1 text-sm text-gray-500">
                                        You'll receive an update when your
                                        order is on its way.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-600">
                                    3
                                </div>

                                <div>
                                    <p className="text-sm font-semibold text-gray-900">
                                        Delivered to your doorstep
                                    </p>

                                    <p className="mt-1 text-sm text-gray-500">
                                        Sit back and relax. We'll deliver
                                        your order safely to you.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Actions */}
                    <div className="border-t border-gray-200 px-6 py-6 sm:px-8">

                        <div className="flex flex-col gap-3 sm:flex-row">

                            <Link
                                to="/products"
                                className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
                            >
                                <ShoppingBag className="h-4 w-4" />
                                Continue Shopping
                            </Link>

                            <Link
                                to="/"
                                className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
                            >
                                Back to Home
                                <ArrowRight className="h-4 w-4" />
                            </Link>

                        </div>

                    </div>

                </div>

                {/* Footer Message */}
                <p className="mt-6 text-center text-xs text-gray-400">
                    Thank you for choosing{" "}
                    <span className="font-semibold text-gray-500">
                        elecKart
                    </span>
                    .
                </p>

            </div>
        </div>
    );
};

export default OrderPlaced;