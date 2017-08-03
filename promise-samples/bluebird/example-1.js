/**
 * Created by dilip on 01/08/17.
 */

"use strict";

var Promise = require("bluebird");
var fs = require("fs");


Promise.delay(500).then(function() {
    return [fs.readFileSync(__dirname+"/file1.txt"),
        fs.readFileSync(__dirname+"/file2.txt")] ;
}).all().then(function([file1text, file2text]) {
    if (file1text.toString() === file2text.toString()) {
        console.log("files are equal");
    }
    else {
        console.log("files are not equal");
    }
});


/*

Promise.all([
    fs.readFileSync(__dirname+"/file1.txt"),
    fs.readFileSync(__dirname+"/file2.txt")
]).spread(function(file1text, file2text) {
    if (file1text.toString() === file2text.toString()) {
        console.log("files are equal");
    }
    else {
        console.log("files are not equal");
    }
});*/
