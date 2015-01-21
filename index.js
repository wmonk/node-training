'use strict';

var http = require('http');
var logger = require('./logger');

http.createServer(function (req, res) {
    logger('Request made to ' + req.url);

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('OK');
}).listen(3000);
