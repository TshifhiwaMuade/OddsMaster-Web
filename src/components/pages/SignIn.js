import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useHistory, useLocation, Link } from 'react-router-dom';
import video from '../../media/2249402-uhd_3840_2160_24fps.mp4';
import './SignIn.css';

function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login, isLoading: authLoading } = useAuth();
  const history = useHistory();
  const location = useLocation();

  // Get redirect location from PrivateRoute or default to dashboard
  const { from } = location.state || { from: { pathname: '/dashboard' } };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }

    setError('');
    setIsLoading(true);

    try {
      await login(formData.email, formData.password);
      history.replace(from); // Redirect to intended page or dashboard
    } catch (err) {
      setError(
        err.response?.data?.message || 
        err.message || 
        'Failed to sign in. Please check your credentials.'
      );
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
        
        {/* Show redirect message if coming from PrivateRoute */}
        {location.state?.message && (
          <div className="signin-message">
            {location.state.message}
          </div>
        )}
        
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
              disabled={isLoading || authLoading}
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
              disabled={isLoading || authLoading}
            />
          </div>
          
          <button
            type='submit'
            className={`signin-button ${isLoading || authLoading ? 'loading' : ''}`}
            disabled={isLoading || authLoading}
          >
            {isLoading || authLoading ? (
              <>
                <span className="spinner"></span>
                SIGNING IN...
              </>
            ) : (
              'SIGN IN'
            )}
          </button>
          
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