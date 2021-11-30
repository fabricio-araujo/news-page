var mysql = require('mysql');

var connMySQL = function() {
    console.log('DB connected');
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'F@binho33',
        database : 'portal_noticias'
    });
}

module.exports = function() {
    console.log('Autoload module is connected with DB');
    return connMySQL;
}