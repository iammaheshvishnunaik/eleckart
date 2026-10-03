import { useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";
import { addAddress } from "../../../services/addressService";

interface AddAddressProps {
    onCancel: () => void;
    onSuccess: () => void;
}

const AddAddress = ({
    onCancel,
    onSuccess,
}: AddAddressProps) => {

    const [fullName, setFullName] = useState("");
    const [mobile, setMobile] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [pincode, setPincode] = useState("");

    const token = useSelector(
        (state: RootState) => state.auth.token
    );
    const handleSubmit = async (
        event: React.SubmitEvent
    ) => {
        event.preventDefault();

        if (!token) {
            return;
        }

        try {
            await addAddress(token, {
                fullName,
                mobile,
                address,
                city,
                state,
                pincode,
            });

            onSuccess();

        } catch (error) {
            console.error("Failed to add address:", error);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-4"
        >
            <h3 className="mb-4 text-base font-semibold text-gray-900">
                Add New Address
            </h3>

            <div className="grid gap-4 sm:grid-cols-2">

                {/* Full Name */}
                <div>
                    <label className="text-sm font-medium text-gray-700">
                        Full Name
                    </label>

                    <input
                        type="text"
                        value={fullName}
                        onChange={(e) =>
                            setFullName(e.target.value)
                        }
                        required
                        className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-indigo-500"
                    />
                </div>

                {/* Mobile */}
                <div>
                    <label className="text-sm font-medium text-gray-700">
                        Mobile
                    </label>

                    <input
                        type="tel"
                        value={mobile}
                        onChange={(e) =>
                            setMobile(e.target.value)
                        }
                        required
                        className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-indigo-500"
                    />
                </div>

                {/* Address */}
                <div className="sm:col-span-2">
                    <label className="text-sm font-medium text-gray-700">
                        Address
                    </label>

                    <textarea
                        value={address}
                        onChange={(e) =>
                            setAddress(e.target.value)
                        }
                        required
                        rows={3}
                        className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-indigo-500"
                    />
                </div>

                {/* City */}
                <div>
                    <label className="text-sm font-medium text-gray-700">
                        City
                    </label>

                    <input
                        type="text"
                        value={city}
                        onChange={(e) =>
                            setCity(e.target.value)
                        }
                        required
                        className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-indigo-500"
                    />
                </div>

                {/* State */}
                <div>
                    <label className="text-sm font-medium text-gray-700">
                        State
                    </label>

                    <input
                        type="text"
                        value={state}
                        onChange={(e) =>
                            setState(e.target.value)
                        }
                        required
                        className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-indigo-500"
                    />
                </div>

                {/* Pincode */}
                <div>
                    <label className="text-sm font-medium text-gray-700">
                        Pincode
                    </label>

                    <input
                        type="text"
                        value={pincode}
                        onChange={(e) =>
                            setPincode(e.target.value)
                        }
                        required
                        className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-indigo-500"
                    />
                </div>

            </div>

            {/* Buttons */}
            <div className="mt-5 flex justify-end gap-3">

                <button
                    type="button"
                    onClick={onCancel}
                    className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50"
                >
                    Cancel
                </button>

                <button
                    type="submit"
                    className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
                >
                    Save Address
                </button>

            </div>
        </form>
    );
};

export default AddAddress;