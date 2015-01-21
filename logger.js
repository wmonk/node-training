'use strict';

var fs = require('fs');
var path = require('path');

module.exports = (function loggerModule () {
    var pathToFile = path.join(__dirname, 'logs', 'web.txt');
    var stream = fs.createWriteStream(pathToFile);

    return function (toLog) {
        var logMessage = Date().toString();
        logMessage += ' - ';
        logMessage += toLog;

        console.log(logMessage);

        stream.write(logMessage + '\n');
    };
})();
