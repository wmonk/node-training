'use strict';

var express = require('express');
var app = express();

app.use(require('./logger')({
    console: true,
    file: true
}));

var homeRoutes = require('./routes/home');
var adminRoutes = require('./routes/admin');

app.use('/', homeRoutes);
app.use('/', adminRoutes);

app.listen(3000);
