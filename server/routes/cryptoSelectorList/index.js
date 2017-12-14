const express = require('express');
const router = express.Router();
const getCyrptoStats = require('../../lib/helpers.js');
const Crypto = require('../../models/Crypto/index.js');

router.get('/', (req, res) => {
  Crypto
    .find()
    .limit(10)
    .sort({ rank: 1 })
    .select({ id: 1 })
    .then((docs) => {
      res.send(docs);
    })
})

module.exports = router;
