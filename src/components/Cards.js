import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';

function Cards() {
  return (
    <div className='services-container'>
      <h1 className='services-heading'>Our Premium Betting Insights</h1>
      <p className='services-subtitle'>Discover how our data-driven approach gives you the winning edge</p>
      
      <div className='services-cards'>
        {/* Data Analysis Card */}
        <div className='service-card'>
          <div className='service-card-header'>
            <h3>Advanced Analytics</h3>
            <div className='service-icon'>
              <i className='fas fa-chart-line'></i>
            </div>
          </div>
          <ul className='service-features'>
            <li>Real-time match statistics and trends</li>
            <li>Historical performance analysis</li>
            <li>Probability modeling for accurate predictions</li>
            <li>Customizable dashboard views</li>
          </ul>
          <Link to='/pricing' className='service-button'>
            View Pricing Plans
          </Link>
        </div>

        {/* Predictions Card */}
        <div className='service-card'>
          <div className='service-card-header'>
            <h3>Expert Predictions</h3>
            <div className='service-icon'>
              <i className='fas fa-trophy'></i>
            </div>
          </div>
          <ul className='service-features'>
            <li>Daily curated match selections</li>
            <li>Value betting opportunities</li>
            <li>Risk assessment for each prediction</li>
            <li>Performance tracking and verification</li>
          </ul>
          <Link to='/pricing' className='service-button'>
            View Pricing Plans
          </Link>
        </div>

        {/* Support Card */}
        <div className='service-card'>
          <div className='service-card-header'>
            <h3>Premium Support</h3>
            <div className='service-icon'>
              <i className='fas fa-headset'></i>
            </div>
          </div>
          <ul className='service-features'>
            <li>24/7 customer assistance</li>
            <li>Personalized strategy consultations</li>
            <li>Exclusive member webinars</li>
            <li>Dedicated account managers</li>
          </ul>
          <Link to='/pricing' className='service-button'>
            View Pricing Plans
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cards;