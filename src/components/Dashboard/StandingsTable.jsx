// components/StandingsTable.jsx
import React from 'react';

const StandingsTable = ({ data }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow">
      <table className="w-full text-sm text-left text-gray-300">
        <thead className="bg-gray-700 text-gray-200 uppercase text-xs">
          <tr>
            <th className="px-4 py-2">#</th>
            <th className="px-4 py-2">Team</th>
            <th className="px-4 py-2">P</th>
            <th className="px-4 py-2">W</th>
            <th className="px-4 py-2">D</th>
            <th className="px-4 py-2">L</th>
            <th className="px-4 py-2">GD</th>
            <th className="px-4 py-2">Pts</th>
          </tr>
        </thead>
        <tbody>
          {data.map((team, idx) => (
            <tr key={team._id || idx} className="border-b border-gray-700 hover:bg-gray-750">
              <td className="px-4 py-2 font-medium text-white">{idx + 1}</td>
              <td className="px-4 py-2 font-medium">{team.name}</td>
              <td className="px-4 py-2">{team.played}</td>
              <td className="px-4 py-2 text-green-400">{team.wins}</td>
              <td className="px-4 py-2 text-yellow-400">{team.draws}</td>
              <td className="px-4 py-2 text-red-400">{team.losses}</td>
              <td className="px-4 py-2">{team.gd > 0 ? '+' : ''}{team.gd}</td>
              <td className="px-4 py-2 font-bold">{team.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StandingsTable;