const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const CryptoSchema = new Schema({
  id: {
    type: String,
    unique: true
  },
  name: String,
  symbol: String,
  rank: Number,
  price_usd: Number,
  price_btc: Number,
  '24h_volume_usd': Number,
  market_cap_usd: Number,
  available_supply: Number,
  total_supply: Number,
  max_supply: Number,
  percent_change_1h: Number,
  percent_change_24h: Number,
  percent_change_7d: Number,
  last_updated: Number
});

const Crypto = mongoose.model('Crypto', CryptoSchema);

module.exports = Crypto;
