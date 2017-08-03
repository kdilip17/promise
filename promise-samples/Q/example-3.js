/**
 * Created by dilip on 02/08/17.
 */

"use strict";

var Q = require("q");

var sum = function (num,callback) {
    var num1=0;
    if(!num1) {
        console.log("dd")
        num1 = num ? num : 0;
    }
    console.log(num1);
    callback(null,num)
}

var promisedSum = Q.denodeify(sum);

var promises = [1,2,3,4,5].map(function (num) {
    return promisedSum(num);
})

Q.all(promises).then(function (result) {
    console.log(result);
})