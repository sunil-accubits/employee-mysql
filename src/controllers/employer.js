const Employee = require("../models/employee");

//-----------GET LIST OF ALL THE EMPLOYEES-------------------------
exports.getAllEmployees = async (req, res) => {
  const employee = await Employee.findAll();
  try {
    res.status(200).send(employee);
  } catch (error) {
    res.status(500).send(error);
  }
};

//----------GET EMPLOYEE DETAILS BY ID-------------------
exports.getEmployeeById = async (req, res) => {
  try {
    const id = req.params.id;
    let data = await Employee.findByPk(id);
    if (data) {
      res.status(200).send({
        message: `Employee details wrt to id ${id}`,
        data,
      });
    } else {
      res.status(404).send({
        message: `No Employee found with id ${id}`,
      });
    }
  } catch (error) {
    res.status(500).send({ message: `Error retriving with id ${id}` }, error);
  }
};

//---------------DELETE AN EMPLOYEE BY IT'S ID, IF FOUND-------------
exports.deleteEmployee = async (req, res) => {
  try {
    const existingEmployee = await Employee.findByPk(req.params.id);
    if (!existingEmployee) {
      return res
        .status(404)
        .send({ message: "Employee not found with given id" });
    }
    try {
      let data = await Employee.destroy({
        where: { employeeId: req.params.id },
      });
      return res.status(200).send({ message: "deleted" });
    } catch (error) {
      res.status(500).send(error);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

/* CREATE EMPLOYEE -- Check whether the employee is already registered & if employee is already registered,
then return a message, else create a new employee in the database.   */
exports.createEmployee = async (req, res) => {
  try {
    const existingEmployee = await Employee.findOne({
      where: { email: req.body.email },
    });
    if (existingEmployee) {
      return res.status(409).send({ message: "Employee already registered" });
    }
    try {
      const data = {
        employeeName: req.body.employeeName,
        email: req.body.email,
      };
      let employee = await Employee.create(data);
      return res.status(201).json({
        message: "Employee added to database successfully",
        result: employee,
      });
    } catch (error) {
      res.status(500).send(error);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

//-------------UPDATE EMPLOYEE DETAILS--------------------------
exports.updateEmployee = async (req, res) => {
  try {
    let employeeId = req.params.id;
    //let body = req.body;
    let body = {
      employeeName: req.body.employeeName,
      email: req.body.email,
    };
    let employee = await Employee.update(body, {
      where: { employeeId: employeeId },
    });
    return res.status(201).json({
      message: "Employee details updated",
      result: body,
    });
  } catch (error) {
    res.status(500).send({ message: "Unable to update" }, error);
  }
};

//-----------GET EMPLOYEE DETAILS BY EMPLOYEE ID--------------------
// exports.getEmployeeById = (req, res) => {
//   const id = Number(req.params.id);
//   //console.log(id);
//   Employee.findByPk(id)
//   .then((data) => {
//     //console.log(data);
//     if (data) {
//       res.status(200).send(
//         { message: `Employee details wrt to id ${id}`,data });
//     } else {
//       res.status(404).send({
//         message: `No Employee found with id ${id}` });
//     }
//   })
//   .catch(error=>{
//     res.status(500).send({message:`Error retriving with id ${id}`})
//   })
// };

//Insert new employee
/* exports.createEmployee = (req, res) => {
  const employee = {
    employeeId: req.body.employeeId,
    employeeName: req.body.employeeName,
  };
  Employee.create(employee)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "error occured" }, error);
    });
}; */

//CREATE EMPLOYEE USING ASYNC AWAIT
// exports.createEmployee = async (req, res) => {
//   try {
//     let data = req.body;
//     let employee = await Employee.create(data);
//     return res.status(201).send(employee);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// };
