const express = require("express");
const {
  addMaintenanceLog,
  viewMaintenanceHistory,
} = require("../controllers/maintenanceController");
const { adminAuth } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", adminAuth, addMaintenanceLog); // Add maintenance log
router.get("/:laptopId", adminAuth, viewMaintenanceHistory); // View maintenance history of a laptop

module.exports = router;
