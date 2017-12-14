const express = require('express');
const router = express.Router();
const getCyrptoStats = require('../../lib/helpers.js');
const Crypto = require('../../models/Crypto/index.js');

router.get('/', (req, res) => {
  res.send('Testing sir');

})

module.exports = router;
