const express = require("express");
const {
  addLaptop,
  getAllLaptops,
  updateLaptop,
  deleteLaptop,
} = require("../controllers/laptopController");
const { adminAuth } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", adminAuth, addLaptop);
router.get("/", adminAuth, getAllLaptops);
router.put("/:id", adminAuth, updateLaptop);
router.delete("/:id", adminAuth, deleteLaptop);

module.exports = router;
