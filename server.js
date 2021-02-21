const createError = require('http-errors');
const express = require('express');
const bodyParser = require('body-parser');
const mysql2 = require('mysql2');
const path = require('path');
const app = express();
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Database
const sequelizeDb = require('./config/database');
// Test DB
sequelizeDb.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err))

// app.get("/", (req, res) =>
//     res.send("Welcome.")
// // );
app.use(express.urlencoded({ extended: false }));

app.use(express.json())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

app.use(express.static("public"));

app.get('/', function (req, res) {
    res.render('index1');
});



// Offers routes
app.use('/offers', require('./routes/offers'));
// Users routes
app.use('/users', require('./routes/users'));

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

module.exports = app;


