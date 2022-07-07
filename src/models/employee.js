const Sequelize = require("sequelize");
const db = require('../config/db.config');
const employer = require("./employer");

const employee = db.define(
  "employee",
  {
    employeeId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    employeeName: {
      type: Sequelize.STRING,
      allowNull: false,
      
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    // age: {
    //   type: Sequelize.INTEGER,
    //   allowNull: false,
    //   required: true,
    // },
    // gender: {
    //   type: Sequelize.STRING,
    //   allowNull: false,
    //   enum: ["Male", "Female", "Others"],
    //   required: true,
    // },
    // department: {
    //   type: Sequelize.STRING,
    //   allowNull: false,
    //   required: [true, "Department name required"],
    // },
    // currentPosition: {
    //   type: Sequelize.STRING,
    //   allowNull: false,
    //   required: [true, "Please enter the employee position"],
    // },
    // experience: {
    //   type: Sequelize.INTEGER,
    //   allowNull: false,
    //   required: true,
    // },
    // reportingHead: {
    //   type: Sequelize.STRING,
    //   allowNull: false,
    //   required: [true, "Name of Reporing Head Required"],
    // },
    // salary: {
    //   type: Sequelize.INTEGER,
    //   allowNull: false,
    //   required: [true, "Salary can not be empty"],
    // },
  },
  { underscored: true }
);
//employee.hasOne(employer, { foreignKey: "employerId" });
module.exports = employee;