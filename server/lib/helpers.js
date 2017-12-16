const rp = require('request-promise');

const getCyrptoStats = () => {
  return rp('https://api.coinmarketcap.com/v1/ticker/?limit=0');
};

const getGlobalCryptoStats = () => {
  return rp('https://api.coinmarketcap.com/v1/global');
};

module.exports.getCyrptoStats = getCyrptoStats;
module.exports.getGlobalCryptoStats = getGlobalCryptoStats;
