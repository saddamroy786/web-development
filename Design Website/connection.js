// connection.js

var mysql = require("mysql");
var con= mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"virus"
});

module.exports = con;