"use strict";

var express = require('express');

var app = express();

var mongoose = require('mongoose');

var stuffRoutes = require('./routes/stuff');

var userRoutes = require('./routes/user');

var path = require('path');

app.use(express.json());
app.use('/api/stuff', stuffRoutes);
app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);
app.use('/images', express["static"](path.join(__dirname, 'images')));
mongoose.connect('mongodb+srv://user1000:test1000@cluster0.8zfqm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  return console.log('Successfully connected to mongodb !');
})["catch"](function (err) {
  return console.log("Connectionn to mongodb failed : ".concat(err.message, " !"));
});
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});
module.exports = app;