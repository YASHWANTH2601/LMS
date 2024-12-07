const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const employeeRoutes = require("./routes/employeeRoutes");
const laptopRoutes = require("./routes/laptopRoutes");
const maintenanceRoutes = require("./routes/maintenanceRoutes");
const issueRoutes = require("./routes/issueRoutes");

// dotenv.config();
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/employees", employeeRoutes);
app.use("/api/laptops", laptopRoutes);
app.use("/api/maintenance", maintenanceRoutes);
app.use("/api/issues", issueRoutes);

// Error handling middleware
// const errorHandler = require("./middlewares/errorHandler");
// app.use(errorHandler);
app.get("/", (req, res) => res.send("Hello World!"));
const PORT = process.env.PORT || 5000;
const startServer = async () => {
  try {
    await connectDB();
    await app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};
startServer();
