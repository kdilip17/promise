/**
 * Created by dilip on 31/07/17.
 */

"use strict";

var reader = require('./read.js');

var promise = reader('names1.txt');

/*return reader("file1.txt").then((bears) => {
    console.log(bears.toString())
})*/

promise
    .then(function (bears) {
        console.log(bears.toString())
        return reader('types.txt')
    }).then((fish) => {
        console.log(fish.toString())
        return reader('types.txt')
    }).then((fish) => {
        console.log(fish.toString())
    }).catch(function (err) {
        console.error('WE GOT ERROR', err)
    })
