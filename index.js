'use strict';

var express = require('express');

var app = express();

app.get('*', function (req, res) {
    res.send(JSON.stringify(req.query));
});

app.listen(3000);
