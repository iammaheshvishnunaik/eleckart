import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home/Home";
import ProductListing from "../pages/ProductListing/ProductListing";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import Cart from "../pages/Cart/Cart"
import DeliveryAddress from "../pages/Checkout/DeliveryAddress";
import Payment from "../pages/Checkout/Payment"
import OrderSummary from "../pages/Checkout/OrderSummary"
import OrderPlaced from "../pages/Order/OrderPlaced"
import Login from "../pages/Login/Login"
import Profile from "../pages/Profile/Profile"
import Register from "../pages/Register/Register";
import ProtectedRoute from "./ProtectedRoute";
import AboutUs from "../pages/AboutUs/AboutUs";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import TermsAndConditions from "../pages/TermsAndConditions/TermsAndConditions";
import MyOrders from "../pages/MyOrders/MyOrders";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductListing />} />
      <Route path="/products/:category/:slug/:productId" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/checkout/address" element={<DeliveryAddress />} />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route path="/checkout/payment" element={<Payment />} />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route path="/checkout/order-summary" element={<OrderSummary />} />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route path="/order-placed" element={<OrderPlaced />} />
      </Route>

      <Route path="/profile/my-orders" element={<MyOrders />} />

      <Route path="/login" element={<Login />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/profile" element={<Profile />} />
      </Route>

      <Route path="/register" element={<Register />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  );
};

export default AppRoutes;