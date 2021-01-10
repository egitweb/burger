// Import MySQL connection.
var connection = require("../config/connection");

//Helper function for SQL syntax
function printQuestionMarks (num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
    return arr.toString();
  }
  
  function objToSql(ob) {
    var arr = [];
    for (var key in ob) {
      var value = ob[key];
      if (Object.hasOwnProperty.call(ob, key)) {
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
      }
    }
    return arr.toString();
  }
  
  var orm = {
    selectAll: function(table, cb) {
      var dbQuery = "SELECT * FROM " + table + ";";
  
      connection.query(dbQuery, function(err, res) {
        if (err) {
          throw err;
        }
        cb(res);
      });
    },
    //CREATE NEW ITEM
    create: function(table, cols, vals, cb) {
      var dbQuery =
        "INSERT INTO " +
        table +
        " (" +
        cols.toString() +
        ") " +
        "VALUES (" +
        printQuestionMarks(vals.length) +
        ") ";
  
      console.log(dbQuery);
      connection.query(dbQuery, vals, function(err, res) {
        if (err) {
          throw err;
        }
        cb(res);
      });
    },
    updateItem: function(table, objColVals, condition, cb) {
      var dbQuery =
        "UPDATE " +
        table +
        " SET " +
        objToSql(objColVals) +
        " WHERE " +
        condition;
  
      console.log(dbQuery);
  
      connection.query(dbQuery, function(err, res) {
        if (err) {
          throw err;
        }
        cb(res);
      });
    },
    deleteItem: function(table, condition, cb) {
      var dbQuery = "DELETE FROM " + table + " WHERE " + condition;
      console.log(dbQuery);
  
      connection.query(dbQuery, function(err, res) {
        if (err) {
          throw err;
        }
        cb(res);
      });
    }
  };
  module.exports = orm;
  