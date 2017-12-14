const rp = require('request-promise');

const getCyrptoStats = () => {
  return rp('https://api.coinmarketcap.com/v1/ticker/?limit=0');
}

module.exports = getCyrptoStats;
