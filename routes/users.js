const express = require('express');
const router = express.Router();
const sequelizeDb = require('../config/database');
const Offer = require('../models/User');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


// router.post('/add', (req, res) => {
//     let { FName, LName, Contact, Email, Password } = req.body;
//     let errors = [];
  
//     // Validate Fields
//     if(!FName) {
//       errors.push({ text: 'Please Add Your First Name' });
//     }
//     if(!LName) {
//       errors.push({ text: 'Please Add Your Last Name' });
//     }
//     if(!Contact) {
//       errors.push({ text: 'Please add a Number Phone' });
//     }
//     if(!Email) {
//       errors.push({ text: 'Please add a contact email' });
//     }
//      // Check for errors
//   if(errors.length > 0) {
//     res.render('confirm', {
//       errors,
//       title, 
//       technologies, 
//       budget, 
//       description, 
//       contact_email
//     });
//   } else {
//     if(!budget) {
//       budget = 'Unknown';
//     } else {
//       budget = `$${budget}`;
//     }

//     // Insert into table
//     User.create({
//         firstName,
//         lastName,
//         contact,
//         email,
//         password
//     })
//       .then(gig => res.redirect('/users'))
//       .catch(err => res.render('error', {error:err.message}))
//   }
// });

module.exports = router; 