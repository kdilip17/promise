/**
 * Created by dilip on 29/07/17.
 */

"use strict";

// prototypal inheritance in javascript
///////////////////////////////////////

// prototypes are usually called classes
// object that extends classes are called instances
// class that extends another class is called subclasses
// creating an instance is called instantiation
// instances are about data
// prototypes are about methods
// if assingned value directly we are exposing the prototype outside -- so have to use constructor
// _val common convention this property private;

var answer = {
    constructor: function func0(value) {
      this._val = value;
    },
    get : function func1() {
        return this._val;
    }
}

var firstExtend = Object.create(answer);
// firstExtend.val = 32;
firstExtend.constructor(32)
var output = firstExtend.get();

console.log(output);

var secondExtend = Object.create(answer);
secondExtend.get = function func2() {
    return answer.get.call(this) + " !!"
}

secondExtend.constructor(32)
var output = secondExtend.get();

console.log(output);

