/**
 * Created by dilip on 29/07/17.
 */

"use strict";

let syncFn = x => {
    console.log("sync",x)
    if(x<10){
        syncFn(x+1);
    }
}

console.log("===== start =======");

syncFn(1);

console.log("===== start =======");