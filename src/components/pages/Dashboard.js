import React from 'react';
import Header from '../Dashboard/header';
import LineChartCard from '../Dashboard/LineChartCard';
import MatchPredictionCard from '../Dashboard/MatchPredictionCard';
import PickCard from '../Dashboard/PickCard';
import ResultItem from '../Dashboard/ResultItem';
import StandingsTable from '../Dashboard/StandingsTable';
import StatCard from '../Dashboard/StatCard';
import SuccessHeatmap from '../Dashboard/SuccessHeatmap';
import TeamFormCard from '../Dashboard/TeamFormCard';
import '../Dashboard/dashboard-styles.css'; // Import the CSS file for styling

const DashboardPage = () => {
  // Sample data for demonstration - replace with real data from your API/state
  const sampleMatchData = {
    homeTeam: "Manchester United",
    awayTeam: "Liverpool",
    date: "2024-01-15",
    time: "15:30",
    venue: "Old Trafford",
    probabilities: {
      home: 45,
      draw: 25,
      away: 30
    },
    confidence: 78,
    odds: {
      home: "2.20",
      draw: "3.40",
      away: "2.80"
    }
  };

  const samplePickData = {
    match: "Chelsea vs Arsenal",
    prediction: "Chelsea Win",
    probability: 65,
    expectedValue: 1.2,
    risk: "medium"
  };

  const sampleResultData = {
    home: "Barcelona",
    away: "Real Madrid",
    score: "2-1",
    predicted: "Barcelona Win",
    actual: "Barcelona Win",
    correct: true
  };

  const sampleStandingsData = [
    {
      _id: "1",
      name: "Manchester City",
      played: 20,
      wins: 15,
      draws: 3,
      losses: 2,
      gd: 25,
      points: 48
    },
    {
      _id: "2", 
      name: "Arsenal",
      played: 20,
      wins: 14,
      draws: 4,
      losses: 2,
      gd: 22,
      points: 46
    },
    {
      _id: "3",
      name: "Liverpool",
      played: 20,
      wins: 13,
      draws: 5,
      losses: 2,
      gd: 18,
      points: 44
    }
  ];

  const sampleHeatmapData = [
    { league: "Premier League", accuracy: 75 },
    { league: "La Liga", accuracy: 68 },
    { league: "Bundesliga", accuracy: 72 },
    { league: "Serie A", accuracy: 65 },
    { league: "Ligue 1", accuracy: 70 }
  ];

  const sampleChartData = [
    { name: 'Jan', value: 65 },
    { name: 'Feb', value: 68 },
    { name: 'Mar', value: 72 },
    { name: 'Apr', value: 75 },
    { name: 'May', value: 71 },
    { name: 'Jun', value: 78 }
  ];

  const sampleFormData = ['W', 'W', 'D', 'W', 'L'];

  return (
    <div className="dashboard-container">
      <Header />
      
      <div className="dashboard-content">
        {/* Welcome header with user stats */}
        <div className="welcome-banner">
          <div className="welcome-text">
            <h1>Welcome to Your Sports Dashboard</h1>
            <p>Your prediction performance: <span className="performance-highlight">73.2% accuracy</span> this month</p>
          </div>
          <div className="quick-stats">
            <div className="stat-badge">
              <span className="stat-value">12</span>
              <span className="stat-label">Active Predictions</span>
            </div>
            <div className="stat-badge">
              <span className="stat-value">+$245</span>
              <span className="stat-label">Today's Profit</span>
            </div>
          </div>
        </div>

        <div className="dashboard-grid">
          
          {/* Match Prediction Card */}
          <div className="card featured-card">
            <div className="card-header">
              <h2>Featured Match Prediction</h2>
              <span className="confidence-badge">{sampleMatchData.confidence}% Confidence</span>
            </div>
            <MatchPredictionCard
              homeTeam={sampleMatchData.homeTeam}
              awayTeam={sampleMatchData.awayTeam}
              date={sampleMatchData.date}
              time={sampleMatchData.time}
              venue={sampleMatchData.venue}
              probabilities={sampleMatchData.probabilities}
              confidence={sampleMatchData.confidence}
              odds={sampleMatchData.odds}
            />
          </div>

          {/* Pick Card */}
          <div className="card">
            <div className="card-header">
              <h2>Today's Top Pick</h2>
              <div className={`risk-badge risk-${samplePickData.risk}`}>{samplePickData.risk}</div>
            </div>
            <PickCard
              match={samplePickData.match}
              prediction={samplePickData.prediction}
              probability={samplePickData.probability}
              expectedValue={samplePickData.expectedValue}
              risk={samplePickData.risk}
            />
          </div>

          {/* Result Item */}
          <div className="card">
            <div className="card-header">
              <h2>Recent Results</h2>
            </div>
            <ResultItem
              home={sampleResultData.home}
              away={sampleResultData.away}
              score={sampleResultData.score}
              predicted={sampleResultData.predicted}
              actual={sampleResultData.actual}
              correct={sampleResultData.correct}
            />
          </div>

          {/* Team Form */}
          <div className="card">
            <div className="card-header">
              <h2>Team Form</h2>
            </div>
            <TeamFormCard 
              team="Manchester City" 
              lastFive={sampleFormData} 
            />
          </div>

          {/* Success Heatmap */}
          <div className="card">
            <div className="card-header">
              <h2>League Performance</h2>
            </div>
            <SuccessHeatmap data={sampleHeatmapData} />
          </div>

          {/* Line Chart */}
          <div className="card">
            <div className="card-header">
              <h2>Performance Trend</h2>
            </div>
            <LineChartCard
              data={sampleChartData}
              title="Prediction Accuracy Trend"
              dataKey="value"
              color="#00d4ff"
            />
          </div>

          {/* Stat Card Example */}
          <div className="card stat-card">
            <div className="card-header">
              <h2>Overall Stats</h2>
            </div>
            <StatCard title="Overall Stats" icon="📊">
              <div className="stats-grid">
                <div className="stat-item">
                  <span className="stat-figure">1,247</span>
                  <span className="stat-description">Total Predictions</span>
                </div>
                <div className="stat-item">
                  <span className="stat-figure highlight">73.2%</span>
                  <span className="stat-description">Success Rate</span>
                </div>
                <div className="stat-item">
                  <span className="stat-figure profit">+$1,856</span>
                  <span className="stat-description">Profit/Loss</span>
                </div>
              </div>
            </StatCard>
          </div>

        </div>

        {/* Standings Table - Full Width */}
        <div className="card full-width-card">
          <div className="card-header">
            <h2>Premier League Standings</h2>
            <button className="view-all-btn">View Full Table →</button>
          </div>
          <StandingsTable data={sampleStandingsData} />
        </div>

      </div>
    </div>
  );
};

export default DashboardPage;