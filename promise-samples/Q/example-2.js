/**
 * Created by dilip on 02/08/17.
 */

"use strict";

/*var promisedStep0 = new Promise(function (resolve,reject) {
    let output = true;
    if(output)
        return Promise.resolve('response0')
    else
        reject('error0')
})*/

var promisedStep1 = () => {
    return Promise.resolve('response1');
}
var promisedStep2 = () => {
    return Promise.resolve('response2');
}
var promisedStep3 = () => {
    return Promise.resolve('response3');
}
var promisedStep4 = () => {
    return Promise.resolve('response4');
}

/*step1(function (value1) {
    step2(value1, function(value2) {
        step3(value2, function(value3) {
            step4(value3, function(value4) {
                // Do something with value4
            });
        });
    });
});*/

var Q = require("q");

Q.fcall(promisedStep1)
    .then(promisedStep2)
    .then(promisedStep3)
    .then(promisedStep4)
    .then(function (value) {
        console.log(value);
    })
    .catch(function (error) {
        console.log(error);
    })
    .done(function () {
        console.log('done finally')
    });