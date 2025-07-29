// src/components/pages/SignUp.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';
import video from '../../media/2938865-uhd_4096_2160_24fps.mp4';

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    allowExtraEmails: false
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState('');

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
      newErrors.email = 'Please enter a valid email';
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    setServerError('');
    if (!validateInputs()) return;

    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        alert('Sign up successful!');
        navigate('/dashboard', { replace: true });
      } else {
        setServerError(data.message || 'Sign up failed');
      }
    } catch (err) {
      setServerError('Network error. Is the server running?');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <video autoPlay loop muted playsInline className="signup-video">
        <source src={video} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      
      <div className="signup-card">
        <h1 className="signup-title">JOIN THE REVOLUTION</h1>
        <p className="signup-subtitle">Start making smarter bets today</p>

        {serverError && <div className="error-message">{serverError}</div>}
        
        <form onSubmit={handleSubmit} className="signup-form" noValidate>
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
          
          <button type="submit" className="signup-btn" disabled={loading}>
            {loading ? 'CREATING ACCOUNT...' : 'GET STARTED'}
          </button>
        </form>
        
        <div className="divider">
          <span>OR</span>
        </div>
        
        <p className="login-link">
          Already a member? <Link to="/sign-in">Sign In</Link>
        </p>
      </div>
    </div>
  );
}