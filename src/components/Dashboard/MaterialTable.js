import React from 'react';

const MaterialTable = ({ data }) => {
  return (
    <>
      <table className="material-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Range</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Molecular City and Legend</strong></td>
            <td>2.5</td>
            <td>1.5</td>
            <td>0.5</td>
          </tr>
        </tbody>
      </table>
      
      <div className="divider"></div>
      
      <div className="material-details">
        <h4>C* Material size for details</h4>
        <table className="details-table">
          <thead>
            <tr>
              <th>Location</th>
              <th>Materials (m)</th>
              <th>Size</th>
              <th>Total</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.location}</td>
                <td>{row.date}</td>
                <td>{row.size}</td>
                <td>{row.total}</td>
                <td>{row.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MaterialTable;