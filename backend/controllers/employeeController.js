const Employee = require("../models/Employee");

// CREATE
exports.createEmployee = async (req, res) => {
  const employee = await Employee.create(req.body);
  res.status(201).json(employee);
};

// READ
exports.getEmployees = async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
};

// UPDATE
exports.updateEmployee = async (req, res) => {
  const employee = await Employee.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(employee);
};

// DELETE
exports.deleteEmployee = async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.json({ message: "Employee deleted" });
};
