#!/usr/local/bin/node
const express = require('express')
const mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/cryptos');
const helpers = require('../lib/helpers.js');
const Crypto = require('../models/Crypto/index.js');
const GlobalStats = require('../models/GlobalStats/index.js');

helpers.getCyrptoStats()
  .then((results) => {
    const parsedResults = JSON.parse(results);
    const cryptoPromises = [];
    for (crypto of parsedResults) {
      const filter = {};
      filter.id = crypto.id;
      cryptoPromises.push(Crypto.findOneAndUpdate(filter, crypto, { upsert: true, new: true }));
    }
    return Promise.all(cryptoPromises);
  })
  .catch((err) => {
    console.log(err);
  })
  .then(() => {
    mongoose.disconnect();
  });

helpers.getGlobalCryptoStats()
  .then((results) => {
    const parsedResults = JSON.parse(results);
    console.log(parsedResults);
    const globalStatsRecord = new GlobalStats(parsedResults);
    return globalStatsRecord.save();
  })
  .then((doc) => {
    console.log('Successfully retrieved global stats');
  })
  .catch((err) => {
    console.log(err);
  })
  .then(() => {
    mongoose.disconnect();
  });
