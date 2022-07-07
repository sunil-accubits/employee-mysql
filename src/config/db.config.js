const Sequelize  = require('sequelize');
require("dotenv").config();

const db = new Sequelize(
  process.env.DATABASE,
  process.env.USER,
  process.env.PASSWORD,
  
  {
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    pool: {
      max: 5, //maximum no of connection in pool
      min: 0, //minimum no of connection in pool
      acquire: 30000, //maximum time, in milliseconds, that pool will try to get connection before throwing error
      idle: 10000, //maximum time, in milliseconds, that a connection can be idle before being released
    },
  }
);
module.exports = db