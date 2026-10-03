const razorpay = require("../config/razorpay");
const crypto = require("crypto");

// Create Razorpay order
const createRazorpayOrder = async (req, res) => {
    try {
        const { amount } = req.body;

        if (!amount || amount <= 0) {
            return res.status(400).json({
                success: false,
                message: "Invalid amount",
            });
        }

        const options = {
            amount: Math.round(amount * 100),
            currency: "INR",
            receipt: `elecKart_${Date.now()}`,
        };

        const order = await razorpay.orders.create(options);

        return res.status(200).json({
            success: true,
            order,
        });

    } catch (error) {
        console.error("Create Razorpay order error:",error);

        return res.status(500).json({
            success: false,
            message: "Unable to create Razorpay order",
        });
    }
};


// Verify Razorpay payment
const verifyPayment = async(req, res) => {
    try {
        const {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
        } = req.body;

        // Validate required fields
        if (
            !razorpay_order_id ||
            !razorpay_payment_id ||
            !razorpay_signature
        ) {
            return res.status(400).json({
                success: false,
                message:
                    "Missing payment verification details",
            });
        }

        // Generate signature using Razorpay secret
        const generatedSignature =
            crypto
                .createHmac(
                    "sha256",
                    process.env.RAZORPAY_KEY_SECRET
                )
                .update( razorpay_order_id + "|" + razorpay_payment_id )
                .digest("hex");

        // Compare signatures
        if (generatedSignature === razorpay_signature) {
            return res.status(200).json({
                success: true,
                message: "Payment verified successfully",
            });
        }

        const payment = await razorpay.payments.fetch(razorpay_payment_id);

        if (payment.status !== "captured") {
            return res.status(400).json({
                success: false,
                message: "Payment was not captured",
            });
        }

        // Verify payment belongs to the correct Razorpay order
        if (payment.order_id !== razorpay_order_id) {
            return res.status(400).json({
                success: false,
                message: "Payment does not belong to this order",
            });
        }

    } catch (error) {
        console.error("Payment verification error:",error);

        return res.status(500).json({
            success: false,
            message: "Payment verification failed",
        });
    }
};


module.exports = {
    createRazorpayOrder,
    verifyPayment,
};