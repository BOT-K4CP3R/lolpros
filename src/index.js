const { searchProfile } = require('./api/searchProfile');
const { getGameDetails } = require('./api/lolGame');
const { getLadder } = require('./api/ladder');

module.exports = {
  searchProfile,
  getGameDetails,
  getLadder,
};
