#!/usr/local/bin/node
const express = require('express')
const mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/cryptos');
const getCyrptoStats = require('../lib/helpers.js');
const Crypto = require('../models/Crypto/index.js');

getCyrptoStats()
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
