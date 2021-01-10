var express = require("express");
var burger = require("../models/burger");

var router = express.Router();

//GET router setup
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var hdbrsObj = {
        burgers: data
      };
      console.log(hdbrsObj);
      res.render("index", hdbrsObj);
    });
  
    //POST router setup
    router.post("/api/burgers", function(req, res) {
      burger.create(
        ["burger_name", "devoured"],
        [req.body.burger_name, req.body.devoured],
        function(result) {
          // Send back the ID of new burger
          res.json({ id: result.insertId });
        }
      );
    });
    
    //UPDATE router setup
    router.put("/api/burgers/:id", function(req, res) {
      var condition = "id = " + req.params.id;
  
      console.log("condition", condition);
      burger.updateItem({ devoured: req.body.devoured }, condition, function(
        result
      ) {
        if (result.changedRows === 0) {
          return res.status(404).end();
        } else {
          res.status(200).end();
        }
      });
    });

    //DELETE router setup
    router.delete("/api/burgers/:id", function(req, res) {
      var condition = "id = " + req.params.id;
      console.log("condition", condition);
  
      burger.deleteItem(condition, function(result) {
        if (result.changedRows === 0) {
          return res.status(404).end();
        } else {
          res.status(200).end();
        }
      });
    });
  });
  
  module.exports = router;