/**
 * Created by dilip on 29/07/17.
 */

"use strict";

let delayedResponse = ms => {
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,ms);
    })
}

let someFn = () => {
    console.log("======");
    return delayedResponse(500);
}

let secondFn = () => {
    console.log("======2");
    return delayedResponse(5000);
}

let processSync = res => {
    console.log("Process");
    someFn()
        .then(secondFn)
        .then(() => {
            console.log("done")
        })
        .then(() => {
            console.log("done2")
        })
        .catch(console.error)
}

processSync(function (err,res) {
    console.log("ssss")
})