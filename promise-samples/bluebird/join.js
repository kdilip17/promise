/**
 * Created by dilip on 01/08/17.
 */

"use strict";

// fixed amount of discrete promises that you want to coordinate concurrently

var extFuncs = require("./common.functions");
var Promise = require("bluebird");
var join = Promise.join;

join(extFuncs.cleanRoom(), extFuncs.removeGarbage(), extFuncs.taskCompleted(),
    function(pictures, comments, tweets) {
        console.log("in total: " + pictures.length + comments.length + tweets.length);
    });
