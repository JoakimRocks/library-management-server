require("dotenv").config();
const express = require("express");
const app = express();
const mysql = require("mysql");
const pool = mysql.createPool({

    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
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
app.get("/api/books", (req, res) => {
    pool.query("SELECT author, title FROM books", (error, rows) => {
        if (error) {
            return res.status(500).json({ error });

        }
        res.json(rows);
    });
});

app.listen(9000, function() {

    console.log("app listening to port 9000");

});