import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import video from '../media/2249402-uhd_3840_2160_24fps.mp4'; // Ensure this video fits your platform's theme

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={video} autoPlay loop muted />
      <h1>SMART BETTING. POWERED BY AI.</h1>
      <p>Harness predictive analytics to make data-driven decisions.</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        {/* Removed "Watch Trailer" button and replaced with a demo button (optional) */}
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={() => console.log('Redirect to demo')} // Replace with actual demo link
        >
          LIVE DEMO <i className='fas fa-chart-line' /> {/* Changed icon to fit analytics theme */}
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;