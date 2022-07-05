const express = require("express");
const Employee = require("../models/employee");

//GET LIST OF ALL THE EMPLOYEES
exports.getAllEmployees = async(req, res)=>{
    try{
        const employees = await findAll();
        res.status(200).send(employees);
    }catch(error){
        res.status(500).send(error);
    }
};