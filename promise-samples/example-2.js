/**
 * Created by dilip on 31/07/17.
 */

"use strict";

// Promise waterfall method 1

let cleanRoom = () => {
    return new Promise((resolve,reject) => {
        let done = false;
        if(done)
            resolve('Room Cleaned');
        else
            reject('Not Cleaned');
    })
};

let removeGarbage = () => {
    return new Promise((resolve,reject) => {
        let done = false;
        if(done)
            resolve('Garbage Removed');
        else
            reject('Garbage Not Removed');
    })
};

let taskCompleted = () => {
    return new Promise((resolve,reject) => {
        let done = false;
        if(done)
            resolve('Task Completed');
        else
            reject('Task Pending');
    })
}

// method 1
cleanRoom().then(() => {
    return removeGarbage();
}).then(() => {
    return taskCompleted();
}).then(response => {
    console.log(response)
}).catch(err => {
    console.log(err);
})