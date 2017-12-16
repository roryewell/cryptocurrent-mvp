const express = require('express');
const router = express.Router();
const getCyrptoStats = require('../../lib/helpers.js');
const Crypto = require('../../models/Crypto/index.js');

router.get('/', (req, res) => {
  Crypto
    .find()
    .limit(15)
    .sort({ rank: 1 })
    .select({ id: 1, name: 1})
    .then((docs) => {
      res.send(docs);
    })
    .catch((err) => {
      res.sendStatus(404);
      console.log(err);
    });
})

module.exports = router;
