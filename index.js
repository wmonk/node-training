'use strict';

var express = require('express');
var app = express();

app.use(require('./logger')({
    console: process.env.NODE_ENV === 'dev',
    file: process.env.NODE_ENV === 'dev'
}));

var homeRoutes = require('./routes/home');
var adminRoutes = require('./routes/admin');

app.use('/', homeRoutes);
app.use('/', adminRoutes);

app.listen(3000);

module.exports = app;
