/**
 * Created by dilip on 01/08/17.
 */

"use strict";

var external = {};

external.cleanRoom = () => {
    return new Promise((resolve,reject) => {
        /*setTimeout(() => {
         let done = true;
         if(done)
         resolve('Room Cleaned');
         else
         reject('Room Not Cleaned');
         },1000)*/
        let done = true;
        if(done)
            resolve('Room Cleaned');
        else
            reject('Room Not Cleaned');
    })
};

external.removeGarbage = () => {
    return new Promise((resolve,reject) => {
        let done = true;
        if(done)
            resolve('Garbage Removed');
        else
            reject('Garbage Not Removed');
    })
};

external.taskCompleted = () => {
    return new Promise((resolve,reject) => {
        let done = true;
        if(done)
            resolve('Task Completed');
        else
            reject('Task Pending');
    })
}

module.exports = external;