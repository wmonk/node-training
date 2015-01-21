'use strict';

var express = require('express');
var router = express.Router();
var admin = require('../controllers/admin');

function isAuthenticated (req, res, next) {
    if (req.query.auth === 'true') {
        return next();
    }

    res.redirect('/');
}

router.get('/admin', isAuthenticated, admin.index);

module.exports = router;
