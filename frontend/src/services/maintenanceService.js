import axios from "axios";

// API URL for maintenance
const API_URL = "http://localhost:5000/api/maintenance";

// Fetch maintenance history for a specific laptop
export const fetchMaintenanceHistory = async (laptopId) => {
  const token = localStorage.getItem("token");
  const response = await axios.get(`${API_URL}/${laptopId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// Add a maintenance log for a specific laptop
export const addMaintenanceLog = async (
  laptopId,
  description,
  status,
  cost
) => {
  const token = localStorage.getItem("token");
  const response = await axios.post(
    API_URL,
    { laptopId, description, status, cost },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return response.data;
};
