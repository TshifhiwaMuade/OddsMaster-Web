// components/PickCard.jsx
import React from 'react';

const PickCard = ({ match, prediction, probability, expectedValue, risk }) => {
  const riskColor =
    risk === 'low' ? 'text-green-400' :
    risk === 'medium' ? 'text-yellow-400' :
    'text-red-400';

  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-4 rounded-lg shadow border-l-4 border-green-500">
      <h4 className="font-bold text-white">{match}</h4>
      <p className="text-sm text-blue-300">Prediction: <strong>{prediction}</strong> ({probability}%)</p>
      <div className="flex justify-between mt-2 text-xs">
        <span className="text-green-400">EV: <strong>{expectedValue > 0 ? '+' : ''}{expectedValue}</strong></span>
        <span className={riskColor}>Risk: {risk.charAt(0).toUpperCase() + risk.slice(1)}</span>
      </div>
    </div>
  );
};

export default PickCard;