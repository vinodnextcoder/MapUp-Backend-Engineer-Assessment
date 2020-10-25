var express = require('express');
var app = express();
global.__root   = __dirname + '/'; 
global.__root = __dirname + '/';
app.set('view engine', 'ejs');
app.get('/api', function (req, res) {
  res.status(200).send('API works.');
});
app.get('/', function (req, res) {
  // res.status(200).send('API works.');
  res.render('demo'); 
});
var AuthController = require(__root + 'auth/AuthController');
app.use('/api/auth', AuthController);
module.exports = app;