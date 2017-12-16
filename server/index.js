const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const Promise = require('bluebird');
const mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/cryptos');
const cryptoSelectorList = require('./routes/cryptoSelectorList/index.js');
const crypto = require('./routes/crypto/index.js');
const cryptoGlobalStats = require('./routes/cryptoGlobalStats/index.js');

app.use(express.static(__dirname + '/../client/dist'));
app.use('/crypto-selector-list', cryptoSelectorList);
app.use('/crypto', crypto);
app.use('/crypto-global-stats', cryptoGlobalStats);

app.listen(5123);
