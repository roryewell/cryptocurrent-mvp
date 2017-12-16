const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const GlobalStatsSchema = new Schema({
    total_market_cap_usd: Number,
    total_24h_volume_usd: Number,
    bitcoin_percentage_of_market_cap: Number,
    active_currencies: Number,
    active_assets: Number,
    active_markets: Number,
    last_updated: Number
});

const GlobalStats = mongoose.model('GlobalStats', GlobalStatsSchema);

module.exports = GlobalStats;
