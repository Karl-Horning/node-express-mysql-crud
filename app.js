const path = require('path');
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();

// App setup

// Routes
app.get('/', (req, res) => {
    res.send('Home!');
});

// Run the server
app.listen(process.env.PORT || 3000, () => console.log('The server is running on port 3000'));