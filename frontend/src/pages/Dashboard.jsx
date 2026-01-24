import { useEffect, useState } from "react";
import api from "../services/api";
import "./Dashboard.css";

export default function Dashboard() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    api.get("/employees").then((res) => setEmployees(res.data));
  }, []);

  const totalEmployees = employees.length;

  const totalSalary = employees.reduce(
    (sum, emp) => sum + Number(emp.salary || 0),
    0
  );

  const averageSalary =
    totalEmployees > 0 ? Math.round(totalSalary / totalEmployees) : 0;

  return (
    <div className="dashboard">
      <h1>Employee Dashboard</h1>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Employees</h3>
          <p>{totalEmployees}</p>
        </div>

        <div className="stat-card">
          <h3>Total Salary</h3>
          <p>₹ {totalSalary.toLocaleString()}</p>
        </div>

        <div className="stat-card">
          <h3>Average Salary</h3>
          <p>₹ {averageSalary.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}

