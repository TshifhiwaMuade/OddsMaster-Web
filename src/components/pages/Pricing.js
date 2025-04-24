import React from 'react';
import { Link } from 'react-router-dom';
import './Pricing.css';

function Pricing() {
  return (
    <div className='pricing-container'>
      <h1 className='pricing-heading'>Choose Your Plan</h1>
      <p className='pricing-subtitle'>Get access to our premium betting insights</p>
      
      <div className='pricing-cards'>
        {/* Bronze Tier */}
        <div className='pricing-card bronze'>
          <div className='pricing-card-header'>
            <h3>Bronze</h3>
            <div className='price'>R99<span>/month</span></div>
          </div>
          <ul className='pricing-features'>
            <li>Daily Match Predictions</li>
            <li>Basic Analytics Dashboard</li>
            <li>Email Support</li>
            <li>Weekly Performance Reports</li>
          </ul>
          <Link to='/sign-up' className='pricing-button bronze'>
            Get Started
          </Link>
        </div>

        {/* Silver Tier */}
        <div className='pricing-card silver'>
          <div className='pricing-card-header'>
            <h3>Silver</h3>
            <div className='price'>R249<span>/month</span></div>
          </div>
          <ul className='pricing-features'>
            <li>All Bronze Features</li>
            <li>Live Match Alerts</li>
            <li>Advanced Analytics</li>
            <li>Priority Email Support</li>
            <li>Daily Performance Reports</li>
          </ul>
          <Link to='/sign-up' className='pricing-button silver'>
            Get Started
          </Link>
        </div>

        {/* Gold Tier */}
        <div className='pricing-card gold'>
          <div className='pricing-card-header'>
            <h3>Gold</h3>
            <div className='price'>R499<span>/month</span></div>
          </div>
          <ul className='pricing-features'>
            <li>All Silver Features</li>
            <li>Real-time Betting Signals</li>
            <li>Premium Analytics Dashboard</li>
            <li>24/7 Priority Support</li>
            <li>Personalized Strategy Session</li>
            <li>Exclusive Webinars</li>
          </ul>
          <Link to='/sign-up' className='pricing-button gold'>
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Pricing;