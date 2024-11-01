const axios = require('axios');
const { baseUrl } = require('../config/apiConfig');

async function getLadder(page = 1, pageSize = 50, sort = 'rank', order = 'desc') {
  try {
    const response = await axios.get(`${baseUrl}/es/ladder`, {
      params: {
        page,
        page_size: pageSize,
        sort,
        order,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching ladder:', error);
    throw error;
  }
}

module.exports = { getLadder };
