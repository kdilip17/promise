/**
 * Created by dilip on 29/07/17.
 */

"use strict";

let asyncFn = x => {
    console.log("async ",x);
    if(x<10){
        process.nextTick(() => {
            asyncFn(x+1);
        })
    }
}

console.log("===== start =======");

asyncFn(1);

console.log("===== start =======");