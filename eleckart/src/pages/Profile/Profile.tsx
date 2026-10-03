import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MapPin, Plus, User, History } from "lucide-react";

import type { RootState } from "../../store/store";
import type { Address } from "../../types/address";

import { getAddresses } from "../../services/addressService";
import AddAddress from "../../components/Profile/AddAddress/AddAddress";
import { Link } from "react-router-dom"
import Breadcrumb from "../../components/common/Breadcrumb";

const Profile = () => {
    const navigate = useNavigate();

    const user = useSelector(
        (state: RootState) => state.auth.user
    );

    const token = useSelector(
        (state: RootState) => state.auth.token
    );

    const [addresses, setAddresses] = useState<Address[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [showAddAddress, setShowAddAddress] = useState(false);

    const fetchAddresses = async () => {
        if (!token) {
            setLoading(false);
            return;
        }

        try {
            const data = await getAddresses(token);
            setAddresses(data);
        } catch (error) {
            setError("Failed to load addresses");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAddresses();
    }, [token]);

    /* Breadcrumb */
        const breadcrumbItems = [
        {
            label: "Home",
            path: "/",
        },
        {
            label: "Profile",
            path: "/profile",
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <Breadcrumb items={breadcrumbItems} />
            <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">

                {/* Page Header */}
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                        My Profile
                    </h1>

                    <p className="mt-1 text-sm text-gray-500">
                        Manage your account and saved addresses
                    </p>
                </div>

                <div className="space-y-6">

                    {/* Account Information */}
                    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">

                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100">
                                <User
                                    size={20}
                                    className="text-indigo-600"
                                />
                            </div>

                            <div>
                                <h2 className="text-lg font-bold text-gray-900">
                                    Account Information
                                </h2>

                                <p className="text-sm text-gray-500">
                                    Your personal details
                                </p>
                            </div>
                        </div>

                        <div className="mt-6 grid gap-5 sm:grid-cols-2">

                            {/* Name */}
                            <div>
                                <p className="text-sm text-gray-500">
                                    Name
                                </p>

                                <p className="mt-1 font-medium text-gray-900">
                                    {user?.name}
                                </p>
                            </div>

                            {/* Email */}
                            <div>
                                <p className="text-sm text-gray-500">
                                    Email
                                </p>

                                <p className="mt-1 break-all font-medium text-gray-900">
                                    {user?.email}
                                </p>
                            </div>

                        </div>
                    </div>

                    {/*My Orders*/}
                    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">

                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100">
                                <History
                                    size={20}
                                    className="text-indigo-600"
                                />
                            </div>

                            <div>
                                <h2 className="text-lg font-bold text-gray-900">
                                    My Orders
                                </h2>

                                <p className="text-sm text-gray-500">
                                    Your recent orders
                                </p>

                                <Link to="/profile/my-orders" className="flex shrink-0 items-center gap-2 rounded-lg bg-indigo-600 mt-4 px-3 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700">
                                    View My Orders
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* My Addresses */}
                    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">

                        {/* Header */}
                        <div className="flex items-center justify-between gap-4">

                            <div className="flex items-center gap-3">

                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-100">
                                    <MapPin
                                        size={20}
                                        className="text-indigo-600"
                                    />
                                </div>

                                <div>
                                    <h2 className="text-lg font-bold text-gray-900">
                                        My Addresses
                                    </h2>

                                    <p className="text-sm text-gray-500">
                                        Manage your delivery addresses
                                    </p>
                                </div>

                            </div>

                            {/* Add Address */}
                            <button
                                type="button"
                                onClick={() =>
                                    setShowAddAddress(true)
                                }
                                className="flex shrink-0 items-center gap-2 rounded-lg bg-indigo-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700"
                            >
                                <Plus size={18} />

                                <span className="hidden sm:inline">
                                    Add Address
                                </span>

                                <span className="sm:hidden">
                                    Add
                                </span>
                            </button>

                        </div>

                        {/* Add Address Form */}
                        {showAddAddress && (
                            <AddAddress
                                onCancel={() =>
                                    setShowAddAddress(false)
                                }
                                onSuccess={() => {
                                    setShowAddAddress(false);
                                    fetchAddresses();
                                }}
                            />
                        )}

                        {/* Address List */}
                        <div className="mt-6 space-y-4">

                            {addresses.map((address) => (
                                <div
                                    key={address._id}
                                    className="rounded-lg border border-gray-200 p-4"
                                >

                                    <div className="flex items-start justify-between gap-4">

                                        {/* Address Details */}
                                        <div className="min-w-0">

                                            <p className="font-semibold text-gray-900">
                                                {address.fullName}
                                            </p>

                                            <p className="mt-1 text-sm text-gray-600">
                                                {address.mobile}
                                            </p>

                                            <p className="mt-3 text-sm leading-6 text-gray-600">
                                                {address.address}
                                                <br />
                                                {address.city},{" "}
                                                {address.state} -{" "}
                                                {address.pincode}
                                            </p>

                                        </div>

                                        {/* Edit */}
                                        <button
                                            type="button"
                                            onClick={() =>
                                                navigate(
                                                    `/profile/address/edit/${address._id}`
                                                )
                                            }
                                            className="shrink-0 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
                                        >
                                            Edit
                                        </button>

                                    </div>

                                </div>
                            ))}

                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Profile;