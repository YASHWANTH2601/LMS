import axios from "axios";

const API_URL = "http://localhost:5000/api/laptops";

export const fetchLaptops = async () => {
  const response = await axios.get(API_URL, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
  return response.data;
};
