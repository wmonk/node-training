'use strict';

var express = require('express');
var logger = require('./logger');

var app = express();

app.use(function (req, res, next) {
    logger(req.url);

    next();
});

app.get('*', function (req, res) {
    res.send(JSON.stringify(req.query));
});

app.listen(3000);
