/**
 * Created by dilip on 31/07/17.
 */

"use strict";

// Basic Promise

let newPromiseFunc = new Promise(function (resolve,reject) {
    let clean = true ;
    if(clean){
        resolve('clean')
    }else{
        reject('not clean')
    }
});
let newPromiseFunc1 = new Promise(function (resolve,reject) {
    let clean = true ;
    if(clean){
        resolve('clean1')
    }else{
        reject('not clean1')
    }
});

newPromiseFunc
    .then(newPromiseFunc1)
    .then((response) =>{
        console.log(response)
    }).catch(fromReject => {
        console.log(fromReject)
    })