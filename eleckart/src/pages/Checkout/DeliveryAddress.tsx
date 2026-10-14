import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import {
    clearSelectedAddress,
    setSelectedAddress,
} from "../../store/checkoutSlice";
import type { Address } from "../../types/address";
import { getAddresses } from "../../services/addressService";
import { useNavigate } from "react-router-dom";
import AddAddress from "../../components/Profile/AddAddress/AddAddress";

const DeliveryAddress = () => {
    const token = useSelector(
        (state: RootState) => state.auth.token
    );

    const [addresses, setAddresses] = useState<Address[]>([]);
    const [showAddAddress, setShowAddAddress] = useState(false);
    const [loading, setLoading] = useState(true);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const selectedAddress = useSelector(
        (state: RootState) => state.checkout.selectedAddress
    );

    useEffect(() => {
        const fetchAddresses = async () => {
            if (!token) {
                setLoading(false);
                return;
            }

            try {
                const data = await getAddresses(token);
                setAddresses(data);

                // Clear the selected address if it is no longer saved.
                if (
                    selectedAddress &&
                    !data.some(
                        (address) => address._id === selectedAddress._id
                    )
                ) {
                    dispatch(clearSelectedAddress());
                }
            } catch (error) {
                console.error("Failed to fetch addresses:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchAddresses();
    }, [token]);

    const handleOnChange = (address: Address) => {
        dispatch(setSelectedAddress(address));
    };

    const handleContinue = () => {
        const isSelectedAddressValid =
            selectedAddress &&
            addresses.some(
                (address) => address._id === selectedAddress._id
            );

        if (addresses.length === 0 || !isSelectedAddressValid) {
            return;
        }

        navigate("/checkout/payment");
    };

    const handleAddressSuccess = async () => {
        setShowAddAddress(false);

        if (!token) {
            return;
        }

        try {
            const data = await getAddresses(token);
            setAddresses(data);

            if (data.length > 0) {
                dispatch(setSelectedAddress(data[data.length - 1]));
            }
        } catch (error) {
            console.error("Failed to refresh addresses:", error);
        }
    };

    const isSelectedAddressValid =
        !!selectedAddress &&
        addresses.some(
            (address) => address._id === selectedAddress._id
        );

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">

                {/* Page Header */}
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                        Delivery Address
                    </h1>

                    <p className="mt-1 text-sm text-gray-500">
                        Select an address for delivery
                    </p>
                </div>

                {/* Address List */}
                {loading ? (
                    <p className="py-6 text-center text-sm text-gray-500">
                        Loading delivery addresses...
                    </p>
                ) : addresses.length === 0 ? (
                    <div className="rounded-xl border border-gray-200 bg-white p-6 text-center">
                        <p className="text-sm text-gray-600">
                            No delivery address found. Please add an address to continue.
                        </p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {addresses.map((address) => (
                            <div
                                key={address._id}
                                className={`rounded-xl border bg-white p-6 shadow-sm ${
                                    selectedAddress?._id === address._id
                                        ? "border-indigo-600"
                                        : "border-gray-200"
                                }`}
                            >
                                <label className="flex cursor-pointer items-start gap-4">
                                    <input
                                        type="radio"
                                        name="address"
                                        checked={
                                            selectedAddress?._id === address._id
                                        }
                                        onChange={() => handleOnChange(address)}
                                        className="mt-1 h-4 w-4 accent-indigo-600"
                                    />

                                    <div>
                                        <p className="font-semibold text-gray-900">
                                            {address.fullName}
                                        </p>

                                        <p className="mt-1 text-sm text-gray-600">
                                            {address.mobile}
                                        </p>

                                        <p className="mt-2 text-sm text-gray-600">
                                            {address.address}
                                        </p>

                                        <p className="text-sm text-gray-600">
                                            {address.city}, {address.state} - {address.pincode}
                                        </p>
                                    </div>
                                </label>
                            </div>
                        ))}
                    </div>
                )}

                {/* Add New Address */}
                <button
                    type="button"
                    onClick={() => setShowAddAddress(true)}
                    className="mt-5 w-full rounded-xl border border-dashed border-gray-300 bg-white px-6 py-4 text-sm font-semibold text-indigo-600 transition hover:border-indigo-400 hover:bg-indigo-50"
                >
                    + Add New Address
                </button>

                {/* Add Address Form */}
                {showAddAddress && (
                    <AddAddress
                        onCancel={() => setShowAddAddress(false)}
                        onSuccess={handleAddressSuccess}
                    />
                )}

                {/* Back and Continue Buttons */}
                <div className="mt-6 flex justify-between">
                    <button
                        type="button"
                        onClick={() => navigate("/cart")}
                        className="rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
                    >
                        Back to Cart
                    </button>

                    <button
                        type="button"
                        onClick={handleContinue}
                        disabled={
                            loading ||
                            addresses.length === 0 ||
                            !isSelectedAddressValid
                        }
                        className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-gray-300"
                    >
                        Continue to Payment
                    </button>
                </div>

            </div>
        </div>
    );
};

export default DeliveryAddress;