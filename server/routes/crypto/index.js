const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const getCyrptoStats = require('../../lib/helpers.js');
const Crypto = require('../../models/Crypto/index.js');

router.get('/:cryptoId', (req, res) => {
  console.log(req.params);
  Crypto
    .find({ id: req.params.cryptoId })
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
