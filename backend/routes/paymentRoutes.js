const express = require("express");
const router = express.Router();

const {
    createRazorpayOrder,
    verifyPayment,
} = require("../controllers/PaymentController");

// Create Razorpay order
router.post("/create-order", createRazorpayOrder);

// Verify Razorpay payment
router.post("/verify", verifyPayment);

module.exports = router;