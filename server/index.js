const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cryptoSelectorList = require('./routes/cryptoSelectorList/index.js');

app.use(express.static(__dirname + '/../client/dist'));
app.use('/crypto-selector-list', cryptoSelectorList);
// app.use('/crypto', crypto);

app.listen(5123);
