/**
 * Created by dilip on 31/07/17.
 */

"use strict";

var fs = require('fs')

module.exports = function (uri) {
    return new Promise(function (resolve, reject) {
        fs.readFile(uri, (err, data) => {
            if (err) return reject(err);
            resolve(data)
        });
    })
}