const Sequelize = require('sequelize');
const sequelizeDb = require('../config/database');

const User = sequelizeDb.define('user', {
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    },
    contact: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.INTEGER
    }
  });
  
  User.sync().then(() => {
    console.log('table created');
  });
 
  

  module.exports = User;