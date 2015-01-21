'use strict';

var express = require('express');
var logger = require('./logger');

var app = express();

app.use(function (req, res, next) {
    logger(req.url);

    next();
});

function isAuthenticated (req, res, next) {
    if (req.query.auth === 'true') {
        return next();
    }

    res.redirect('/');
}

app.get('/', function (req, res) {
    res.send('You are not logged in!');
});

app.get('/admin', isAuthenticated, function (req, res) {
    res.send('You are an admin!');
});

app.listen(3000);
