import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home/Home";
import ProductListing from "../pages/ProductListing/ProductListing";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import Cart from "../pages/Cart/Cart"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/products"
        element={<ProductListing/>}
      />

      <Route
        path="/products/:category/:slug/:productId"
        element={<ProductDetail />}
      />

      <Route
        path="/cart"
        element={<Cart />}
      />

      <Route
        path="*"
        element={<h1>404 - Page Not Found</h1>}
      />
    </Routes>
  );
};

export default AppRoutes;