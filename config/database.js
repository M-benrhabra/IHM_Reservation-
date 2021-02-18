
const Sequelize = require('sequelize');
const mysql = require('mysql2');
module.exports = new Sequelize('ihm_reservation', 'root', '', {
    host: 'localhost',
    dialect:'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
  });