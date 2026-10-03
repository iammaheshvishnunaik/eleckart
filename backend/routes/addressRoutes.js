const express = require("express");
const Address = require("../models/Address");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// GET logged-in user's addresses
router.get("/", authMiddleware, async (req, res) => {
    try {
        const addresses = await Address.find({
            userId: req.userId,
        }).sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            addresses,
        });
    } catch (error) {
        console.error("Error fetching addresses:", error);

        res.status(500).json({
            success: false,
            message: "Failed to fetch addresses",
        });
    }
});

// ADD a new address
router.post("/", authMiddleware, async (req, res) => {
    try {
        const {
            fullName,
            mobile,
            address,
            city,
            state,
            pincode,
        } = req.body;

        const newAddress = await Address.create({
            userId: req.userId,
            fullName,
            mobile,
            address,
            city,
            state,
            pincode,
        });

        res.status(201).json({
            success: true,
            address: newAddress,
        });
    } catch (error) {
        console.error("Error adding address:", error);

        res.status(500).json({
            success: false,
            message: "Failed to add address",
        });
    }
});

module.exports = router;