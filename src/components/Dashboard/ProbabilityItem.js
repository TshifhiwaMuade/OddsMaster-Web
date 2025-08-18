// src/components/Dashboard/ProbabilityItem.js
import React from 'react';
import './dashboard-styles.css';

const ProbabilityItem = ({ probability, description, value }) => {
  return (
    <div className="probability-item">
      <span className="probability-value">{probability}</span>
      <div className="probability-content">
        <p>{description}</p>
        <span className="probability-number">{value}</span>
      </div>
    </div>
  );
};

export default ProbabilityItem;