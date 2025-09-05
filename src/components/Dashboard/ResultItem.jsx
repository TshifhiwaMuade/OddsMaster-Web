// components/ResultItem.jsx
import React from 'react';

const ResultItem = ({ home, away, score, predicted, actual, correct }) => {
  return (
    <div className={`flex justify-between items-center p-3 border-b border-gray-700 text-sm ${correct ? 'bg-green-900/20' : 'bg-red-900/20'}`}>
      <div>
        <strong>{home}</strong> {score} <strong>{away}</strong>
      </div>
      <div className="text-gray-300">
        Pred: {predicted} → Actual: {actual} {correct ? '✅' : '❌'}
      </div>
    </div>
  );
};

export default ResultItem;