require('isomorphic-fetch');
require('es6-promise').polyfill();
let mock = require('../tmp/res.json');

const express = require('express');
const app = express();
const api = require('./api/');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

/**
  Simple flight search api wrapper.
  Api params and location values are here:
  http://business.skyscanner.net/portal/en-GB/Documentation/FlightsLivePricingQuickStart
*/
app.get('/api/search', (req, res) => {
  // let query = req.query;
  // api.livePricing.search({
  //   adults: query.adults,
  //   'class': query.cabinclass,
  //   toPlace: query.destinationplace,
  //   toDate: query.inbounddate,
  //   fromPlace: query.originplace,
  //   fromDate: query.outbounddate
  // })
  Promise.resolve(mock)
  .then((results) => {
    // TODO - a better format for displaying results to the client
    console.log('TODO: transform results for consumption by client');
    res.json(results);
  })
  .catch(console.error);
});

app.listen(4000, () => {
  console.log('Node server listening on http://localhost:4000');
});
