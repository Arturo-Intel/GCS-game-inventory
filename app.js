require('dotenv').config({ path: '.env.dev' });
console.log(">>>>>>>" + process.env.NODE_ENV);
if (process.env.NODE_ENV !== 'production') {
    require("dotenv").config();
}
var express = require('express');
var logger = require('morgan');

var indexRouter = require('./routes/index');

// initialize express
var app = express();

app.use(logger('dev'));
app.use('/', indexRouter);

module.exports = app;