import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../../store/authSlice";
import { useLocation } from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const location = useLocation();

    const registrationSuccess = location.state?.registrationSuccess;

    const handleLogin = async (e: React.SubmitEvent) => {
        e.preventDefault();

        setError("");

        try {
            const response = await fetch("http://localhost:5000/api/auth/login",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                    },

                    body: JSON.stringify({
                        email,
                        password,
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                setError(
                    data.message ||
                    "Invalid email or password"
                );
                return;
            }

            // Store logged-in user in Redux
            dispatch(
                login({
                    user: data.user,
                    token: data.token,
                })
            );

            navigate("/");

        } catch (error) {
            console.error(
                "Login error:",
                error
            );

            setError(
                "Unable to connect to the server"
            );
        }
    };

    return (
        <div className="min-h-[80vh] bg-gray-50 flex items-center justify-center px-4 py-8">
            <div className="w-full max-w-md">

                {/* Logo / Brand */}
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold text-indigo-600">
                        ElecKart
                    </h1>
                    {registrationSuccess && (
                        <div className="my-3 rounded-md bg-green-50 p-3 text-sm text-green-600">
                            Registration successful! Please login to continue.
                        </div>
                    )}

                    {!registrationSuccess && (
                        <p className="mt-2 text-sm text-gray-500">
                            Sign in to your account
                        </p>
                    )}
                </div>

                {/* Login Card */}
                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">

                    <h2 className="text-xl font-bold text-gray-900">
                        Welcome back
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                        Enter your details to continue
                    </p>

                    <form
                        onSubmit={handleLogin}
                        className="mt-6 space-y-5"
                    >

                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="mb-2 block text-sm font-medium text-gray-700"
                            >
                                Email Address
                            </label>

                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) =>
                                    setEmail(e.target.value)
                                }
                                placeholder="Enter your email"
                                required
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label
                                htmlFor="password"
                                className="mb-2 block text-sm font-medium text-gray-700"
                            >
                                Password
                            </label>

                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) =>
                                    setPassword(e.target.value)
                                }
                                placeholder="Enter your password"
                                required
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                            />
                        </div>

                        {/* Error */}
                        {error && (
                            <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
                                {error}
                            </p>
                        )}

                        {/* Login Button */}
                        <button
                            type="submit"
                            className="w-full rounded-lg bg-indigo-600 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
                        >
                            Login
                        </button>

                    </form>

                    {/* Register */}
                    <div className="mt-6 text-center text-sm text-gray-500">
                        Don't have an account?{" "}
                        <Link
                            to="/register"
                            className="font-semibold text-indigo-600 hover:text-indigo-700"
                        >
                            Create an account
                        </Link>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Login;