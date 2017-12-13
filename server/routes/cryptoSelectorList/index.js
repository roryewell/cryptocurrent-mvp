const express = require('express')
const router = express.Router();
const getCyrptoStats = require('../../lib/helpers.js');

router.get('/', (req, res) => {
  res.send('Testing sir');
  getCyrptoStats()
    .then((woah) => {
      console.log('woah', woah);
    })
    .catch((err) => {
      console.log(err);
    });
})

module.exports = router;
