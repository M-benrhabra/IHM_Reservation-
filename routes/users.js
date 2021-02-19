const express = require('express');
const router = express.Router();
const sequelizeDb = require('../config/database');
const User = require('../models/User');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// Get Ticket 
// router.get('/', (req, res) =>
// User.findAll()
//     .then(users => res.render('users', {
//         users
//     }))
//     .catch(err => res.render('error', { error: err })
//     ));
router.get('/register', (req, res) => {
    res.render('views');
});
// router.get('/', (req, res) => {
//     res.render('register');
// });

router.post('/add', (req, res) => {
    let { FName, LName, Contact, Email, Password } = req.body;

    // Insert into table
    User.create({
        firstName: FName,
        lastName: LName,
        contact: Contact,
        email: Email,
        password: Password
    })
        .then(user => res.redirect('register'))
        .catch(err => res.render('error', { error: err.message }))
});

module.exports = router; 