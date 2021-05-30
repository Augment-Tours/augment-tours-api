const museums = require('./api/controllers/museumController');
const accounts = require('./api/controllers/accountController');
const armodels = require('./api/controllers/armodelController');
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.listen(port);
app.use('/museums', museums)
app.use('/accounts',accounts)
app.use('/armodels',armodels)

console.log('RESTful API server started on: ' + port);
