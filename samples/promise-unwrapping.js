/**
 * Created by dilip on 29/07/17.
 */

"use strict";

let _i = process.argv[2] || 7;

let promiseInPromise = x => {
    return new Promise((resolve,reject) => {
        if(!x){
            reject(new Error('NoInputDefined'));
        }
        resolve({output:x * x,input:x});
    });
};

let valueAsPromise = x => {
    if(!x){
        throw new Error('NoInputDefined');
    }
    return x * x;
};

let getNumber = (x) => {
    if(x){
        return Promise.resolve(x);
    }
    return Promise.resolve(_i);
};

getNumber(2)
    .then(promiseInPromise)
    .then((res) => {
        console.log(' promise in promise:', res.input, '^ 2 =',res.output)
    })
    .catch((err) => {
        console.log(err)
    })

getNumber()
    .then(valueAsPromise)
    .then(console.log.bind(this, ' value as promise:', _i, '^ 2 ='))
    .catch(console.error)
