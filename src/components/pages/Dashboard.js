import React from 'react';
import { BettingCard, MaterialCard } from '../components/Dashboard';
import '../components/Dashboard/Dashboard.css';

const DashboardPage = () => {
  return (
    <div className="dashboard-page">
      <BettingCard />
      <MaterialCard />
    </div>
  );
};

export default DashboardPage;