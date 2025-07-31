// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// CORS
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));

// === MongoDB Connection (No deprecated options) ===
mongoose.connect(process.env.MONGO_URI);

const db = mongoose.connection;
db.on('error', (err) => {
  console.error('❌ MongoDB connection error:', err.message);
});
db.once('open', () => {
  console.log('✅ Connected to MongoDB');
});

// === User Model ===
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

// === Paystack Verification (Added User-Agent to bypass Cloudflare) ===
const verifyPayment = async (reference) => {
  try {
    console.log('Verifying Paystack payment with reference:', reference);
    const response = await axios.get(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
          'User-Agent': 'Oddsmaster-Payment-System/1.0'
        },
        timeout: 10000
      }
    );
    console.log('Paystack verification response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Paystack verification error:', {
      status: error.response?.status,
      data: error.response?.data,
      message: error.message
    });
    return null;
  }
};

// === Signup Route ===
app.post('/api/auth/signup', async (req, res) => {
  const { name, email, password, allowExtraEmails, paymentReference } = req.body;

  if (!name || !email || !password || !paymentReference) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const verification = await verifyPayment(paymentReference);
    if (!verification) {
      return res.status(400).json({ message: 'Payment verification failed: Could not connect to Paystack.' });
    }

    if (verification.data.status !== 'success') {
      return res.status(400).json({ message: 'Payment was not successful. Please try again.' });
    }

    const { authorization } = verification.data;
    if (!authorization || !authorization.authorization_code) {
      return res.status(400).json({ message: 'Invalid authorization data from Paystack.' });
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
    console.log('✅ User saved:', newUser.email);

    if (!process.env.JWT_SECRET) {
      return res.status(500).json({ message: 'Server config error: JWT_SECRET missing' });
    }

    const token = jwt.sign(
      { id: newUser._id, email: newUser.email },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    const { password: pwd, ...userWithoutPassword } = newUser._doc;
    res.status(201).json({ user: userWithoutPassword, token });

  } catch (err) {
    console.error('Signup error:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// === Login Route ===
app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password required' });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ message: 'Invalid credentials' });

    if (user.subscriptionStatus !== 'active') {
      return res.status(403).json({ message: 'Subscription not active' });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    const { password: pwd, ...userWithoutPassword } = user._doc;
    res.json({ user: userWithoutPassword, token });

  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Health Check
app.get('/', (req, res) => {
  res.json({ message: 'OddsMaster API is running' });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  console.log(`🔗 Frontend: ${process.env.FRONTEND_URL || 'http://localhost:3000'}`);
  console.log(`🔐 JWT: ${process.env.JWT_SECRET ? 'Enabled' : '🚨 MISSING!'}`);
});