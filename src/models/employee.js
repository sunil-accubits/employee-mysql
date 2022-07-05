const Sequelize = require("sequelize");
const db = require("../../app");
const employer=require('./employer');

const employeeSchema = db.define(
  'employee',
  {
    employee_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    employeeName: {
      type: Sequelize.STRING,
      allowNull: false,
      required: true,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: [true, "email already exists in database"],
      lowercase: true,
      trim: true,
      required: [true, "email not provided"],
      validate: {
        validator: function (v) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
        },
        message: "{VALUE} is not a valid email!",
      },
    },
    age: {
      type: Sequelize.INTEGER,
      allowNull: false,
      required: true,
    },
    gender: {
      type: Sequelize.STRING,
      allowNull: false,
      enum: ["Male", "Female", "Others"],
      required: true,
    },
    department: {
      type: Sequelize.STRING,
      allowNull: false,
      required: [true, "Department name required"],
    },
    currentPosition: {
      type: Sequelize.STRING,
      allowNull: false,
      required: [true, "Please enter the employee position"],
    },
    experience: {
      type: Sequelize.INTEGER,
      allowNull: false,
      required: true,
    },
    reportingHead: {
      type: Sequelize.STRING,
      allowNull: false,
      required: [true, "Name of Reporing Head Required"],
    },
    salary: {
      type: Sequelize.INTEGER,
      allowNull: false,
      required: [true, "Salary can not be empty"],
    },
  },
  { underscored: true }
);
employee.hasOne(employer, { foreignKey: "employer_id" });
module.exports = Sequelize.Model('Employee',employeeSchema);
