const Laptop = require("../models/Laptop");

const addLaptop = async (req, res) => {
  try {
    const laptop = new Laptop(req.body);
    const savedLaptop = await laptop.save();
    res.status(201).json(savedLaptop);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllLaptops = async (req, res) => {
  try {
    const laptops = await Laptop.find();
    res.status(200).json(laptops);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateLaptop = async (req, res) => {
  try {
    const updatedLaptop = await Laptop.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedLaptop);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteLaptop = async (req, res) => {
  try {
    await Laptop.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Laptop deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { addLaptop, getAllLaptops, updateLaptop, deleteLaptop };
