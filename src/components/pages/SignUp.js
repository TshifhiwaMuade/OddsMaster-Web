import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validateInputs = () => {
    const newErrors = {
      name: '',
      email: '',
      password: ''
    };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
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

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateInputs()) {
      console.log('Form submitted:', formData);
      alert('Sign up successful!');
    }
  };

  return (
    <div className="signup-container">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="signup-video"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      
      <div className="signup-card">
        <h1 className="signup-title">JOIN THE REVOLUTION</h1>
        <p className="signup-subtitle">Start making smarter bets today</p>
        
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
          
          <button type="submit" className="signup-btn">
            GET STARTED
          </button>
        </form>
        
        <div className="divider">
          <span>OR</span>
        </div>
        
        <button type="button" className="demo-btn">
          LIVE DEMO <i className="fas fa-arrow-right"></i>
        </button>
        
        <p className="login-link">
          Already a member? <Link to="/sign-in">Sign In</Link>
        </p>
      </div>
    </div>
  );
}