/**
 * Created by dilip on 31/07/17.
 */

"use strict";

// Promise waterfall method 2

let cleanRoom = () => {
    return new Promise((resolve,reject) => {
        let done = true;
        if(done)
            resolve('Room Cleaned');
        else
            reject('Room Not Cleaned');
    })
};

let removeGarbage = (prevResult) => {
    return new Promise((resolve,reject) => {
        console.log(prevResult,"====");
        let done = true;
        if(done)
            resolve(prevResult + ' Garbage Removed');
        else
            reject('Garbage Not Removed');
    })
};

let taskCompleted = (prevResult) => {
    return new Promise((resolve,reject) => {
        let done = true;
        if(done)
            resolve(prevResult + ' Task Completed');
        else
            reject('Task Pending');
    })
}

cleanRoom()
    .then(removeGarbage)
    .then(taskCompleted)
    .then(response => {
        console.log(response)
    }).catch(err => {
        console.log(err);
    })