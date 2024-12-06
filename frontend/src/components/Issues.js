import React, { useState } from "react";
import { reportIssue } from "../services/issueService";

const Issues = () => {
  const [issueData, setIssueData] = useState({
    laptopId: "",
    description: "",
    priority: "low",
  });

  const handleChange = (e) => {
    setIssueData({ ...issueData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await reportIssue(issueData);
      alert("Issue reported successfully!");
    } catch (error) {
      alert("Failed to report issue");
    }
  };

  return (
    <div className="form-container">
      <h2>Report an Issue</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="laptopId"
          placeholder="Laptop ID"
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Issue Description"
          onChange={handleChange}
          required
        />
        <select name="priority" onChange={handleChange}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button type="submit">Submit Issue</button>
      </form>
    </div>
  );
};

export default Issues;
