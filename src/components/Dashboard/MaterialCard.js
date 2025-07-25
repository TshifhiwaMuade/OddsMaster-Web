import React from 'react';
import MaterialTable from './MaterialTable';

const MaterialCard = () => {
  const materialData = [
    { location: 'Mechanical City', date: '2023-06-15', size: 'None', total: 10, amount: 4 },
    { location: 'Longcoil', date: '2023-06-22', size: 'None', total: 10, amount: 4 },
    { location: 'Chelsea', date: '2023-06-29', size: 'None', total: 10, amount: 4 },
    { location: 'Funeral', date: '2023-06-05', size: 'None', total: 10, amount: 4 },
  ];

  return (
    <div className="card material-card">
      <div className="card-header">
        <h1>OddMaterial Top Picks</h1>
        <p className="subtext">Output Material</p>
      </div>
      
      <MaterialTable data={materialData} />
      
      <div className="molecule-sales">
        <h3>Molecule Sales</h3>
        <h4>Basic Elements</h4>
        <ul>
          <li>Multiple Sales</li>
          <li>Sales Ready</li>
        </ul>
      </div>
      
      <div className="divider"></div>
      
      <div className="new-material">
        <h4>D* The new material is not prepared.</h4>
      </div>
    </div>
  );
};

export default MaterialCard;