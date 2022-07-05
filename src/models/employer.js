const Sequelize = require("sequelize");
const db = require("../../app");
const employee = require("./employee");
const employerSchema = db.define(
  "employer",
  {
    employer_id: {
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
);

employer.hasMany(employee, { foreignKey: "employee_id" });

module.exports=Sequelize.Model('Employee',employerSchema);
