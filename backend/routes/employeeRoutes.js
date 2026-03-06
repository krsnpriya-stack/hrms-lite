const express = require("express");
const router = express.Router();
const Employee = require("../models/Employee");

// Add Employee
router.post("/employees", async (req, res) => {
  try {
    const { employeeId, fullName, email, department } = req.body;

    const employee = new Employee({
      employeeId,
      fullName,
      email,
      department
    });

    const savedEmployee = await employee.save();

    res.status(201).json(savedEmployee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get All Employees
router.get("/employees", async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// Delete Employee
router.delete("/employees/:id", async (req, res) => {
  try {
    const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);

    if (!deletedEmployee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.json({ message: "Employee deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;