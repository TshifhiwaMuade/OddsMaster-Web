// src/components/Dashboard/MaterialTable.js
import React from 'react';
import './dashboard-styles.css';

const MaterialTable = ({ data = [] }) => {
  return (
    <div className="material-table-wrapper">
      {/* FCTables Live Scores Iframe */}
      <div className="fctables-iframe-container">
        <h1>Upcoming Premier league Fixtures</h1>
        <iframe
          src="https://www.fctables.com/england/premier-league/iframe/?type=league-scores&lang_id=2&country=67&template=10&team=180231&timezone=Africa/Johannesburg&time=24&width=520&height=700&font=Verdana&fs=12&lh=22&bg=FFFFFF&fc=333333&tlink=1&scoreb=f4454f&scorefc=FFFFFF&sgdcoreb=8f8d8d&sgdcorefc=FFFFFF&sh=1&hfb=1&hbc=3bafda&hfc=FFFFFF"
          width="100%"
          height="700" // 🔥 Increased from 440 to 700
          frameBorder="0"
          scrolling="no"
          title="Premier League Live Scores"
          style={{ border: 'none', borderRadius: '12px' }}
        ></iframe>
      </div>

      {/* Attribution */}
      <div className="fctables-attribution">
        <a
          href="https://www.fctables.com/england/premier-league/"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          Live Scores via FCTables.com
        </a>
      </div>

      {/* Optional: Fallback Static Table */}
      {data.length > 0 && (
        <>
          <div className="divider"></div>
          <div className="material-details">
            <h4>🎮 Match Details</h4>
            <table className="details-table">
              <thead>
                <tr>
                  <th>Home Team</th>
                  <th>Away Team</th>
                  <th>Status</th>
                  <th>Venue</th>
                </tr>
              </thead>
              <tbody>
                {data.map((game, index) => (
                  <tr key={index}>
                    <td>{game.home}</td>
                    <td>{game.away}</td>
                    <td>{game.status === 'NS' ? 'Scheduled' : 'Played'}</td>
                    <td>{game.venue || 'TBD'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default MaterialTable;