$(function() {
     $(".create-form").on("submit", function(event){
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $("#newburger").val().trim(),
            devoured: 0
        };

        // Send the POST request.
        $.ajax("api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function(){
            console.log("Added new burger");
            location.reload();
        });
    });


    $(".eatburger").on("click", function(event){
        event.preventDefault();

        var id = $(this).data("id");
        var devouredState = {
            devoured: 1
        };

        $.ajax("/api/burgers/"+id,{
            type: "UPDATE",
            data: devouredState
        }).then(function(){
            console.log("burger devoured");
            location.reload();
        });
    });

    $(".deleteburger").on("click", function(event){
        event.preventDefault();

        var id = $(this).data("id");

        //Delete Request
        $.ajax({
            type: "DELETE",
            url: "/api/burgers/" + id
        }).then(location.reload());
    });

});