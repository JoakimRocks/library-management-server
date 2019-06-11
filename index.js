const express = require("express");
const app = express();
const mysql = require("mysql");
const pool = mysql.createPool({

    host: "localhost",
    user: "joakim",
    password: "password",
    database: "library"
})

// app.get("/", function(req, res) {
//     //logic

//     res.json({ message: "Hello Joakim" });


// })
app.get("/api/students", (req, res) => {
    pool.query("SELECT address, firstname FROM students", (error, rows) => {
        if (error) {
            return res.status(500).json({ error });
        
        }

        res.json(rows);
    });

});
app.listen(9000, function() {

    console.log("app listening to port 9000");

});