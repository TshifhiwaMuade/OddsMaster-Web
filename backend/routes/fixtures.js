// backend/routes/fixtures.js
const express = require('express');
const axios = require('axios');
require('dotenv').config();

const router = express.Router();

// GET /api/fixtures - Upcoming Premier League games
router.get('/fixtures', async (req, res) => {
  try {
    const response = await axios.get('https://api-football-v1.p.rapidapi.com/v3/fixtures', {
      params: {
        league: 39,           // Premier League
        season: 2023,         // 2023/24 season
        next: 5               // Next 5 upcoming matches
      },
      headers: {
        'X-RapidAPI-Key': process.env.FOOTBALL_API_KEY,
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
      }
    });

    // Format response for frontend
    const fixtures = response.data.response.map(game => ({
      id: game.fixture.id,
      home: game.teams.home.name,
      away: game.teams.away.name,
      date: game.fixture.date, // ISO string
      status: game.fixture.status.short, // e.g., 'NS' = Not Started
      venue: game.fixture.venue.name || 'Unknown Venue',
      // Optional: Add last H2H result later
      lastH2H: 'TBD'
    }));

    res.json({
      success: true,
      count: fixtures.length,
      data: fixtures
    });
  } catch (error) {
    console.error('Football API Error:', error.response?.data || error.message);
    res.status(500).json({
      success: false,
      message: 'Could not load fixtures',
      error: error.message
    });
  }
});

module.exports = router;