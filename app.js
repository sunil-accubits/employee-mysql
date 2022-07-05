const express = require('express');
const Sequelize = require('sequelize');
const app = express();
const cors = require('cors');
const dotEnv= require('dotenv').config();
const config = require('./src/config/db.config');

employerRoutes =require("./src/routes/employer");

//MIDDLEWARE
app.use(express.json());
app.use(cors);
app.use(express.urlencoded({ extended: true }));

//DATABASE CONNECTION
const db = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
        host: config.host,
        dialect: config.dialect,
        operatorAliases: false,
        pool:{
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        }
    }
);
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.authenticate().then(() => {
  console.log('Connection established successfully.');
}).catch(err => {
  console.error('Unable to connect to the database:', err);
}).finally(() => {
  db.close();
});

db.sync({ alter: true});

app.use("/api",employerRoutes);

//module.exports = db;
module.exports = {app, db};