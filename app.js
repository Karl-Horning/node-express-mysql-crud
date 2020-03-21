const path = require('path');
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
const config = require('./config');

// App setup

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
    res.send('Home!');
});

// Run the server
app.listen(process.env.PORT || 3000, () => console.log('The server is running on port 3000'));