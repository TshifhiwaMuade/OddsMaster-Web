import React from 'react';
import BettingCard from '../Dashboard/BettingCard';  // Removed curly braces
import MaterialCard from '../Dashboard/MaterialCard';  // Removed curly braces
import MaterialTable from '../Dashboard/MaterialTable';  // Removed curly braces
import ProbabilityItem from '../Dashboard/ProbabilityItem';  // Removed curly braces
import '../Dashboard/dashboard-styles.css';  // Importing the shared styles
import MatchResults from '../Dashboard/MatchResults';  // Removed curly braces

const DashboardPage = () => {
  return (
    <div className="dashboard-page">
      <BettingCard />
      <MaterialTable />
      <MaterialCard />
      {/* <MatchResults /> */}
      
      <ProbabilityItem />
    </div>
  );
};

export default DashboardPage;