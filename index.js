const express = require("express");
const app = express();

app.get("/", function(req, res) {
    //logic

    res.json({ message: "Hello Joakim" });


})

app.listen(9000, function() {

    console.log("app listening to port 9000");

});