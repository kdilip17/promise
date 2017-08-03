/**
 * Created by dilip on 31/07/17.
 */

"use strict";

// Promise Race


let cleanRoom = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            let done = true;
            if(done)
                resolve('Room Cleaned');
            else
                reject('Room Not Cleaned');
        },1000)
        /*let done = true;
        if(done)
            resolve('Room Cleaned');
        else
            reject('Room Not Cleaned');*/
    })
};

let removeGarbage = () => {
    return new Promise((resolve,reject) => {
        let done = true;
        if(done)
            resolve('Garbage Removed');
        else
            reject('Garbage Not Removed');
    })
};

let taskCompleted = () => {
    return new Promise((resolve,reject) => {
        let done = true;
        if(done)
            resolve('Task Completed');
        else
            reject('Task Pending');
    })
}

let tasks = [
    cleanRoom(),removeGarbage(),taskCompleted()
];

Promise.race(tasks)
    .then(result => {
        console.log(result)
    })
    .catch(err => {
        console.log(err)
    })