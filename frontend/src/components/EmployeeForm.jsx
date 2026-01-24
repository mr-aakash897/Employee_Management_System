import { useEffect, useState } from "react";
import api from "../services/api";
import "./EmployeeForm.css";

export default function EmployeeForm({ onSuccess, editingEmployee, clearEdit }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    department: "",
    salary: "",
  });

  useEffect(() => {
    if (editingEmployee) {
      setFormData(editingEmployee);
    }
  }, [editingEmployee]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingEmployee) {
      await api.put(`/employees/${editingEmployee._id}`, formData);
    } else {
      await api.post("/employees", formData);
    }

    onSuccess();
    clearEdit && clearEdit();

    setFormData({
      name: "",
      email: "",
      position: "",
      department: "",
      salary: "",
    });
  };

  return (
    <form className="employee-form" onSubmit={handleSubmit}>
      <h2>{editingEmployee ? "Edit Employee" : "Add Employee"}</h2>

      <input
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <input
        name="position"
        placeholder="Position"
        value={formData.position}
        onChange={handleChange}
        required
      />

      <input
        name="department"
        placeholder="Department"
        value={formData.department}
        onChange={handleChange}
        required
      />

      <input
        name="salary"
        type="number"
        placeholder="Salary"
        value={formData.salary}
        onChange={handleChange}
        required
      />

      <button type="submit">
        {editingEmployee ? "Update Employee" : "Add Employee"}
      </button>

      {editingEmployee && (
        <button type="button" onClick={clearEdit}>
          Cancel
        </button>
      )}
    </form>
  );
}
