import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (
        e: React.SubmitEvent
    ) => {
        e.preventDefault();

        setError("");
        setSuccess("");

        // Check password confirmation
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/api/auth/register",
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json",
                    },

                    body: JSON.stringify({
                        name,
                        email,
                        mobile,
                        password,
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                setError(
                    data.message || "Registration failed"
                );
                return;
            }

            setSuccess(
                "Registration successful!"
            );

            // Clear form
            setName("");
            setEmail("");
            setMobile("");
            setPassword("");
            setConfirmPassword("");

            navigate("../login", {
                state: {
                    registrationSuccess: true,
                },
            });

        } catch (error) {
            console.error(
                "Registration error:",
                error
            );

            setError(
                "Unable to connect to the server"
            );
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 px-4 py-10">
            <div className="mx-auto max-w-md">

                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">

                    <h1 className="text-2xl font-bold text-gray-900">
                        Create Account
                    </h1>

                    <p className="mt-1 text-sm text-gray-500">
                        Register to start shopping on elecKart
                    </p>

                    {error && (
                        <div className="mt-5 rounded-md bg-red-50 p-3 text-sm text-red-600">
                            {error}
                        </div>
                    )}

                    {success && (
                        <div className="mt-5 rounded-md bg-green-50 p-3 text-sm text-green-600">
                            {success}
                        </div>
                    )}

                    <form
                        onSubmit={handleRegister}
                        className="mt-6 space-y-5"
                    >

                        {/* Name */}
                        <div>
                            <label className="mb-1 block text-sm font-medium text-gray-700">
                                Full Name
                            </label>

                            <input
                                type="text"
                                value={name}
                                onChange={(e) =>
                                    setName(
                                        e.target.value
                                    )
                                }
                                className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                                placeholder="Enter your name"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="mb-1 block text-sm font-medium text-gray-700">
                                Email
                            </label>

                            <input
                                type="email"
                                value={email}
                                onChange={(e) =>
                                    setEmail(
                                        e.target.value
                                    )
                                }
                                className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                                placeholder="Enter your email"
                            />
                        </div>

                        {/* Mobile */}
                        <div>
                            <label className="mb-1 block text-sm font-medium text-gray-700">
                                Mobile Number
                            </label>

                            <input
                                type="tel"
                                value={mobile}
                                onChange={(e) =>
                                    setMobile(
                                        e.target.value
                                    )
                                }
                                className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                                placeholder="Enter your mobile number"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="mb-1 block text-sm font-medium text-gray-700">
                                Password
                            </label>

                            <input
                                type="password"
                                value={password}
                                onChange={(e) =>
                                    setPassword(
                                        e.target.value
                                    )
                                }
                                className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                                placeholder="Enter your password"
                            />
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label className="mb-1 block text-sm font-medium text-gray-700">
                                Confirm Password
                            </label>

                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) =>
                                    setConfirmPassword(
                                        e.target.value
                                    )
                                }
                                className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                                placeholder="Confirm your password"
                            />
                        </div>

                        {/* Register button */}
                        <button
                            type="submit"
                            className="w-full rounded-md bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
                        >
                            Create Account
                        </button>

                    </form>

                </div>
            </div>
        </div>
    );
};

export default Register;