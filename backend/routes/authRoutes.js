const express = require("express");
const { registerUser, loginUser } = require("../controllers/authController");

const router = express.Router();

router.post("/register", registerUser); // Endpoint for user registration
router.post("/login", loginUser); // Endpoint for user login

module.exports = router;
