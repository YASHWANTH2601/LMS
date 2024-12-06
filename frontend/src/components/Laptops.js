import React, { useEffect, useState } from "react";
import { fetchLaptops } from "../services/laptopService";

const Laptops = () => {
  const [laptops, setLaptops] = useState([]);

  useEffect(() => {
    const getLaptops = async () => {
      try {
        const data = await fetchLaptops();
        setLaptops(data);
      } catch (error) {
        alert("Failed to fetch laptops");
      }
    };

    getLaptops();
  }, []);

  return (
    <div>
      <h2>Laptops</h2>
      <ul>
        {laptops.map((laptop) => (
          <li key={laptop.id}>
            {laptop.brand} - {laptop.model} - {laptop.serialNumber}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Laptops;
