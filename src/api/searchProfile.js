const axios = require('axios');
const { baseUrl } = require('../config/apiConfig');

async function searchProfile(username) {
  try {
    const response = await axios.get(`${baseUrl}/es/search/profile?query=${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching profile:', error);
    throw error;
  }
}

module.exports = { searchProfile };
