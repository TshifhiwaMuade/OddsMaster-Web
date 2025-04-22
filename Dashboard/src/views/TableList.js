import React from "react";
// react-bootstrap components
import { Card, Table, Container, Row, Col } from "react-bootstrap";

function TableList() {
  // Custom styles to match the dashboard
  const styles = {
    dashboardContainer: {
      backgroundColor: "#0f0f1a",
      minHeight: "100vh",
      color: "#ffffff",
    },
    card: {
      backgroundColor: "#1a1a2e",
      border: "none",
      borderRadius: "10px",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
      marginBottom: "20px",
    },
    cardHeader: {
      backgroundColor: "#1a1a2e",
      borderBottom: "1px solid #2d2d42",
    },
    table: {
      color: "#ffffff",
      backgroundColor: "#1a1a2e",
    },
    tableHeader: {
      backgroundColor: "#2d2d42",
    },
    gradientText: {
      background: "linear-gradient(45deg, #6e45e2, #88d3ce)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontWeight: "bold",
    },
    stripedRow: {
      backgroundColor: "#1a1a2e",
      '&:nth-of-type(odd)': {
        backgroundColor: "#2d2d42",
      },
    },
  };

  // Example Premier League table data
  const premierLeagueTable = [
    { team: "Arsenal", played: 30, wins: 22, draws: 5, losses: 3, points: 71 },
    {
      team: "Manchester City",
      played: 30,
      wins: 21,
      draws: 6,
      losses: 3,
      points: 69,
    },
    {
      team: "Liverpool",
      played: 30,
      wins: 20,
      draws: 7,
      losses: 3,
      points: 67,
    },
    {
      team: "Manchester United",
      played: 30,
      wins: 18,
      draws: 5,
      losses: 7,
      points: 59,
    },
    {
      team: "Tottenham",
      played: 30,
      wins: 16,
      draws: 6,
      losses: 8,
      points: 54,
    },
  ];

  // Example top scorers data
  const topScorers = [
    { name: "Erling Haaland", goals: 24, assists: 6, minutes: 2100 },
    { name: "Mohamed Salah", goals: 20, assists: 8, minutes: 2250 },
    { name: "Harry Kane", goals: 18, assists: 5, minutes: 2000 },
    { name: "Marcus Rashford", goals: 16, assists: 5, minutes: 2300 },
    { name: "Bukayo Saka", goals: 14, assists: 10, minutes: 2400 },
  ];

  return (
    <>
      <Container fluid style={styles.dashboardContainer}>
        <Row>
          {/* Premier League Table */}
          <Col md="12">
            <Card style={styles.card}>
              <Card.Header style={styles.cardHeader}>
                <Card.Title as="h4" style={styles.gradientText}>Premier League Table</Card.Title>
                <p className="card-category text-white-50">Current Season Standings</p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table 
                  striped 
                  hover 
                  style={styles.table}
                  className="table-hover"
                >
                  <thead style={styles.tableHeader}>
                    <tr>
                      <th className="border-0 text-white">Team</th>
                      <th className="border-0 text-white">Played</th>
                      <th className="border-0 text-white">Wins</th>
                      <th className="border-0 text-white">Draws</th>
                      <th className="border-0 text-white">Losses</th>
                      <th className="border-0 text-white">Points</th>
                    </tr>
                  </thead>
                  <tbody>
                    {premierLeagueTable.map((team, index) => (
                      <tr key={index} style={index % 2 === 0 ? {backgroundColor: "#1a1a2e"} : {backgroundColor: "#2d2d42"}}>
                        <td className="text-white">{team.team}</td>
                        <td className="text-white">{team.played}</td>
                        <td className="text-white">{team.wins}</td>
                        <td className="text-white">{team.draws}</td>
                        <td className="text-white">{team.losses}</td>
                        <td className="text-white" style={{fontWeight: "bold"}}>{team.points}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>

          {/* Top Scorers Table */}
          <Col md="12">
            <Card style={styles.card}>
              <Card.Header style={styles.cardHeader}>
                <Card.Title as="h4" style={styles.gradientText}>Top Goal Scorers</Card.Title>
                <p className="card-category text-white-50">Current Season</p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table 
                  hover 
                  style={styles.table}
                  className="table-hover"
                >
                  <thead style={styles.tableHeader}>
                    <tr>
                      <th className="border-0 text-white">Player</th>
                      <th className="border-0 text-white">Goals</th>
                      <th className="border-0 text-white">Assists</th>
                      <th className="border-0 text-white">Mins/Goal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topScorers.map((player, index) => (
                      <tr key={index} style={index % 2 === 0 ? {backgroundColor: "#1a1a2e"} : {backgroundColor: "#2d2d42"}}>
                        <td className="text-white">{player.name}</td>
                        <td className="text-white">{player.goals}</td>
                        <td className="text-white">{player.assists}</td>
                        <td className="text-white">{Math.round(player.minutes / player.goals)}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TableList;