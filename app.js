const path = require('path');
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
const config = require('./config');

// Set the views file
app.set('views', path.join(__dirname, 'views'));

// App setup
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Database connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: config.DB_USER,
    password: config.DB_PASSWORD,
    database: 'node_crud'
});

connection.connect((error) => {
    if (!!error) {
        console.log(error);
    } else {
        console.log('Database connected!');
    }
});


// Routes
app.get('/', (req, res) => {
    let sql = 'SELECT * FROM users';
    let query = connection.query(sql, (err, rows) => {

        if (err) throw err;

        res.render(
            'user_index', {
            title: 'CRUD using Node.js, Express, and MySQL',
            users: rows
        });
    });
});

// Create
app.get('/add', (req, res) => {
    res.render(
        'user_add', {
        title: 'Add a User'
    });
});

app.post('/save', (req, res) => {
    let data = {
        name: req.body.name,
        email: req.body.email,
        phone_no: req.body.phone
    };
    let sql = 'INSERT INTO users SET ?';
    let query = connection.query(sql, data, (err, result) => {

        if (err) throw err;

        res.redirect('/');
    });
});

// Update
app.get('/edit/:userId', (req, res) => {
    const userId = req.params.userId;
    let sql = `SELECT * FROM users WHERE id = ${userId}`;
    let query = connection.query(sql, (err, result) => {

        if (err) throw err;

        res.render(
            'user_edit', {
            title: 'Edit a User',
            user: result[0]
        });
    });
});


app.post('/update', (req, res) => {
    const userId = req.body.id;
    let sql = `UPDATE users SET name = '${req.body.name}', email = '${req.body.email}', phone_no = '${req.body.phone}' WHERE ID = ${req.body.id};`;
    let query = connection.query(sql, (err, result) => {

        if (err) throw err;

        res.redirect('/');
    });
});

// Delete
app.get('/delete/:userId', (req, res) => {
    const userId = req.params.userId;
    let sql = `DELETE FROM users WHERE id = ${userId}`;
    let query = connection.query(sql, (err, result) => {

        if (err) throw err;

        res.redirect('/');
    });
});

// Run the server
app.listen(process.env.PORT || 3000, () => console.log('The server is running on port 3000'));