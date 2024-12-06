const Maintenance = require("../models/Maintenance");

const addMaintenanceLog = async (req, res) => {
  try {
    const { laptopId, description, status, cost } = req.body;

    const maintenanceLog = new Maintenance({
      laptopId,
      description,
      status,
      cost,
      loggedAt: new Date(),
    });

    await maintenanceLog.save();
    res
      .status(201)
      .json({ message: "Maintenance log added successfully", maintenanceLog });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const viewMaintenanceHistory = async (req, res) => {
  try {
    const { laptopId } = req.params;

    const history = await Maintenance.find({ laptopId });
    res.status(200).json(history);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { addMaintenanceLog, viewMaintenanceHistory };
