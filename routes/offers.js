const express = require('express');
const router = express.Router();
const sequelizeDb = require('../config/database');
const Offer = require('../models/Offer');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// Get gig list
router.get('/', (req, res) =>
    Offer.findAll()
        .then(offers => res.render('offers', {
            offers
        }))
        .catch(err => res.render('error', { error: err })));



//Add offer
// router.get('/add', (req, res) => {
//     const data = {
//         airline: "Arabiya",
//         lieu_depart: "Marrakech",
//         lieu_d_arriver: "Tanger",
//         date: new Date(01/04/2021),
//         nomber_de_place: 20,
//     }

//     let { airline, lieu_depart, lieu_d_arriver, date, nomber_de_place } = data;

//     // insert into table
//     Offer.create({
//         airline,
//         lieu_depart,
//         lieu_d_arriver,
//         date,
//         nomber_de_place
//     })
//         .then(offer => res.redirect('/offers'))
//         .catch(err => console.log(err));
// });

// Search for gigs
router.get('/search', (req, res) => {
    let { LieuDepart, LieuArriver, SDate } = req.query;

    // Make lowercase
    // term = term.toLowerCase();

    Offer.findAll({
        where:
            { lieu_depart: { [Op.like]: '%' + LieuDepart + '%' }, lieu_d_arriver: { [Op.like]: '%' + LieuArriver + '%' } },

    })
        .then(offers => res.render('vols', { offers }))
        .catch(err => res.render('error', { error: err }));

});

module.exports = router; 