
const Offer = require('../models/Offer');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


exports.getIndex = (req, res) => {
    res.render('index',{
        pageTitle: 'Home',
        path: '/airline/index'
    });
};

exports.getOffers = (req, res) => {
    let { LieuDepart, LieuArriver, SDate } = req.query;

    // Make lowercase
    // term = term.toLowerCase();

    Offer.findAll({
        where:
            { lieu_depart: { [Op.like]: '%' + LieuDepart + '%' }, lieu_d_arriver: { [Op.like]: '%' + LieuArriver + '%' } },

    })
    .then(offers => {
        res.render('offers', {
          offs: offers,
          pageTitle: 'All Offers',
          path: '/airline/offers'
          
        });
      })
      .catch(err => {
        console.log(err);
      });
   
};