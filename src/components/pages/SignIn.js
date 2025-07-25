import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useHistory, Link } from 'react-router-dom';
import { Button } from '../Button';
import video from '../../media/2249402-uhd_3840_2160_24fps.mp4';
import './SignIn.css';

function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const success = await login(formData);
      if (success) {
        history.push('/dashboard');
      } else {
        setError('Failed to sign in. Please check your credentials.');
      }
    } catch (err) {
      setError(err.message || 'An error occurred during sign in.');
    } finally {
      setIsLoading(false);
    }
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
        
        {error && <div className="signin-error">{error}</div>}
        
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
            disabled={isLoading}
          >
            {isLoading ? 'SIGNING IN...' : 'SIGN IN'}
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