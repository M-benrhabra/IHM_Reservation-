const express = require('express');
const router = express.Router();
const sequelizeDb = require('../config/database');
const User = require('../models/User');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// Get Ticket 
router.get('/', (req, res) =>
    User.findAll()
        .then(users => res.render('users', {
            users
        }))
        .catch(err => res.render('error', { error: err })
        ));

router.get('/add', (req, res) => {
    res.render('register');
});
// router.get('/', (req, res) => {
//     res.render('register');
// });

router.post('/add', (req, res) => {
    // Insert into table
    User.create({
        firstName: req.body.FName,
        lastName: req.body.LName,
        contact: req.body.Contact,
        email: req.body.Email,
        password: req.body.Password
    })
        .then(user => res.redirect('/users/add'))
        .catch(err => res.render('error', { error: err.message }))
});


module.exports = router; 