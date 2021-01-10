var orm = require("../config/orm");

var burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(result){
            cb(result);
        });
    },

    post: function(cols, vals, cb){
        orm.selectAll("burger", cols, vals, function(result){
            cb(result);
        });
    },

    update: function(objColVals, condition, cb) {
        orm.selectAll("burger", objColVals, condition, function(result) {
            cb(result);
    });
    },

    delete: function(condition, cb) {
        orm.selectAll("burger", condition, function(result) {
            cb(result);
        });
    }


}

module.exports = burger;