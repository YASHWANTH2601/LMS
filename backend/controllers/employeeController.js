const Employee = require("../models/Employee");
const Assignment = require("../models/Assignment");

const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const assignLaptopToEmployee = async (req, res) => {
  try {
    const { employeeId, laptopId } = req.body;

    const assignment = new Assignment({
      employeeId,
      laptopId,
      assignedAt: new Date(),
    });

    await assignment.save();
    res
      .status(201)
      .json({ message: "Laptop assigned successfully", assignment });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getLaptopsAssignedToEmployee = async (req, res) => {
  try {
    const { id } = req.params;

    const assignments = await Assignment.find({ employeeId: id }).populate(
      "laptopId"
    );
    res.status(200).json(assignments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllEmployees,
  assignLaptopToEmployee,
  getLaptopsAssignedToEmployee,
};
