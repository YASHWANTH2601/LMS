import axios from "axios";

const API_URL = "http://localhost:5000/api/issues";

export const reportIssue = async (issue) => {
  const response = await axios.post(API_URL, issue, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
  return response.data;
};
