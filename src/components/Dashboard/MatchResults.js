// src/components/Dashboard/MatchResults.js
import React from 'react';
import './dashboard-styles.css';

const MatchResults = () => {
  return (
    <div className="goals-section">
      <h3>Goals Scored by Month</h3>
      <p className="company-name">Goals Board, Inc.</p>

      <div className="match-results">
        <h4>Match Results</h4>
        <ul>
          <li><strong>Team Confidence:</strong> High</li>
          <li><strong>Action:</strong> Accept team (24 of)</li>
          <li><strong>Session Time:</strong> Live session</li>
          <li><strong>Status:</strong> Accepted (24 of)</li>
        </ul>
      </div>

      <div className="rank-board">
        <h4>Rank Board</h4>
        <ul>
          <li><strong>Status:</strong> Disabled after last month</li>
          <li><strong>Contact:</strong> @Events © Lassan</li>
          <li><strong>Account:</strong> W 5 on Events</li>
        </ul>
      </div>
    </div>
  );
};

export default MatchResults;