const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // Ensure this exists
    role: { type: String, required: true },
    department: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Employee", employeeSchema);
