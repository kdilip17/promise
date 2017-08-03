/**
 * Created by dilip on 29/07/17.
 */

"use strict";

var testFunc = {
    doSomeProcessingSteps : function (inputData) {
        if(typeof inputData != "string")
            return Promise.reject("Not A String");
        return Promise.resolve(inputData.toUpperCase());
    }
}

let doConvertAsString = inputData => {
    return Promise.resolve(parseInt(inputData));
}

testFunc.doSomeProcessingSteps("123")
    .then(doConvertAsString)
    .then(output => {
        console.log(typeof output)
    })
    .catch(err => {
        console.error(err);
    });