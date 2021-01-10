var mysql = require("mysql");

//Connect mysql
connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345678",
    database: "burger_db"
});

connection.connect(function(err){
    if (err){
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;