// components/TeamFormCard.jsx
import React from 'react';
import StatCard from './StatCard';

const TeamFormCard = ({ team, lastFive }) => {
  const renderForm = () => {
    return lastFive.map((result, idx) => (
      <span
        key={idx}
        className={`inline-block w-6 h-6 text-xs text-center rounded mx-0.5 font-bold ${
          result === 'W' ? 'bg-green-600 text-white' :
          result === 'D' ? 'bg-yellow-600 text-white' :
          'bg-red-600 text-white'
        }`}
      >
        {result}
      </span>
    ));
  };

  return (
    <StatCard title={team} icon="🔁">
      <div>{renderForm()}</div>
    </StatCard>
  );
};

export default TeamFormCard;