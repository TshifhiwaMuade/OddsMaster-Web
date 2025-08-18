// src/components/Dashboard/MaterialCard.js
import React from 'react';
import './dashboard-styles.css';

const MaterialCard = () => {
  return (
    <div className="card material-card">
      {/* Card Header */}
      <div className="card-header">
        <h1>PREMIER LEAGUE TABLE</h1>
        <p className="subtext">Live Standings & Form | Powered by FCTables</p>
      </div>

      {/* Embedded FCTables League Table */}
      <div className="fctables-embed-container">
        <iframe
          src="https://www.fctables.com/england/premier-league/iframe/?type=table&lang_id=2&country=67&template=10&team=&timezone=Africa/Johannesburg&time=24&po=1&ma=1&wi=1&dr=1&los=1&gf=1&ga=1&gd=1&pts=1&ng=1&form=1&width=520&height=700&font=Verdana&fs=12&lh=22&bg=FFFFFF&fc=333333&tlink=1&ths=1&thb=1&thba=FFFFFF&thc=000000&bc=dddddd&hob=f5f5f5&hobc=ebe7e7&lc=333333&sh=1&hfb=1&hbc=3bafda&hfc=FFFFFF"
          width="100%"
          height="500"
          frameBorder="0"
          scrolling="no"
          title="Premier League Table"
        />
      </div>

      <div className="divider"></div>

      {/* Molecule Sales Section */}
      <div className="molecule-sales">
        <h3>Molecule Sales</h3>
        <h4>Basic Elements</h4>
        <ul className="dashboard-list">
          <li>Multiple Sales</li>
          <li>Sales Ready</li>
        </ul>
      </div>

      <div className="new-material">
        <p><strong>D*</strong> The new material is not prepared.</p>
      </div>

      {/* Attribution */}
      <div className="fctables-attribution">
        <a
          href="https://www.fctables.com/england/premier-league/"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          View Full Stats on FCTables.com
        </a>
      </div>
    </div>
  );
};

export default MaterialCard;