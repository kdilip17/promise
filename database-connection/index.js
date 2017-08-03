/**
 * Created by dilip on 03/08/17.
 */

"use strict";

const casDbCli = require("./cassandra").casdbcli;

var query = {
    USER_EXIST_CHECK : "select username from username_mapping where username=?"
}

let getResult = function (queryBuild,emailId,callback) {
    casDbCli.execute(queryBuild, [emailId], {prepare: true}, function (err, result) {
        if (err) {
            return callback(err);
        } else {
            if (result && result.rows.length > 0) {
                return callback("User Not Exist")
            }else{
                return callback(true);
            }
        }
    })
}

let dbConnection = (emailId) => {
    return new Promise((resolve,reject) => {
        var queryBuild = query.USER_EXIST_CHECK;
        getResult(queryBuild,emailId,function (err,res) {
            if(err){
                reject(err);
            }else{
                resolve(res);
            }
        })
    })
}

dbConnection("dilipkumar@hakunamatata.in").then(function (query) {
    console.log(query);
}).catch(err => {
    console.log(err)
})