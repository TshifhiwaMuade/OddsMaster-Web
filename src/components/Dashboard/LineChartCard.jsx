// components/LineChartCard.jsx
import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const LineChartCard = ({ data, title, dataKey, color = "#00c853" }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow">
      <h3 className="text-white font-semibold mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis dataKey="name" stroke="#aaa" fontSize={12} />
          <YAxis domain={[0, 100]} stroke="#aaa" fontSize={12} />
          <Tooltip 
            contentStyle={{ backgroundColor: '#333', border: 'none' }} 
            labelStyle={{ color: '#fff' }}
          />
          <Line type="monotone" dataKey={dataKey} stroke={color} strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartCard;