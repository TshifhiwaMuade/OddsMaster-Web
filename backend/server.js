// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); // ✅ Added: JWT import
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Secure CORS setup
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

// User Model
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  allowExtraEmails: Boolean,
  paymentReference: { type: String, required: true },
  authorizationCode: { type: String, required: true },
  subscriptionStatus: { type: String, default: 'active' },
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

const saltRounds = 10;

// Verify payment with Paystack
const verifyPayment = async (reference) => {
  try {
    // ✅ Fixed: Removed extra space in URL
    const response = await axios.get(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`
        }
      }
    );

    return response.data;
  } catch (error) {
    console.error('Paystack verification error:', error.response?.data || error.message);
    return null;
  }
};

// Routes

// POST /api/auth/signup
app.post('/api/auth/signup', async (req, res) => {
  const { name, email, password, allowExtraEmails, paymentReference } = req.body;

  if (!name || !email || !password || !paymentReference) {
    return res.status(400).json({ 
      message: 'All fields are required including payment' 
    });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const verification = await verifyPayment(paymentReference);
    if (!verification || verification.data.status !== 'success') {
      return res.status(400).json({ 
        message: 'Payment verification failed. Please try again.' 
      });
    }

    const { authorization } = verification.data;
    if (!authorization || !authorization.authorization_code) {
      return res.status(400).json({ 
        message: 'No authorization code returned by Paystack.' 
      });
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      allowExtraEmails,
      paymentReference: verification.data.reference,
      authorizationCode: authorization.authorization_code,
      subscriptionStatus: 'active'
    });

    await newUser.save();

    const { password: pwd, ...userWithoutPassword } = newUser._doc;

    // ✅ Generate real JWT if secret exists
    const token = process.env.JWT_SECRET
      ? jwt.sign({ id: newUser._id, email: newUser.email }, process.env.JWT_SECRET, { expiresIn: '7d' })
      : 'fake-jwt-token';

    res.status(201).json({ 
      user: userWithoutPassword, 
      token 
    });

  } catch (err) {
    console.error('Signup error:', err);
    res.status(500).json({ 
      message: 'Server error during signup', 
      error: err.message 
    });
  }
});

// POST /api/auth/login
app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    if (user.subscriptionStatus !== 'active') {
      return res.status(403).json({ 
        message: 'Subscription is not active. Please renew your plan.' 
      });
    }

    const { password: pwd, ...userWithoutPassword } = user._doc;

    const token = process.env.JWT_SECRET
      ? jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '7d' })
      : 'fake-jwt-token';

    res.json({ user: userWithoutPassword, token });

  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Optional: Health check route
app.get('/', (req, res) => {
  res.json({ message: 'OddsMaster API is running' });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  console.log(`🔗 Frontend: ${process.env.FRONTEND_URL || 'http://localhost:3000'}`);
  console.log(`🔐 JWT: ${process.env.JWT_SECRET ? 'Enabled (7-day expiry)' : 'Using fake token'}`);
});