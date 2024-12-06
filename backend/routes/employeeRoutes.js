const express = require("express");
const {
  getAllEmployees,
  assignLaptopToEmployee,
  getLaptopsAssignedToEmployee,
} = require("../controllers/employeeController");
const { adminAuth } = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/", adminAuth, getAllEmployees); // Fetch all employees
router.post("/assign", adminAuth, assignLaptopToEmployee); // Assign laptop to an employee
router.get("/:id/laptops", adminAuth, getLaptopsAssignedToEmployee); // Fetch laptops assigned to an employee

module.exports = router;
