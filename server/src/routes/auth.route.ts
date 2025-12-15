import express from "express";
const router = express.Router();
import bcrypt from "bcrypt";
import User from "../models/user.model.js";
import jwt, { type Secret } from "jsonwebtoken";
import "dotenv/config";
router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "Username and password are required" });
    }
    const userExists = await User.findOne({ username: username });
    if (userExists)
      return res.status(400).json({ message: "Username already taken " });
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username: username, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "Username and password are required " });
    }
    const user = await User.findOne({ username: username });
    if (!user) {
      return res.status(400).json({ message: "user not registered" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const JWT_SECRET = process.env.JWT_SECRET;
    const token = jwt.sign({ userId: user._id }, JWT_SECRET as Secret, {
      expiresIn: "30d",
    });
    return res.status(200).json({ token });
  } catch (error) {}
});

export default router;
