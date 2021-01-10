var connection = require("../config/connection");


function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
    return arr.toString();
  }


// Helper function to convert object key/value pairs to SQL syntax
function objToSql(obj) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in obj) {
      var value = obj[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(obj, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }

        arr.push(key + "=" + value);
      }
      return arr.toString();
    }
  
  


// Object for all our SQL statement functions.
var orm = {
    selectAll: function(table, cb) {
        var dbQuery = "SELECT * FROM " + table + ";";

        connection.query(dbQuery, function(err, result){
            if(err){
                throw err;
            }
            cb(result);
        });
    },
 
    //POST
    POST: function(table, cols, vals, cb){
        var dbQuery = "INSERT INTO " +
        table +
        " (" +
        cols.toString() +
        " )" +
        "VALUES (" +
        printQuestionMarks(vals.lenght)+
        ") ";

        console.log(dbQuery);
        connection.query(dbQuery, vals, function(err, result) {
            if(err) {
                throw err;
            }
            cb(result);
        });
    },

    //Update
    UPDATE: function(table, objColVals, condition, cb){
        var dvQuery = 
        "UPDATE " +
        table + 
        "SET" + 
        objToSql(objColVals) +
        "WHERE" + 
        condition;

        console.log(dbQuery);
        connection.query(dbQuery, vals, function(err, result) {
            if(err) {
                throw err;
            }
            cb(result);
        });
    },

    //DELETE
    DELETE: function(table, condition, cb){
        var dbQuery = 
        "DELETE FROM " +
        table +
        "WHERE " +
        condition;

        console.log(dbQuery);
        connection.query(dbQuery, vals, function(err, result) {
            if(err) {
                throw err;
            }
            cb(result);
        });
    }

}

};