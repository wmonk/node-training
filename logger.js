'use strict';

var fs = require('fs');
var path = require('path');
var chalk = require('chalk');
var moment = require('moment');

module.exports = function loggerModule (options) {
    var pathToFile = path.join(__dirname, 'logs', 'web.txt');
    var stream = fs.createWriteStream(pathToFile);

    return function (req, res, next) {
        var date = moment().format('HH:mm:ss D-MM-YYYY');
        var logMessage = date;
        logMessage += ' -- ';
        logMessage += req.method;
        logMessage += ' - ';
        logMessage += req.url;

        if (options.console) {
            console.log(chalk.green(date), chalk.grey('--'), chalk.red(req.method), chalk.grey('-'), chalk.cyan(req.url));
        }

        if (options.file) {
            stream.write(logMessage + '\n', '', next);
            return;
        } else {
            next();
        }
    };
};
