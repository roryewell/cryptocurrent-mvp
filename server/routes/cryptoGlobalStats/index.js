const express = require('express');
const router = express.Router();
const GlobalStats = require('../../models/GlobalStats/index.js');

router.get('/', (req, res) => {
  GlobalStats
    .find()
    .limit(1)
    .sort({ last_updated: -1 })
    .select({ total_market_cap_usd: 1, active_currencies: 1} )
    .then((doc) => {
      res.send(doc);
    })
    .catch((err) => {
      res.sendStatus(404);
      console.log(err);
    });
})

module.exports = router;
