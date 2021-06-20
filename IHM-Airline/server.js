const express = require('express');
const bodyParser = require('body-parser');
const path = require ('path');
const app = express();
const PORT = process.env.PORT || 8000;

// Database
const sequelizeDb = require('./config/database');
// Test DB
sequelizeDb.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err))

// tamplet engine 
app.set('view engine', 'ejs');
app.set('views', 'views');

const offersRoute = require('./routes/offers');
const usersRoute = require('./routes/users');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/airline', offersRoute);
app.use('/users', usersRoute);

//page 404
app.use((req, res, next) => {
    res.status(404).render('page404', { pageTitle: 'Page Not Found' });
  });

//listining on port 8000     
app.listen(PORT, err => {
    if (err) {
        return console.log("Error", err);
    }
    console.log(`listening on port ${PORT}`);
});
