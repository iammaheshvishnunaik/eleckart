const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const paymentRoutes = require("./routes/paymentRoutes");
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const addressRoutes = require("./routes/addressRoutes");
const orderRoutes = require("./routes/orderRoutes");

const app = express();

const PORT = process.env.PORT || 5000;
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
    res.send("elecKart backend is running");
});

// Payment routes
app.use("/api/payment", paymentRoutes);

// Authentication routes
app.use("/api/auth", authRoutes);

// Product routes
app.use("/api/products", productRoutes);

// Address routes
app.use("/api/addresses", addressRoutes);

// Order routes
app.use("/api/orders", orderRoutes);

// Start server
app.listen(PORT, () => {
    console.log(
        `elecKart backend is running on port ${PORT}`
    );
});