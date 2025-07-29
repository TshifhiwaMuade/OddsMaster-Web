// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // useHistory → useNavigate
import { useAuth } from '../contexts/AuthContext';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const navigate = useNavigate(); // ← useNavigate instead of useHistory
  const { user, isAuthenticated, logout } = useAuth();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    return () => window.removeEventListener('resize', showButton);
  }, []);

  const handleLogout = () => {
    logout();
    closeMobileMenu();
    navigate('/'); // ← history.push('/') → navigate('/')
  };

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          ODDSMASTER
          <i className='fas fa-chart-line' />
        </Link>
        
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
              Our Edge
            </Link>
          </li>
          
          <li className='nav-item'>
            <Link to='/pricing' className='nav-links' onClick={closeMobileMenu}>
              Pricing
            </Link>
          </li>

          {isAuthenticated && (
            <li className='nav-item'>
              <Link to='/dashboard' className='nav-links' onClick={closeMobileMenu}>
                Dashboard
              </Link>
            </li>
          )}

          {isAuthenticated ? (
            <li className='nav-item'>
              <div className='auth-buttons'>
                <Button
                  buttonStyle='btn--primary'
                  buttonSize='btn--medium'
                  onClick={handleLogout}
                >
                  Sign Out
                </Button>
                {user?.email && (
                  <span className='user-email'>{user.email}</span>
                )}
              </div>
            </li>
          ) : (
            button && (
              <li className='nav-item'>
                <div className='auth-buttons'>
                  <Button
                    buttonStyle='btn--outline'
                    buttonSize='btn--medium'
                    onClick={() => {
                      closeMobileMenu();
                      navigate('/sign-in'); // ← updated
                    }}
                  >
                    Login
                  </Button>
                  <Button
                    buttonStyle='btn--primary'
                    buttonSize='btn--medium'
                    onClick={() => {
                      closeMobileMenu();
                      navigate('/sign-up'); // ← updated
                    }}
                  >
                    Sign Up
                  </Button>
                </div>
              </li>
            )
          )}
        </ul>

        {!button && !isAuthenticated && (
          <div className='mobile-auth'>
            <Button
              buttonStyle='btn--outline'
              buttonSize='btn--medium'
              onClick={() => {
                closeMobileMenu();
                navigate('/sign-in'); // ← updated
              }}
            >
              Login
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;