import UserModel from '../models/userModel.js';
import validator from 'validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const createToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET);
};

// Route for user login
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: 'User doesn`t exist ' });
    }

    // Check if the password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res
        .status(400)
        .json({ success: false, message: 'Invalid password or email' });
    }

    let token = createToken(user._id);

    res.status(200).json({
      success: true,
      message: 'User signed in successfully',
      data: {
        token,
        user,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Route for user registration/sign-up
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if the user already exists
    const userExists = await UserModel.findOne({ email });

    if (userExists) {
      return res
        .status(400)
        .json({ success: false, message: 'User already exists' });
    }

    // validating email format & strong password
    if (!validator.isEmail(email)) {
      return res
        .status(400)
        .json({ success: false, message: 'Please enter a valid email' });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: 'Password should be at least 6 characters',
      });
    }

    // Hashing the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new UserModel({
      name,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    let token = createToken(savedUser._id);

    res.status(201).json({
      success: true,
      message: 'User created successfully',
      data: {
        user: savedUser,
        token,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Route for admin login
export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    //
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      let token = jwt.sign(email + password, process.env.JWT_SECRET);
      return res.status(200).json({
        success: true,
        message: 'Admin signed in successfully',
        data: {
          token,
        },
      });
    } else {
      return res.status(400).json({
        success: false,
        message: 'Invalid email or password',
      });
    }
    res.send('Admin login');
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
