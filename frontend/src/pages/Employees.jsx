import { useEffect, useState } from "react";
import api from "../services/api";
import EmployeeForm from "../components/EmployeeForm";
import "./Employees.css";

export default function Employees() {
  const [employees, setEmployees] = useState([]);

  const loadEmployees = async () => {
    const res = await api.get("/employees");
    setEmployees(res.data);
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  const deleteEmployee = async (id) => {
    await api.delete(`/employees/${id}`);
    loadEmployees();
  };

  return (
    <div className="employees-page">
      <EmployeeForm onSuccess={loadEmployees} />

      <div className="employees">
        {employees.map((emp) => (
          <div className="employee-card" key={emp._id}>
            <h3>{emp.name}</h3>
            <p>{emp.role}</p>
            <p>₹ {emp.salary}</p>
            <button onClick={() => deleteEmployee(emp._id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

