require('dotenv').config()
const express = require('express')
const app = express()
const mysql = require('mysql')
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
})

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/api/students', (req, res) => {
    pool.query('SELECT address, firstname FROM students', (error, rows) => {
        if (error) {
            return res.status(500).json({ error })
        }

        res.json(rows)
    })
})
app.get('/api/books', (req, res) => {
    pool.query('SELECT author, title FROM books', (error, rows) => {
        if (error) {
            return res.status(500).json({ error })
        }
        res.json(rows)
    })
})
app.post('/api/students', (req, res) => {
    const students = req.body

    if (!students.reg_no || !students.phone_number || !students.address || !students.firstname ||
        !students.lastname ||
        !students.department || !students.course || !students.student_id) {
        return res.status(400).json({ error: 'Invalid payload' })
    }

    pool.query(
        'INSERT INTO students (reg_no,phone_number,address,firstname,lastname,department,course,student_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [students.reg_no, students.phone_number, students.address, students.firstname, students.lastname, students.department, students.course, students.student_id],
        (error, results) => {
            if (error) {
                return res.status(500).json({ error })
            }

            res.json(results.insertId)
        }
    )
})
app.post('/api/books', (req, res) => {
    const books = req.body

    if (!books.title || books.author || books.book_id) {
        return res.status(400).json({ error: 'Invalid payload' })
    }

    pool.query(
        'INSERT INTO books (title, author,book_id) VALUES (?, ?, ?)', [books.title, books.author, books.book_id],
        (error, results) => {
            if (error) {
                return res.status(500).json({ error })
            }

            res.json(results.insertId)
        }
    )
})
app.put("/api/students/:reg_no", (req, res) => {
    const students = req.body;

    if (!!students.reg_no || !students.phone_number || !students.address || !students.firstname ||
        !students.lastname ||
        !students.department || !students.course || !students.student_id) {
        return res.status(400).json({ error: "Invalid payload" });
    }

    pool.query(
        "UPDATE students SET (reg_no,phone_number,address,firstname,lastname,department,course,student_id = ?,?,?,?,?,?,?,?) WHERE reg_no = ?", [students.reg_no, req.params.reg_no],
        (error, results) => {
            if (error) {
                return res.status(500).json({ error });
            }

            res.json(results.changedRows);
        }
    )
})
app.put("/api/books/:title", (req, res) => {
    const books = req.body;

    if (!books.title || books.author || books.book_id) {
        return res.status(400).json({ error: "Invalid payload" });
    }

    pool.query(
        "UPDATE books SET ( title, author,book_id= ?,?,?) WHERE author = ?", [books.title, req.params.title],
        (error, results) => {
            if (error) {
                return res.status(500).json({ error });
            }

            res.json(results.changedRows);
        }
    )
})
app.delete("/api/students/:reg_no", (req, res) => {
    pool.query(
        "DELETE FROM students WHERE reg_no = ?", [req.params.reg_no],
        (error, results) => {
            if (error) {
                return res.status(500).json({ error });
            }

            res.json(results.affectedRows);
        }
    )
})
app.delete("/api/books/:title", (req, res) => {
    pool.query(
        "DELETE FROM books WHERE title= ?", [req.params.title],
        (error, results) => {
            if (error) {
                return res.status(500).json({ error });
            }

            res.json(results.affectedRows);
        }
    )
})

app.listen(9000, function() {
    console.log('app listening to port 9000')
})