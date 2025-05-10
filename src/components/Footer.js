import * as React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Get exclusive betting insights delivered weekly
        </p>
        <p className='footer-subscription-text'>
          Receive our top AI-powered picks and market analysis
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Our Edge</h2>
            <Link to='/how-it-works'>AI Methodology</Link>
            <Link to='/data-sources'>Data Sources</Link>
            <Link to='/performance'>Track Record</Link>
            <Link to='/value-betting'>Value Betting</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Markets</h2>
            <Link to='/soccer'>Soccer</Link>
            <Link to='/rugby'>Rugby</Link>
            <Link to='/cricket'>Cricket</Link>
            <Link to='/tennis'>Tennis</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Legal</h2>
            <Link to='/terms'>Terms of Service</Link>
            <Link to='/privacy'>Privacy Policy</Link>
            <Link to='/responsible'>Responsible Gambling</Link>
            <Link to='/faq'>FAQ</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Company</h2>
            <Link to='/about'>About Us</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/careers'>Careers</Link>
            <Link to='/partners'>Partners</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              ODDSMASTER RSA
              <i className='fas fa-chart-line' />
            </Link>
          </div>
          <small className='website-rights'>Oddsmaster RSA © {new Date().getFullYear()}</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link telegram'
              to='/'
              target='_blank'
              aria-label='Telegram'
            >
              <i className='fab fa-telegram' />
            </Link>
            <Link
              className='social-icon-link discord'
              to='/'
              target='_blank'
              aria-label='Discord'
            >
              <i className='fab fa-discord' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='YouTube'
            >
              <i className='fab fa-youtube' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;