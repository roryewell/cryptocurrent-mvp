const rp = require('request-promise');

const getCyrptoStats = () => {
  return rp('https://api.coinmarketcap.com/v1/ticker/');
}

module.exports = getCyrptoStats;
