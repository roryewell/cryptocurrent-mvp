const express = require('express');
const router = express.Router();
const Crypto = require('../../models/Crypto/index.js');

router.get('/:cryptoId', (req, res) => {
  Crypto
    .find({ id: req.params.cryptoId })
    .select({ id: 1, name: 1, symbol: 1, rank: 1, price_usd: 1, market_cap_usd: 1, percent_change_24h: 1 })
    .then((docs) => {
      res.send(docs);
    })
    .catch((err) => {
      res.sendStatus(404);
      console.log(err);
    });
})

module.exports = router;
