import React, { useState, useEffect } from "react";
import { fetchMaintenanceHistory } from "../services/maintenanceService";

const Maintenance = ({ laptopId }) => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const getHistory = async () => {
      try {
        const data = await fetchMaintenanceHistory(laptopId);
        setHistory(data);
      } catch (error) {
        alert("Failed to fetch maintenance history");
      }
    };

    getHistory();
  }, [laptopId]);

  return (
    <div>
      <h2>Maintenance History</h2>
      <ul>
        {history.map((entry) => (
          <li key={entry.id}>
            {entry.description} - {entry.status} - ${entry.cost}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Maintenance;
