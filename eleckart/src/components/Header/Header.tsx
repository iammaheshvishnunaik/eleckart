import { Link, useLocation, useNavigate } from "react-router-dom";
import { ShoppingCart, User, Search, Menu, X, ChevronDown } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../store/store";
import { useState } from "react";
import { logout } from "../../store/authSlice";
import logo from "../../assets/images/logo.png";

const Header = () => {
  const dispatch = useDispatch();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const cartItems = useSelector(
    (state: RootState) => state.cart.items
  );

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const currentCategory = params.get("category");

  const isHomeActive = location.pathname === "/";

  const isAllProductsActive =
    location.pathname === "/products" && !currentCategory;

  const isCategoryActive = (category: string) =>
    location.pathname === "/products" &&
    currentCategory === category;

  const user = useSelector(
    (state: RootState) => state.auth.user
  );

  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">

      {/* Top Header */}
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() =>
            setMobileMenuOpen(!mobileMenuOpen)
          }
          className="rounded-md p-2 text-gray-700 hover:bg-gray-100 lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>

        {/* Logo */}
        <Link to="/" className="shrink-0">
          <img
            src={logo}
            alt="elecKart"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Search */}
        <div className="hidden flex-1 md:block">
          <div className="relative mx-auto max-w-2xl">

            <Search
              size={20}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search products..."
              className="w-full rounded-lg border border-gray-300 bg-gray-50 py-2.5 pl-10 pr-4 text-sm text-gray-900 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-3 focus:ring-indigo-100"
            />

          </div>
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-1 lg:flex">

          {isAuthenticated ? (
            <div className="relative group">

              {/* User */}
              <div className="flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100">
                <User
                  size={20}
                  className="shrink-0"
                />

                <span className="whitespace-nowrap">
                  Hello, {user?.name}
                </span>

                <ChevronDown
                  size={16}
                  className="shrink-0"
                />
              </div>

              {/* Dropdown */}
              <div className="absolute right-0 top-full hidden pt-2 group-hover:block">
                <div className="w-40 rounded-lg border border-gray-200 bg-white py-1 shadow-lg">

                  <Link
                    to="/profile"
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Profile
                  </Link>

                  <button
                    type="button"
                    onClick={handleLogout}
                    className="block w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>

                </div>
              </div>

            </div>
          ) : (
            <Link
              to="/login"
              className="flex items-center gap-2 whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
            >
              <User
                size={20}
                className="shrink-0"
              />

              <span className="whitespace-nowrap">
                Login
              </span>
            </Link>
          )}

          {/* Cart */}
          <Link
            to="/cart"
            className="relative rounded-lg p-2 text-gray-700 transition hover:bg-gray-100"
            aria-label="Cart"
          >
            <ShoppingCart size={21} />

            <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-orange-500 px-1 text-xs font-semibold text-white">
              {cartCount}
            </span>
          </Link>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden border-t border-gray-100 lg:block">
        <div className="mx-auto flex h-11 max-w-7xl items-center px-4 sm:px-6 lg:px-8">

          <div className="flex items-center gap-7 text-sm font-medium">

            {/* Home */}
            <Link
              to="/"
              className={`transition hover:text-indigo-600 ${isHomeActive
                ? "font-semibold text-indigo-600"
                : "text-gray-700"
                }`}
            >
              Home
            </Link>

            {/* All Products */}
            <Link
              to="/products"
              className={`transition hover:text-indigo-600 ${isAllProductsActive
                ? "font-semibold text-indigo-600"
                : "text-gray-700"
                }`}
            >
              All Products
            </Link>

            {/* Smartphones */}
            <Link
              to="/products?category=smartphones"
              className={`transition hover:text-indigo-600 ${isCategoryActive("smartphones")
                ? "font-semibold text-indigo-600"
                : "text-gray-700"
                }`}
            >
              Smartphones
            </Link>

            {/* Laptops */}
            <Link
              to="/products?category=laptops"
              className={`transition hover:text-indigo-600 ${isCategoryActive("laptops")
                ? "font-semibold text-indigo-600"
                : "text-gray-700"
                }`}
            >
              Laptops
            </Link>

            {/* Smartwatches */}
            <Link
              to="/products?category=smartwatches"
              className={`transition hover:text-indigo-600 ${isCategoryActive("smartwatches")
                ? "font-semibold text-indigo-600"
                : "text-gray-700"
                }`}
            >
              Smartwatches
            </Link>

          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-gray-200 bg-white lg:hidden">

          <nav className="flex flex-col px-4 py-3">

            {/* Home */}
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`border-b border-gray-100 py-3 text-sm font-medium ${isHomeActive
                ? "text-indigo-600"
                : "text-gray-700"
                }`}
            >
              Home
            </Link>

            {/* All Products */}
            <Link
              to="/products"
              onClick={() => setMobileMenuOpen(false)}
              className={`border-b border-gray-100 py-3 text-sm font-medium ${isAllProductsActive
                ? "text-indigo-600"
                : "text-gray-700"
                }`}
            >
              All Products
            </Link>

            {/* Smartphones */}
            <Link
              to="/products?category=smartphones"
              onClick={() => setMobileMenuOpen(false)}
              className={`border-b border-gray-100 py-3 text-sm font-medium ${isCategoryActive("smartphones")
                ? "text-indigo-600"
                : "text-gray-700"
                }`}
            >
              Smartphones
            </Link>

            {/* Laptops */}
            <Link
              to="/products?category=laptops"
              onClick={() => setMobileMenuOpen(false)}
              className={`border-b border-gray-100 py-3 text-sm font-medium ${isCategoryActive("laptops")
                ? "text-indigo-600"
                : "text-gray-700"
                }`}
            >
              Laptops
            </Link>

            {/* Smartwatches */}
            <Link
              to="/products?category=smartwatches"
              onClick={() => setMobileMenuOpen(false)}
              className={`border-b border-gray-100 py-3 text-sm font-medium ${isCategoryActive("smartwatches")
                ? "text-indigo-600"
                : "text-gray-700"
                }`}
            >
              Smartwatches
            </Link>

            {/* Mobile Actions */}
            <div className="mt-2 flex gap-2 border-t border-gray-200 pt-3">

              {/* Login / Profile */}
              {isAuthenticated ? (
                <>
                  {/* Profile */}
                  <Link
                    to="/profile"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex min-w-0 flex-1 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-3 py-2.5 text-sm font-medium text-white hover:bg-indigo-700"
                  >
                    <User
                      size={18}
                      className="shrink-0"
                    />

                    <span className="truncate">
                      Hello, {user?.name}
                    </span>
                  </Link>

                  {/* Logout */}
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      handleLogout();
                    }}
                    className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-indigo-700"
                >
                  <User size={18} />
                  Login
                </Link>
              )}

              {/* Cart */}
              <Link
                to="/cart"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                <ShoppingCart size={18} />
                Cart
              </Link>

            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;