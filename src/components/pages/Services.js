import React from 'react';
import '../../App.css';
import './AboutUs.css'; // Create this CSS file for additional styling

export default function AboutUs() {
  return (
    <div className='about-us'>
      <section className='hero-section'>
        <h1>Data-Driven Betting Intelligence</h1>
        <p className='subtitle'>
          Harnessing AI to reveal hidden value in sports betting markets
        </p>
      </section>

      <section className='mission-section'>
        <h2>Our Mission</h2>
        <p>
          At Oddsmaster RSA, we're revolutionizing sports betting by replacing gut feelings with 
          machine learning-powered insights. Our platform identifies mathematically advantageous 
          bets while steering you away from emotionally tempting but statistically poor wagers.
        </p>
      </section>

      <section className='technology-section'>
        <h2>The Science Behind Our Picks</h2>
        <div className='tech-features'>
          <div className='feature-card'>
            <h3>AI-Powered Analysis</h3>
            <p>
              Our proprietary algorithms process thousands of data points - from player performance 
              metrics to weather conditions - identifying patterns invisible to human analysts.
            </p>
          </div>
          <div className='feature-card'>
            <h3>Market Inefficiency Detection</h3>
            <p>
              We specialize in finding discrepancies between true probabilities and bookmaker odds, 
              uncovering value where others see only favorites and underdogs.
            </p>
          </div>
          <div className='feature-card'>
            <h3>Bias Elimination</h3>
            <p>
              Our system ignores popular narratives and media hype, focusing solely on what the 
              data reveals about probable outcomes.
            </p>
          </div>
        </div>
      </section>

      <section className='team-section'>
        <h2>Who We Are</h2>
        <p>
          We're a team of data scientists, professional sports bettors, and machine learning 
          engineers united by one goal: giving South African bettors a sustainable edge. With 
          decades of combined experience in both quantitative analysis and sports betting markets, 
          we've built a system that does what human intuition cannot.
        </p>
      </section>

      <section className='difference-section'>
        <h2>Why Oddsmaster RSA Stands Apart</h2>
        <ul className='differentiators'>
          <li>
            <strong>South African Focus:</strong> Our models are specifically tuned for local 
            betting markets and sports preferences.
          </li>
          <li>
            <strong>Transparent Methodology:</strong> We show you the data behind every 
            recommendation, not just the picks.
          </li>
          <li>
            <strong>Value-First Approach:</strong> We often recommend bets with less "sex appeal" 
            but stronger mathematical foundations.
          </li>
          <li>
            <strong>Continuous Learning:</strong> Our AI evolves with every match, adapting to 
            changing team dynamics and market conditions.
          </li>
        </ul>
      </section>

      <section className='cta-section'>
        <h2>Ready to Bet Smarter?</h2>
        <p>
          Join Oddsmaster RSA today and gain access to betting insights that transform how you 
          approach sports wagering. The numbers don't lie - it's time to let them guide your 
          betting strategy.
        </p>
        <button className='cta-button'>Start Your Free Trial</button>
      </section>
    </div>
  );
}