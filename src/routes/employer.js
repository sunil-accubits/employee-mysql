const express = require('express');
const router = express.Router();

const employerController = require('../controllers/employer');

router.get("/employees", employerController.getAllEmployees);

router.get("/employee/:id", employerController.getEmployeeById);

router.post("/create-employee", employerController.createEmployee);

router.put("/edit-employee/:id", employerController.updateEmployee);

router.patch("/edit-employee/:id", employerController.updateEmployee);

router.delete("/delete-employee/:id", employerController.deleteEmployee);

module.exports = router;