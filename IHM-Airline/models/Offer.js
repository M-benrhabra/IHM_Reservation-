const Sequelize = require('sequelize');
const sequelizeDb = require('../config/database');

const Offer = sequelizeDb.define('offer', {
    airline: {
      type: Sequelize.STRING
    },
    lieu_depart: {
      type: Sequelize.STRING
    },
    lieu_d_arriver: {
      type: Sequelize.STRING
    },
    date: {
      type: Sequelize.DATE
    },
    nomber_de_place: {
      type: Sequelize.INTEGER
    }
  });
  
//   Offer.sync().then(() => {
//     console.log('table created');
//   });
 
  

  module.exports = Offer;