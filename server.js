const museums = require('./api/controllers/museumController');
const accounts = require('./api/controllers/accountController');
const armodels = require('./api/controllers/armodelController');
const favorites = require('./api/controllers/favoriteController');
const targets = require('./api/controllers/targetController');

var bodyParser = require("body-parser");
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.listen(port);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/museums', museums)
app.use('/accounts',accounts)
app.use('/armodels',armodels)
app.use('/favorites',favorites)
app.use('/targets',targets)

console.log('RESTful API server started on: ' + port);
