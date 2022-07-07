/* const Sequelize = require("sequelize");
const db = require('../config/db.config');
const employee = require("./employee");
//console.log(db);
const employer = db.define(
  "employer",
  {
    employerId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    employerName: {
      type: Sequelize.STRING,
      allowNull: false,
      required: true,
    },
  },
  { underscored: true }
); */

//employer.hasMany(employee, { foreignKey: "employeeId" });

//module.exports=employer
