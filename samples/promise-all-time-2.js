/**
 * Created by dilip on 29/07/17.
 */

"use strict";

const db = {
    query : (sql,params,callback) => {
        let result = [{
            numMatches : 0
        }];
        if(!callback){
            return Promise.resolve(result)
        }
        return callback(undefined,result);
    }
}

const uuid = require("uuid");

// callback

function checkUniqueCallback(id,callback) {
    db.query('select count(1) as numMatches from someTable where id = ?',id,function (err,rows) {
        if(rows[0].numMatches===0){
            return callback(undefined,id);
        }
        callback(new Error('GenerateDuplicateId'));
    })
}

function generateIdCallback(callback) {
    try {
        let id = uuid.v4();
        checkUniqueCallback(id,function (err,id) {
            if(err){
                generateIdCallback(callback);
            }
            callback(undefined,id);
        });
    } catch (err) {
        callback(err);
    }
}

// calling callback fn

generateIdCallback(function (err,widgetId) {
    if(err){
        return console.error(err);
    }
    console.log(`Created Widget: ${widgetId} (callback)`)
})


// promise implementation

function checkUniquePromese(id) {
    return db.query('select count(1) as numMatches from someTable where id = ?',id)
        .then(rows => {
            if(rows[0].numMatches===0){
                return id;
            }
            throw new Error('GenerateDuplicateId');
        })
}

function generateIdPromise() {
    let id = uuid.v4();
    return checkUniquePromese(id)
        .catch(err => {
            if(err.msg === 'GenerateDuplicateId') {
                return generateIdPromise();
            }
            throw err;
        })
}

generateIdPromise()
    .then(widgetId => {
        console.log(`Created Widget: ${widgetId} (promise)`)
    })
    .catch(console.error)