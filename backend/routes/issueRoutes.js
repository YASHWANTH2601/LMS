const express = require("express");
const {
  reportIssue,
  getIssues,
  resolveIssue,
} = require("../controllers/issueController");
const { adminAuth, employeeAuth } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", employeeAuth, reportIssue); // Report an issue
router.get("/", adminAuth, getIssues); // Get all issues
router.put("/:id/resolve", adminAuth, resolveIssue); // Resolve an issue

module.exports = router;
