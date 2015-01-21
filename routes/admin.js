'use strict';

var express = require('express');
var router = express.Router();

function isAuthenticated (req, res, next) {
    if (req.query.auth === 'true') {
        return next();
    }

    res.redirect('/');
}

router.get('/admin', isAuthenticated, function (req, res) {
    res.send('You are an admin!');
});

module.exports = router;
