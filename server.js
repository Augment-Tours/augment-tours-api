const museums = require('./api/controllers/museumController');
const accounts = require('./api/controllers/accountController');
const armodels = require('./api/controllers/armodelController');
var cors = require('cors')

const favorites = require('./api/controllers/favoriteController');
const targets = require('./api/controllers/targetController');


const Knex = require('knex');
const {Model} = require("objection");
const knexfile = require('./knexfile');

const env = process.env.NODE_ENV || 'development';
const configOptions = knexfile[env];



const db = Knex(configOptions);

Model.knex(db)

var bodyParser = require("body-parser");
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.use(cors())

app.listen(port);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/museums', museums)
app.use('/accounts',accounts)
app.use('/armodels',armodels)
app.use('/favorites',favorites)
app.use('/targets',targets)

console.log('RESTful API server started on: ' + port);
