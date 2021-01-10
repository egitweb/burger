var orm = require("../config/orm.js");
var burger = {
  selectAll: function(cb) {
    orm.selectAll("burger", function(res) {
      cb(res);
    });
  },

  //Create new Item
  create: function(cols, vals, cb) {
    orm.create("burger", cols, vals, function(res) {
      cb(res);
    });
  },

  //Update Item
  updateItem: function(objColVals, condition, cb) {
    orm.updateItem("burger", objColVals, condition, function(res) {
      cb(res);
    });
  },

  //Detele Item
  deleteItem: function(condition, cb) {
    orm.deleteItem("burger", condition, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;
