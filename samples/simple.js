/**
 * Created by dilip on 21/04/17.
 */

"use strict";

var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

var port = process.env.PORT || 8007 ;

app.listen(port);

app.get("/",function (req,res) {
    res.send("Hello");
});

app.post('/api/users',function (req,res) {
    console.log(req.body);
    res.send({res:req.body})
})

console.log("app is listening to http://localhost:"+port)