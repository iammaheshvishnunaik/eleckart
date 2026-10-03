const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

const {
    registerUser, loginUser, getCurrentUser 
} = require("../controllers/AuthController");

// Create register for new user
router.post("/register", registerUser);

// Create login for existing user
router.post("/login", loginUser);

router.get("/me", authMiddleware, getCurrentUser);

module.exports = router;