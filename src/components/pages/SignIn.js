import React, { useState } from 'react';
import './SignIn.css';
import { Button } from '../Button';
import video from '../../media/2249402-uhd_3840_2160_24fps.mp4';
import { Link } from 'react-router-dom';

function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your sign-in logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className='signin-container'>
      <video 
        src={video} 
        autoPlay 
        loop 
        muted 
        className='signin-video'
      >
        <source src={video} type="video/mp4" />
      </video>
      
      <div className='signin-content'>
      <h1>WELCOME BACK</h1>
      <p className="signin-subtitle">Sign in to access your predictions</p>
        <form className='signin-form' onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className='form-input'
              required
            />
          </div>
          
          <div className='form-group'>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className='form-input'
              required
              minLength="6"
            />
          </div>
          
          <Button
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            type='submit'
          >
            SIGN IN
          </Button>
          
          <div className='signin-links'>
            <Link to='/forgot-password'>Forgot Password?</Link>
            <Link to='/sign-up'>Don't have an account? Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;