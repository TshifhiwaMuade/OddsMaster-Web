import React from 'react';
import { BettingCard } from '../Dashboard/BettingCard';
import { MaterialCard } from '../Dashboard/MaterialCard';
import '../Dashboard/Dashboard.css';

const DashboardPage = () => {
  return (
    <div className="dashboard-page">
      <BettingCard />
      <MaterialCard />
    </div>
  );
};

export default DashboardPage;