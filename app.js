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

// Run the server
app.listen(process.env.PORT || 3000, () => console.log('The server is running on port 3000'));