var mysql = require('mysql');

var conne = mysql.createConnection({
    host     : "localhost",
    port: "3306",
    user     : "root",
    password : "mysql",
    database : "pedidotest"
});

module.exports = conne;