import { useEffect, useState } from "react";
import api from "../services/api";
import "./Dashboard.css";

export default function Dashboard() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    api.get("/employees").then(res => {
      setCount(res.data.length);
    });
  }, []);

  return (
    <div className="dashboard">
      <div className="stat-card">
        <h3>Total Employees</h3>
        <p>{count}</p>
      </div>
    </div>
  );
}
