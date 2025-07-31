// src/components/pages/SignUp.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PaystackButton } from 'react-paystack';
import './SignUp.css';
import video from '../../media/2938865-uhd_4096_2160_24fps.mp4';

// Paystack amount in cents (R150 = 15000 cents)
const PAYMENT_AMOUNT = 15000; // R150

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    allowExtraEmails: false
  });
  const [errors, setErrors] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState('');
  const [paystackRef, setPaystackRef] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validateInputs = () => {
    const newErrors = { name: '', email: '', password: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

 const handlePaystackSuccess = async (paystackResponse) => {
  // ✅ Extract ONLY the reference string
  const reference = paystackResponse.reference || paystackResponse.trxref;
  
  if (!reference) {
    setServerError('Payment reference missing. Please try again.');
    return;
  }

  console.log('✅ Extracted Paystack reference:', reference);
  setLoading(true);
  setServerError('');

  try {
    const response = await fetch('http://localhost:5000/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...formData,
        paymentReference: reference
      })
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      alert('Payment successful! Welcome to Oddsmaster.');
      navigate('/dashboard', { replace: true });
    } else {
      setServerError(data.message || 'Sign-up failed. Please try again.');
    }
  } catch (err) {
    console.error('Network error:', err);
    setServerError('Network error. Is the server running?');
  } finally {
    setLoading(false);
    setPaystackRef(null);
  }
};

  const handlePaystackClose = () => {
    setServerError('Payment was not completed. Please try again.');
    setPaystackRef(null);
  };
const getPaystackReference = () => {
  if (!paystackRef) {
    const newRef = `ref_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    setPaystackRef(newRef);
    return newRef;
  }
  return paystackRef;
};
const paystackComponentProps = {
  email: formData.email,
  amount: PAYMENT_AMOUNT,
  publicKey: process.env.REACT_APP_PAYSTACK_PUBLIC_KEY,
  text: 'Complete Payment to Activate Account',
  onSuccess: handlePaystackSuccess,
  onClose: handlePaystackClose,
  currency: 'ZAR', 
  reference: getPaystackReference(),
};

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateInputs()) return;
  };

  return (
    <div className="signup-container">
      <video autoPlay loop muted playsInline className="signup-video">
        <source src={video} type="video/mp4" />
      </video>

      <div className="signup-card">
        <h1 className="signup-title">JOIN THE REVOLUTION</h1>
        <p className="signup-subtitle">Start making smarter bets today</p>

        {serverError && <div className="error-message">{serverError}</div>}

        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className={`form-input ${errors.name ? 'error-input' : ''}`}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className={`form-input ${errors.email ? 'error-input' : ''}`}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create Password"
              className={`form-input ${errors.password ? 'error-input' : ''}`}
            />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>

          <div className="checkbox-group">
            <input
              type="checkbox"
              id="allowExtraEmails"
              name="allowExtraEmails"
              checked={formData.allowExtraEmails}
              onChange={handleChange}
            />
            <label htmlFor="allowExtraEmails">Receive betting insights and updates</label>
          </div>

          <div className="payment-note">
            <small>
              You will be charged <strong>R150</strong> to activate your account.
            </small>
          </div>

          {process.env.REACT_APP_PAYSTACK_PUBLIC_KEY ? (
            <PaystackButton
              {...paystackComponentProps}
              className="signup-btn"
              disabled={!formData.email || !formData.password || loading}
            />
          ) : (
            <p className="error-message">Payment system not ready. Check configuration.</p>
          )}

          <div className="divider">
            <span>OR</span>
          </div>

          <p className="login-link">
            Already a member? <Link to="/sign-in">Sign In</Link>
          </p>
        </form>
      </div>
    </div>
  );
}