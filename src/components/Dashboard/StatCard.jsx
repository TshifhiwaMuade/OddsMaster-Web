// components/StatCard.jsx
import React from 'react';

const StatCard = ({ title, icon, children, className = "" }) => {
  return (
    <div className={`bg-gray-800 p-4 rounded-lg shadow ${className}`}>
      <h3 className="text-white font-semibold mb-3 flex items-center">
        <span className="mr-2">{icon}</span>
        {title}
      </h3>
      <div className="text-gray-300 text-sm">{children}</div>
    </div>
  );
};

export default StatCard;