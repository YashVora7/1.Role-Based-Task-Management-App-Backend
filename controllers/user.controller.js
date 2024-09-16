const userModel = require("../models/user.model");
require("dotenv").config()
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    let data = await userModel.findOne({ email });
    if (data) {
      // Compare the provided password with the stored password (plain text comparison)
      if (password === data.password) {
        // Generate JWT token
        const token = jwt.sign({ id: data._id, role: data.role }, process.env.JWT_KEY, { expiresIn: '1h' });
        res.status(200).json({ token });
      } else {
        res.status(400).json({ message: "Incorrect Password" });
      }
    } else {
      res.status(400).json({ message: "Invalid Email ID" });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};


const signup = async (req, res) => {
  const { email, password, role } = req.body;

  try {
    let user = await userModel.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User Already Exists" });
    }

    // Create new user with plain text password
    const data = await userModel.create({ email, password, role });

    // Generate JWT token
    const token = jwt.sign({ id: data._id, role: data.role }, process.env.JWT_KEY, { expiresIn: '1h' });

    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

module.exports = { login, signup };
