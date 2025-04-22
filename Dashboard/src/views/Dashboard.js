import React from "react";
import ChartistGraph from "react-chartist";
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

function Dashboard() {
  // Sample football data
  const teamStats = {
    matchesPlayed: 24,
    goalsScored: 52,
    goalsConceded: 28,
    cleanSheets: 10,
    possession: 58.3,
    passAccuracy: 84.7,
    shotsPerGame: 15.2,
    yellowCards: 42,
    redCards: 3,
  };

  const OddMasterAI = [
    { name: "Manchester City vs Liverpool", over: 2.5, win: 1.5, draw: 0.5 },
    { name: "Mohamed Salah", goals: 15, assists: 8, minutes: 1920 },
    { name: "Bruno Fernandes", goals: 12, assists: 10, minutes: 2100 },
    { name: "Heung-min Son", goals: 11, assists: 7, minutes: 1850 },
    { name: "Jamie Vardy", goals: 10, assists: 4, minutes: 1750 },
  ];

  const upcomingMatches = [
    { opponent: "Manchester City", date: "2023-05-15", venue: "Home" },
    { opponent: "Liverpool", date: "2023-05-22", venue: "Away" },
    { opponent: "Chelsea", date: "2023-05-29", venue: "Home" },
    { opponent: "Arsenal", date: "2023-06-05", venue: "Away" },
  ];

  // Custom styles
  const styles = {
    pageWrapper: {
      backgroundColor: "#0f0f1a",
      minHeight: "100vh",
      width: "100%",
    },
    dashboardContainer: {
      backgroundColor: "#0f0f1a",
      color: "#ffffff",
      padding: "20px",
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
    gradientText: {
      background: "linear-gradient(45deg, #6e45e2, #88d3ce)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontWeight: "bold",
    },
    table: {
      color: "#ffffff",
      backgroundColor: "#1a1a2e",
    },
    tableHeader: {
      backgroundColor: "#2d2d42",
    },
    primaryButton: {
      background: "linear-gradient(45deg, #6e45e2, #88d3ce)",
      border: "none",
      fontWeight: "bold",
    },
    secondaryButton: {
      backgroundColor: "#2d2d42",
      border: "none",
      color: "#ffffff",
    },
  };

  return (
    <div style={styles.pageWrapper}>
      <Container fluid style={styles.dashboardContainer}>
        <Row className="mb-4">
          <Col>
            <h1 style={styles.gradientText}>SMART BETTING</h1>
            <h3 style={styles.gradientText}>POWERED BY AI</h3>
            <p style={{ color: "#88d3ce" }}>
              Harness predictive analytics to make data-driven decisions
            </p>
          </Col>
        </Row>

        <Row>
          <Col lg="3" sm="6">
            <Card style={styles.card}>
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center">
                      <i className="nc-icon nc-single-02" style={{ color: "#6e45e2" }}></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category text-white-50">AI win rate past week</p>
                      <Card.Title as="h4" className="text-white">{teamStats.goalsScored}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer style={{ backgroundColor: "#1a1a2e", borderTop: "1px solid #2d2d42" }}>
                <div className="stats text-white-50">
                  <i className="fas fa-futbol mr-1" style={{ color: "#6e45e2" }}></i>
                  {teamStats.goalsScored / teamStats.matchesPlayed}% win per week
                </div>
              </Card.Footer>
            </Card>
          </Col>

          <Col lg="3" sm="6">
            <Card style={styles.card}>
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center">
                      <i className="nc-icon nc-shield-43" style={{ color: "#88d3ce" }}></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category text-white-50">AI win rate per month</p>
                      <Card.Title as="h4" className="text-white">{teamStats.cleanSheets}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer style={{ backgroundColor: "#1a1a2e", borderTop: "1px solid #2d2d42" }}>
                <div className="stats text-white-50">
                  <i className="fas fa-percentage mr-1" style={{ color: "#88d3ce" }}></i>
                  {Math.round((teamStats.cleanSheets / teamStats.matchesPlayed) * 100)}% win in a month
                </div>
              </Card.Footer>
            </Card>
          </Col>

          <Col lg="3" sm="6">
            <Card style={styles.card}>
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center">
                      <i className="nc-icon nc-compass-05" style={{ color: "#6e45e2" }}></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category text-white-50">AI win rate after 3 months</p>
                      <Card.Title as="h4" className="text-white">{teamStats.possession}%</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer style={{ backgroundColor: "#1a1a2e", borderTop: "1px solid #2d2d42" }}>
                <div className="stats text-white-50">
                  <i className="fas fa-exchange-alt mr-1" style={{ color: "#6e45e2" }}></i>
                  Win Rate: {teamStats.passAccuracy}%
                </div>
              </Card.Footer>
            </Card>
          </Col>

          <Col lg="3" sm="6">
            <Card style={styles.card}>
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center">
                      <i className="nc-icon nc-trophy" style={{ color: "#88d3ce" }}></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category text-white-50">League Position</p>
                      <Card.Title as="h4" className="text-white">3rd</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer style={{ backgroundColor: "#1a1a2e", borderTop: "1px solid #2d2d42" }}>
                <div className="stats text-white-50">
                  <i className="fas fa-chart-line mr-1" style={{ color: "#88d3ce" }}></i>
                  +5 from last season
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md="8">
            <Card style={styles.card}>
              <Card.Header style={styles.cardHeader}>
                <Card.Title as="h4" className="text-white">Goals Scored by Month</Card.Title>
                <p className="card-category text-white-50">Current Season Performance</p>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" id="chartHours">
                  <ChartistGraph
                    data={{
                      labels: ["Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"],
                      series: [[4, 5, 6, 7, 5, 8, 6, 7, 4]],
                    }}
                    type="Line"
                    options={{
                      low: 0,
                      high: 10,
                      showArea: false,
                      height: "245px",
                      axisX: {
                        showGrid: false,
                      },
                      axisY: {
                        showGrid: true,
                        labelInterpolationFnc: function(value) {
                          return value;
                        }
                      },
                      lineSmooth: true,
                      showLine: true,
                      showPoint: true,
                      fullWidth: true,
                      chartPadding: {
                        right: 50,
                      },
                      color: "#6e45e2",
                    }}
                    responsiveOptions={[
                      [
                        "screen and (max-width: 640px)",
                        {
                          axisX: {
                            labelInterpolationFnc: function(value) {
                              return value[0];
                            },
                          },
                        },
                      ],
                    ]}
                  />
                </div>
              </Card.Body>
              <Card.Footer style={{ backgroundColor: "#1a1a2e", borderTop: "1px solid #2d2d42" }}>
                <div className="legend">
                  <i className="fas fa-circle" style={{ color: "#6e45e2" }}></i>
                  <span className="text-white-50"> Goals Scored</span>
                </div>
                <hr style={{ borderTop: "1px solid #2d2d42" }}></hr>
                <div className="stats text-white-50">
                  <i className="fas fa-history"></i>
                  Updated after last match
                </div>
              </Card.Footer>
            </Card>
          </Col>

          <Col md="4">
            <Card style={styles.card}>
              <Card.Header style={styles.cardHeader}>
                <Card.Title as="h4" className="text-white">Match Results</Card.Title>
                <p className="card-category text-white-50">Current Season Distribution</p>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart ct-perfect-fourth" id="chartPreferences">
                  <ChartistGraph
                    data={{
                      labels: ["Wins", "Draws", "Losses"],
                      series: [16, 5, 3],
                    }}
                    type="Pie"
                    options={{
                      donut: true,
                      donutWidth: 60,
                      startAngle: 270,
                      total: 24,
                      showLabel: true,
                      chartPadding: 20,
                      labelOffset: 60,
                      labelDirection: 'explode',
                      colors: ["#6e45e2", "#88d3ce", "#2d2d42"]
                    }}
                  />
                </div>
                <div className="legend">
                  <i className="fas fa-circle" style={{ color: "#6e45e2" }}></i>
                  <span className="text-white-50"> Wins </span>
                  <i className="fas fa-circle" style={{ color: "#88d3ce" }}></i>
                  <span className="text-white-50"> Draws </span>
                  <i className="fas fa-circle" style={{ color: "#2d2d42" }}></i>
                  <span className="text-white-50"> Losses</span>
                </div>
                <hr style={{ borderTop: "1px solid #2d2d42" }}></hr>
                <div className="stats text-white-50">
                  <i className="far fa-clock"></i>
                  Last match: W 2-0 vs Everton
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md="6">
            <Card style={styles.card}>
              <Card.Header style={styles.cardHeader}>
                <Card.Title as="h4" className="text-white">OddMasterAI Top Picks</Card.Title>
                <p className="card-category text-white-50">Current Season</p>
              </Card.Header>
              <Card.Body>
                <div className="table-full-width">
                  <Table style={styles.table} striped hover>
                    <thead style={styles.tableHeader}>
                      <tr>
                        <th className="text-white">Teams</th>
                        <th className="text-white">Over</th>
                        <th className="text-white">Win</th>
                        <th className="text-white">Draw</th>
                      </tr>
                    </thead>
                    <tbody>
                      {OddMasterAI.map((team, index) => (
                        <tr key={index}>
                          <td className="text-white">{team.name}</td>
                          <td className="text-white">{team.over}</td>
                          <td className="text-white">{team.win}</td>
                          <td className="text-white">{team.draw}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
              <Card.Footer style={{ backgroundColor: "#1a1a2e", borderTop: "1px solid #2d2d42" }}>
                <hr style={{ borderTop: "1px solid #2d2d42" }}></hr>
                <div className="stats text-white-50">
                  <i className="fas fa-redo mr-1"></i>
                  Updated after last match
                </div>
              </Card.Footer>
            </Card>
          </Col>

          <Col md="6">
            <Card style={styles.card}>
              <Card.Header style={styles.cardHeader}>
                <Card.Title as="h4" className="text-white">Upcoming Matches</Card.Title>
                <p className="card-category text-white-50">Next fixtures</p>
              </Card.Header>
              <Card.Body>
                <div className="table-full-width">
                  <Table style={styles.table} striped hover>
                    <thead style={styles.tableHeader}>
                      <tr>
                        <th className="text-white">Opponent</th>
                        <th className="text-white">Date</th>
                        <th className="text-white">Venue</th>
                        <th className="text-white">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {upcomingMatches.map((match, index) => (
                        <tr key={index}>
                          <td className="text-white">{match.opponent}</td>
                          <td className="text-white">{match.date}</td>
                          <td>
                            <Badge
                              variant={match.venue === "Home" ? "primary" : "warning"}
                              style={{ 
                                backgroundColor: match.venue === "Home" ? "#6e45e2" : "#88d3ce",
                                color: "#ffffff"
                              }}
                            >
                              {match.venue}
                            </Badge>
                          </td>
                          <td className="td-actions text-right">
                            <OverlayTrigger
                              overlay={
                                <Tooltip id={`tooltip-${index}`}>
                                  View opponent stats
                                </Tooltip>
                              }
                            >
                              <Button
                                className="btn-simple btn-link p-1"
                                type="button"
                                style={{ color: "#6e45e2" }}
                              >
                                <i className="fas fa-chart-bar"></i>
                              </Button>
                            </OverlayTrigger>
                            <OverlayTrigger
                              overlay={
                                <Tooltip id={`tooltip2-${index}`}>
                                  Set reminder
                                </Tooltip>
                              }
                            >
                              <Button
                                className="btn-simple btn-link p-1"
                                type="button"
                                style={{ color: "#88d3ce" }}
                              >
                                <i className="fas fa-bell"></i>
                              </Button>
                            </OverlayTrigger>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
              <Card.Footer style={{ backgroundColor: "#1a1a2e", borderTop: "1px solid #2d2d42" }}>
                <hr style={{ borderTop: "1px solid #2d2d42" }}></hr>
                <div className="stats text-white-50">
                  <i className="fas fa-info-circle mr-1"></i>
                  Times shown in local timezone
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;