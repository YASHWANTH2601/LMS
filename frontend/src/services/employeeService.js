import axios from "axios";

// API URL for employees
const API_URL = "http://localhost:5000/api/employees";

// Fetch all employees
export const fetchEmployees = async () => {
  const token = localStorage.getItem("token");
  const response = await axios.get(API_URL, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// Assign a laptop to an employee
export const assignLaptopToEmployee = async (employeeId, laptopId) => {
  const token = localStorage.getItem("token");
  const response = await axios.post(
    `${API_URL}/assign`,
    { employeeId, laptopId },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return response.data;
};

// Fetch laptops assigned to a specific employee
export const fetchAssignedLaptops = async (employeeId) => {
  const token = localStorage.getItem("token");
  const response = await axios.get(`${API_URL}/${employeeId}/laptops`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
