const mongoose = require("mongoose");

const issueSchema = mongoose.Schema(
  {
    laptopId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Laptop",
      required: true,
    },
    description: { type: String, required: true },
    priority: { type: String, enum: ["low", "medium", "high"], default: "low" },
    status: { type: String, enum: ["open", "resolved"], default: "open" },
    reportedBy: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" },
    reportedAt: { type: Date, required: true, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Issue", issueSchema);
