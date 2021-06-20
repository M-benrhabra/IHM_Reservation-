const Sequelize = require('sequelize');
const mysql = require('mysql2');
module.exports = new Sequelize('ihm-airline', 'root', '', {
    host: 'localhost',
    dialect:'mysql',
    
  });