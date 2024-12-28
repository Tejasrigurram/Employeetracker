const express = require('express');
const Employee = require('../models/Employee').default;
const router = express.Router();

// Add Employee
router.post('/', async (req, res) => {
  const { name, email, role } = req.body;

  try {
    const employee = new Employee({ name, email, role });
    await employee.save();
    res.status(201).json(employee);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get All Employees
router.get('/', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
