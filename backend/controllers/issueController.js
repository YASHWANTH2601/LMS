const Issue = require("../models/Issue");

const reportIssue = async (req, res) => {
  try {
    const { laptopId, description, priority } = req.body;

    const issue = new Issue({
      laptopId,
      description,
      priority,
      status: "open",
      reportedBy: req.user.id,
      reportedAt: new Date(),
    });

    await issue.save();
    res.status(201).json({ message: "Issue reported successfully", issue });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getIssues = async (req, res) => {
  try {
    const issues = await Issue.find()
      .populate("laptopId")
      .populate("reportedBy");
    res.status(200).json(issues);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const resolveIssue = async (req, res) => {
  try {
    const { id } = req.params;

    const issue = await Issue.findByIdAndUpdate(
      id,
      { status: "resolved" },
      { new: true }
    );
    res.status(200).json({ message: "Issue resolved successfully", issue });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { reportIssue, getIssues, resolveIssue };
