/**
 * Created by dilip on 02/08/17.
 */

"use strict";

var callbackBasedFunction = (callback) => {

    setTimeout(() => {
        callback(null, {output:"result"})
    },50)
};

var Q = require("q");

var promiseBasedFunction = Q.denodeify(callbackBasedFunction);

promiseBasedFunction()
    .then((result) => {
        console.log(result);
    })