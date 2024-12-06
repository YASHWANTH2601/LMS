import React, { useEffect, useState } from "react";
import { fetchEmployees } from "../services/employeeService";

const Employees = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const getEmployees = async () => {
      try {
        const data = await fetchEmployees();
        setEmployees(data);
      } catch (error) {
        alert("Failed to fetch employees");
      }
    };

    getEmployees();
  }, []);

  return (
    <div>
      <h2>Employees</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            {employee.name} - {employee.email} - {employee.department}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Employees;
