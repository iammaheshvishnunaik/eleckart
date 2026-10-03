import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import {
    setPaymentMethod,
} from "../../store/checkoutSlice";
import type { PaymentMethod } from "../../store/checkoutSlice";
import { useNavigate } from "react-router-dom";

const Payment = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const paymentMethod = useSelector(
        (state: RootState) => state.checkout.paymentMethod
    );

    const selectedAddress = useSelector(
        (state: RootState) => state.checkout.selectedAddress
    );

    const handleOnChange = (method: PaymentMethod) => {
        dispatch(setPaymentMethod(method));
    };

    const handleContinue = () => {
        if (!paymentMethod) {
            return;
        }

        navigate("/checkout/order-summary");
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">

                {/* Page Header */}
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                        Payment Method
                    </h1>

                    <p className="mt-1 text-sm text-gray-500">
                        Select your preferred payment method
                    </p>
                </div>

                {/* Selected Address */}
                {selectedAddress && (
                    <div className="mb-6 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                        <div className="flex items-start justify-between">
                            <div>
                                <p className="text-sm font-semibold text-gray-900">
                                    Delivering to
                                </p>

                                <p className="mt-1 text-sm text-gray-600">
                                    {selectedAddress.fullName}
                                </p>

                                <p className="text-sm text-gray-600">
                                    {selectedAddress.address},{" "}
                                    {selectedAddress.city}
                                </p>

                                <p className="text-sm text-gray-600">
                                    {selectedAddress.state} -{" "}
                                    {selectedAddress.pincode}
                                </p>
                            </div>

                            <button
                                type="button"
                                onClick={() =>
                                    navigate("/checkout/address")
                                }
                                className="text-sm font-semibold text-indigo-600 hover:text-indigo-700"
                            >
                                Change
                            </button>
                        </div>
                    </div>
                )}

                {/* Payment Methods */}
                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">

                    <h2 className="text-lg font-bold text-gray-900">
                        Choose Payment Method
                    </h2>

                    <div className="mt-5 space-y-3">

                        {/* UPI */}
                        <label
                            className={`flex cursor-pointer items-start gap-4 rounded-lg border p-4 transition ${
                                paymentMethod === "razorpay"
                                    ? "border-indigo-600 bg-indigo-50"
                                    : "border-gray-200 hover:bg-gray-50"
                            }`}
                        >
                            <input
                                type="radio"
                                name="payment"
                                value="upi"
                                checked={paymentMethod === "razorpay"}
                                onChange={() =>
                                    handleOnChange("razorpay")
                                }
                                className="mt-1 h-4 w-4 accent-indigo-600"
                            />

                            <div>
                                <p className="font-semibold text-gray-900">
                                    Razorpay
                                </p>

                                <p className="mt-1 text-sm text-gray-500">
                                    UPI, Credit/Debit Card, Net Banking, Wallets
                                </p>
                            </div>
                        </label>

                        {/* Credit / Debit Card */}
                        <label
                            className={`flex cursor-pointer items-start gap-4 rounded-lg border p-4 transition ${
                                paymentMethod === "cod"
                                    ? "border-indigo-600 bg-indigo-50"
                                    : "border-gray-200 hover:bg-gray-50"
                            }`}
                        >
                            <input
                                type="radio"
                                name="payment"
                                value="card"
                                checked={paymentMethod === "cod"}
                                onChange={() =>
                                    handleOnChange("cod")
                                }
                                className="mt-1 h-4 w-4 accent-indigo-600"
                            />

                            <div>
                                <p className="font-semibold text-gray-900">
                                    COD
                                </p>

                                <p className="mt-1 text-sm text-gray-500">
                                    Pay with cash during delivery of the product.
                                </p>
                            </div>
                        </label>
                    </div>
                </div>

                {/* Continue Button */}
                <div className="mt-6 flex justify-between">

                    <button
                        type="button"
                        onClick={() =>
                            navigate("/checkout/address")
                        }
                        className="rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
                    >
                        Back
                    </button>

                    <button
                        type="button"
                        onClick={handleContinue}
                        disabled={!paymentMethod}
                        className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-gray-300"
                    >
                        Continue to Order Summary
                    </button>

                </div>

            </div>
        </div>
    );
};

export default Payment;