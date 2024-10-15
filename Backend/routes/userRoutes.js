const express = require("express");
const bcrypt = require("bcryptjs"); // for password hashing
const jwt = require("jsonwebtoken"); // for token generation
const User = require("../models/User"); // User model
const { check, validationResult } = require("express-validator");

const router = express.Router();

// Registration route
router.post(
  "/register",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password must be at least 6 characters").isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password } = req.body;

    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ msg: "User already exists" });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      console.log("Hashed Password (Registration):", hashedPassword); // Debugging statement

      const newUser = new User({
        username,
        email,
        password: hashedPassword, // Store hashed password
      });

      await newUser.save();
      res.status(201).json({ msg: "User registered successfully" });
    } catch (error) {
      console.error("Registration error:", error);
      res.status(500).json({ msg: "Server error" });
    }
  }
);

// Login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Invalid email or password" });
    }

    console.log("User found:", user);
    console.log("Stored Hashed Password (from DB):", user.password);
    console.log("Plain Password (from login request):", password); // Log plain password

    // Compare the plain password with the hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    console.log("Password match result:", isMatch);

    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid email or password" });
    }

    const token = jwt.sign({ userId: user._id }, "yourSecretKey", { expiresIn: "1h" });
    res.json({ token });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;
