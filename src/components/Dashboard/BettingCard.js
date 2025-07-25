import React from 'react';
import ProbabilityItem from './ProbabilityItem';
import MatchResults from './MatchResults';

const BettingCard = () => {
  const probabilityData = [
    { probability: '0.1%', description: 'A person may not work', value: 52 },
    { probability: '0.2%', description: 'A person may not work', value: 10 },
    { probability: '0.3%', description: 'A person may not work', value: 10 },
    { probability: '0.4%', description: 'A person may not work', value: 20 },
    { probability: '0.5%', description: 'A person may not work', value: 20 },
  ];

  return (
    <div className="card betting-card">
      <div className="card-header">
        <h1>SMART BETTING</h1>
        <p className="powered-by">POWERED BY AI</p>
        <p className="subtext">Human welfare subject to mild state discrimination</p>
      </div>
      
      <div className="probability-list">
        {probabilityData.map((item, index) => (
          <ProbabilityItem key={index} {...item} />
        ))}
      </div>
      
      <div className="divider"></div>
      
      <MatchResults />
    </div>
  );
};

export default BettingCard;