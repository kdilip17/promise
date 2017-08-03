/**
 * Created by dilip on 02/08/17.
 */

"use strict";

var Promise = require("bluebird");
var fs = Promise.promisifyAll(require('fs'));

var inputFile = 'input.txt';
var outputFile = 'output.txt';

var process1 = new Promise(function (resolve,reject) {
    resolve(true)
})

fs.readFileAsync(inputFile)
    .then(Promise.promisify(process1))
    .then(Promise.promisify(process2))
    .then(Promise.promisify(process3))
    .then(fs.writeFileAsync.bind(fs, outputFile))
    .then(function(data) {
        res.status(200).send('processed successfully using bluebird promises');
    })
    .catch(function(err) {
        res.status(500).send(err);
    });