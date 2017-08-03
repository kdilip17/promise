/**
 * Created by dilip on 03/08/17.
 */

"use strict";

var casDriv = require('cassandra-driver');

var casdbcli= new casDriv.Client({
    contactPoints:['db.colleago.com.au'],
    keyspace:'colleago_dev'
});

module.exports.casdbcli = casdbcli;