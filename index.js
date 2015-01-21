'use strict';

var http = require('http');
var qs = require('querystring');
var logger = require('./logger');

http.createServer(function (req, res) {
    logger('Request made to ' + req.url);

    var toSend = qs.parse(req.url.split('?')[1]);

    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(toSend));
}).listen(3000);
