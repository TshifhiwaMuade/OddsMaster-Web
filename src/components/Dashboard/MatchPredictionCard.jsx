// components/MatchPredictionCard.jsx
import React from 'react';

const MatchPredictionCard = ({
  homeTeam,
  awayTeam,
  date,
  time,
  venue,
  probabilities,
  confidence,
  odds,
}) => {
  const { home, draw, away } = probabilities;

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow mb-3 border border-gray-700">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="font-semibold text-white">
            {homeTeam} vs {awayTeam}
          </h3>
          <p className="text-sm text-gray-400">{date} at {time} • {venue}</p>
        </div>
        <div className="text-right">
          <div className="text-xs text-green-400">AI Confidence</div>
          <div className="text-sm font-medium">{confidence}%</div>
        </div>
      </div>

      {/* Win Probabilities */}
      <div className="mt-3">
        <div className="flex text-xs text-gray-300 mb-1">
          <span className="flex-1 text-left">Home</span>
          <span className="flex-1 text-center">Draw</span>
          <span className="flex-1 text-right">Away</span>
        </div>
        <div className="flex h-2 rounded overflow-hidden">
          <div className="bg-blue-600" style={{ width: `${home}%` }}></div>
          <div className="bg-yellow-500" style={{ width: `${draw}%` }}></div>
          <div className="bg-red-600" style={{ width: `${away}%` }}></div>
        </div>
        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>{home}%</span>
          <span>{draw}%</span>
          <span>{away}%</span>
        </div>
      </div>

      {/* Odds (if available) */}
      {odds && (
        <div className="mt-2 text-xs text-gray-400">
          Odds: {odds.home} / {odds.draw} / {odds.away}
        </div>
      )}
    </div>
  );
};

export default MatchPredictionCard;