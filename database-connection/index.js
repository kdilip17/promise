/**
 * Created by dilip on 03/08/17.
 */

"use strict";

const casDbCli = require("./cassandra").casdbcli;

var query = {
    USER_EXIST_CHECK : "select username from username_mapping where username=?"
}

let dbConnection = (emailId) => {
    return new Promise((resolve,reject) => {
        var queryBuild = query.USER_EXIST_CHECK;
        casDbCli.execute(queryBuild, [emailId], {prepare: true}, function (err, result) {
            if (err) {
                reject(err);
            } else {
                if (result && result.rows.length > 0) {
                    reject("User Not Exist")
                }else{
                    resolve(true);
                }
            }
        })
    })
}

dbConnection("dilipkumar1@hakunamatata.in").then(function (query) {
    console.log(query);
}).catch(err => {
    console.log(err)
})