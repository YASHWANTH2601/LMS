const mongoose = require("mongoose");

const assignmentSchema = mongoose.Schema(
  {
    laptopId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Laptop",
      required: true,
    },
    employeeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
      required: true,
    },
    assignedAt: { type: Date, required: true, default: Date.now },
    returnedAt: { type: Date },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Assignment", assignmentSchema);
