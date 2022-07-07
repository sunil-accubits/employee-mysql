const express = require('express');
const app = express();
require('dotenv').config();

employerRoutes =require("./src/routes/employer");

const db = require('./src/config/db.config');
db.authenticate().then(() => {
    console.log('Database connected...');
}).catch(err => {
    console.log('Error in connecting to database : ' + err);
})
//MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//TEST API
app.get("/api", (req, res) => {
    res.json({ message: "Test API is Working" });
  });

app.use("/api", employerRoutes);

db.sync({alter:true});
module.exports =  app;