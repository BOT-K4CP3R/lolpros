const axios = require('axios');
const { baseUrl } = require('../config/apiConfig');

async function getGameDetails(gameId) {
  try {
    const response = await axios.get(`${baseUrl}/lol/game/${gameId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching game details:', error);
    throw error;
  }
}

module.exports = { getGameDetails };
