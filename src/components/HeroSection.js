import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import video from '../media/2249402-uhd_3840_2160_24fps.mp4';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={video} autoPlay loop muted playsInline />
      <div className='hero-content'>
        <h1>SMART BETTING. POWERED BY AI.</h1>
        <p className='hero-subtitle'>Harness data-driven insights to inform your betting strategy</p>
        
        <div className='hero-stats'>
          <div className='stat-item'>
            <span className='stat-icon'><i className='fas fa-bolt'></i></span>
            <span className='stat-label'>Real-time Insights</span>
          </div>
          <div className='stat-item'>
            <span className='stat-icon'><i className='fas fa-chart-line'></i></span>
            <span className='stat-label'>Advanced Analytics</span>
          </div>
          <div className='stat-item'>
            <span className='stat-icon'><i className='fas fa-users'></i></span>
            <span className='stat-label'>Growing Community</span>
          </div>
        </div>

        <div className='hero-btns'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            EXPLORE FEATURES <i className='fas fa-arrow-right' />
          </Button>
          {/* <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
          >
            HOW IT WORKS <i className='fas fa-play' />
          </Button> */}
        </div>

        <div className='trust-badges'>
          <span>COMMITTED TO:</span>
          <div className='badge'><i className='fas fa-lock'></i> Data Security</div>
          <div className='badge'><i className='fas fa-gem'></i> Quality Insights</div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;