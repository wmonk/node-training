'use strict';

var fs = require('fs');
var path = require('path');
var chalk = require('chalk');

module.exports = function loggerModule (options) {
    var pathToFile = path.join(__dirname, 'logs', 'web.txt');
    var stream = fs.createWriteStream(pathToFile);

    return function (req, res, next) {
        var logMessage = Date().toString();
        logMessage += ' - ';
        logMessage += req.url;

        if (options.console) {
            console.log(chalk.green(Date().toString()), chalk.grey('--'), chalk.red(req.method), chalk.cyan(req.url));
        }

        if (options.file) {
            stream.write(logMessage + '\n', '', next);
            return;
        } else {
            next();
        }
    };
};
