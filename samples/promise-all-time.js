/**
 * Created by dilip on 29/07/17.
 */

"use strict";

const uuid = require('uuid');


// syncronus
function generateIdSync() {
    return uuid.v4();
}

try {
    let widgetId = generateIdSync();
    console.log(`Created Widget 0 : ${widgetId} (sync)`);
}catch (err){
    console.error(err);
}

// callback
function generateIdCallback(callback) {
    try {
        callback(undefined,uuid.v4());
    } catch (err) {
        callback(err);
    }
}

generateIdCallback(function (err, widgetId) {
    if(err) {
        return console.error(err);
    }
    console.log(`Created Widget 1 : ${widgetId} (callback)`);
})

// promise
function generateIdPromise() {
    return Promise.resolve(uuid.v4());
}

generateIdPromise()
    .then(widgetId => {
        console.log(`Created Widget 2 : ${widgetId} (promise)`);
    })
    .catch(console.error)







