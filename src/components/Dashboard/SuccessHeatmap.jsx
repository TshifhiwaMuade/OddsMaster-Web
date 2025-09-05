// components/SuccessHeatmap.jsx
import React from 'react';

const SuccessHeatmap = ({ data }) => {
  const getColor = (value) => {
    if (value >= 70) return 'bg-green-600 text-white';
    if (value >= 50) return 'bg-yellow-600 text-black';
    return 'bg-red-600 text-white';
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow">
      <h3 className="text-white font-semibold mb-3">Model Accuracy by League</h3>
      <div className="flex flex-wrap gap-2">
        {data.map((item) => (
          <div
            key={item.league}
            className={`px-3 py-1.5 text-xs font-medium rounded ${getColor(item.accuracy)}`}
          >
            {item.league}: {item.accuracy}%
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessHeatmap;