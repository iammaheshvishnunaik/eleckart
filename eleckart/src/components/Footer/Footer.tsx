import { Link } from "react-router-dom";
import {
    Mail,
    Phone,
    MapPin,
} from "lucide-react";
import logo from "../../assets/images/logo.png"

const Footer = () => {
    return (
        <footer className="border-t border-gray-200 bg-white mt-10">
            {/* Main Footer */}
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div>
                        <Link
                            to="/"
                            className="inline-block text-2xl font-bold tracking-tight text-indigo-600"
                        >
                            <img className="w-30" src={logo} alt="eleckart" />
                        </Link>

                        <p className="mt-4 max-w-xs text-sm leading-6 text-gray-600">
                            Your trusted destination for the latest electronics, gadgets,
                            and technology at great prices.
                        </p>

                        {/* Social Links */}
                        <div className="mt-6 flex items-center gap-3">
                            <a
                                href="#"
                                aria-label="Facebook"
                                className="rounded-full border border-gray-200 px-3 py-2 text-sm font-medium text-gray-600 transition hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"
                            >
                                Facebook
                            </a>

                            <a
                                href="#"
                                aria-label="Instagram"
                                className="rounded-full border border-gray-200 px-3 py-2 text-sm font-medium text-gray-600 transition hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"
                            >
                                Instagram
                            </a>

                            <a
                                href="#"
                                aria-label="YouTube"
                                className="rounded-full border border-gray-200 px-3 py-2 text-sm font-medium text-gray-600 transition hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"
                            >
                                YouTube
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
                            Quick Links
                        </h3>

                        <ul className="mt-4 space-y-3">
                            <li>
                                <Link
                                    to="/"
                                    className="text-sm text-gray-600 transition hover:text-indigo-600"
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/products"
                                    className="text-sm text-gray-600 transition hover:text-indigo-600"
                                >
                                    All Products
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/about"
                                    className="text-sm text-gray-600 transition hover:text-indigo-600"
                                >
                                    About Us
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/contact"
                                    className="text-sm text-gray-600 transition hover:text-indigo-600"
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
                            Customer Service
                        </h3>

                        <ul className="mt-4 space-y-3">
                            <li>
                                <Link
                                    to="/orders"
                                    className="text-sm text-gray-600 transition hover:text-indigo-600"
                                >
                                    My Orders
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/wishlist"
                                    className="text-sm text-gray-600 transition hover:text-indigo-600"
                                >
                                    Wishlist
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/privacy-policy"
                                    className="text-sm text-gray-600 transition hover:text-indigo-600"
                                >
                                    Privacy Policy
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/terms"
                                    className="text-sm text-gray-600 transition hover:text-indigo-600"
                                >
                                    Terms & Conditions
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
                            Contact Us
                        </h3>

                        <ul className="mt-4 space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin
                                    size={18}
                                    className="mt-0.5 shrink-0 text-indigo-600"
                                />

                                <span className="text-sm leading-5 text-gray-600">
                                    Bangalore, Karnataka, India
                                </span>
                            </li>

                            <li className="flex items-center gap-3">
                                <Phone
                                    size={18}
                                    className="shrink-0 text-indigo-600"
                                />

                                <a
                                    href="tel:+919999999999"
                                    className="text-sm text-gray-600 transition hover:text-indigo-600"
                                >
                                    +91 99999 99999
                                </a>
                            </li>

                            <li className="flex items-center gap-3">
                                <Mail
                                    size={18}
                                    className="shrink-0 text-indigo-600"
                                />

                                <a
                                    href="mailto:support@eleckart.com"
                                    className="text-sm text-gray-600 transition hover:text-indigo-600"
                                >
                                    support@eleckart.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-200">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 sm:px-6 md:flex-row lg:px-8">
                    <p className="text-center text-sm text-gray-500 md:text-left">
                        © {new Date().getFullYear()} elecKart. All rights reserved.
                    </p>

                    <div className="flex items-center gap-5">
                        <Link
                            to="/privacy-policy"
                            className="text-xs text-gray-500 transition hover:text-indigo-600"
                        >
                            Privacy
                        </Link>

                        <Link
                            to="/terms"
                            className="text-xs text-gray-500 transition hover:text-indigo-600"
                        >
                            Terms
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;