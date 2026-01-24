import { useEffect, useState } from "react";
import api from "../services/api";
import EmployeeForm from "../components/EmployeeForm";
import "./Employees.css";

export default function Employees() {
  const [employees, setEmployees] = useState([]);
  const [editingEmployee, setEditingEmployee] = useState(null);

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

  const handleEdit = (emp) => {
    setEditingEmployee(emp);
  };

  const clearEdit = () => {
    setEditingEmployee(null);
  };

  return (
    <div className="employees-page">
      <EmployeeForm
        onSuccess={loadEmployees}
        editingEmployee={editingEmployee}
        clearEdit={clearEdit}
      />

      <div className="employees">
            {employees.map((emp) => (
      <div className="employee-card" key={emp._id}>
        <div>
          <h3>{emp.name}</h3>
          <p>Email: {emp.email}</p>
          <p>Position: {emp.position}</p>
          <p>Department: {emp.department}</p>
          <p><strong>Salary:</strong> ₹{emp.salary.toLocaleString()}</p>
        </div>
        
        <div className="btn-group">
          <button onClick={() => handleEdit(emp)}>Edit</button>
          <button onClick={() => deleteEmployee(emp._id)}>Delete</button>
        </div>
      </div>
    ))}
  </div>
    </div>
  );
}