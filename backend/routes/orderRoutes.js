const express = require("express");
const Order = require("../models/Order");
const authMiddleware = require("../middleware/authMiddleware");
const Counter = require("../models/Counter");

const router = express.Router();

router.post("/", authMiddleware, async (req, res) => {
    try {
        const {
            items,
            shippingAddress,
            paymentMethod,
            paymentStatus,
            razorpayOrderId,
            razorpayPaymentId,
            totalAmount,
        } = req.body;

        const counter = await Counter.findOneAndUpdate(
            { name: "order" },
            { $inc: { value: 1 } },
            {
                new: true,
                upsert: true,
            }
        );

        const sequenceNumber = String(
            counter.value
        ).padStart(4, "0");

        const date = new Date();

        const year = date.getFullYear();
        const month = String(
            date.getMonth() + 1
        ).padStart(2, "0");
        const day = String(
            date.getDate()
        ).padStart(2, "0");

        const orderId = `EK-${year}${month}${day}-${sequenceNumber}`;

        const order = new Order({
            orderId,
            userId: req.userId,
            items,
            shippingAddress,
            paymentMethod,
            paymentStatus,
            razorpayOrderId,
            razorpayPaymentId,
            totalAmount,
        });

        await order.save();

        res.status(201).json({
            success: true,
            order,
        });
    } catch (error) {
        console.error("Order creation error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to create order",
        });
    }
});

router.get("/my-orders", authMiddleware, async (req, res) => {
    try {
        const orders = await Order.find({
            userId: req.userId,
        }).sort({
            createdAt: -1,
        });

        res.json({
            success: true,
            orders,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch orders",
        });
    }
});

module.exports = router;