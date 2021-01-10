var express = require("express");
var burger = require("../models/burger");

var router = express.Router();

//GET router setup
router.get("/",function(req, result){
    burger.selectAll(function(data) {
        var hdbrsObj = {
            burger: data
        };
        console.log(hdbrsObj);
        result.render("index",hdbrsObj);
    });

    //POST router setup
    router.post("/api/burger", function(req, result){
        burger.POST(
            ["burger_name", "devoured"],
            [req.body.burger_name, req.body.devoured],
            function(result){
                result.json({id: result.insertId });
            }
        );
    });

    //UPDATE router setup
    router.put("/api/burgers/:id", function(req, res){
        var condition = "id = " + req.params.id;

        console.log("condition", condition);
        burger.UPDATE({ 
            devoured: req.body.devoured 
        }, condition, function(result){
            if ((result, changesRows === 0)){
                return res.status(404).end();
            }else{
                res.status(200).end();
            }
        });
    });

    router.delete(condition, function(req, result){
        var condition = "id = " + req.params.id;
        console.log("condition", condition);

        burger.DELETE(condition, function(result){
            if ((result, changesRows === 0)){
                return res.status(404).end();
            }else{
                res.status(200).end();
            }
        });
    });

});

module.exports = router; 