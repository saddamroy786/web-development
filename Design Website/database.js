// connection.js
const mysql = require("mysql");
var connection= mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"virus"
});

connection.connect(function(error){
    if(error)
    {
        throw error;
    }
    else
    {
        console.log('mysql database is connected successfullt');
    }
});

module.exports = connection;