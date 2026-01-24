import { useState } from "react";
import api from "../services/api";
import "./EmployeeForm.css";

export default function EmployeeForm({ onSuccess }) {
  const [form, setForm] = useState({
  name: "",
  role: "",
  department: "",
  salary: "",
});


  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await api.post("/employees", form);
      setForm({ name: "", role: "", salary: "" });
      onSuccess(); // refresh list
    } catch (err) {
      alert("Failed to add employee");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="employee-form" onSubmit={handleSubmit}>
      <h3>Add Employee</h3>

      <input
        type="text"
        name="name"
        placeholder="Employee Name"
        value={form.name}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="role"
        placeholder="Role"
        value={form.role}
        onChange={handleChange}
        required
      />

      <input
  type="text"
  name="department"
  placeholder="Department"
  value={form.department}
  onChange={handleChange}
  required
/>


      <input
        type="number"
        name="salary"
        placeholder="Salary"
        value={form.salary}
        onChange={handleChange}
        required
      />

      <button type="submit" disabled={loading}>
        {loading ? "Adding..." : "Add Employee"}
      </button>
    </form>
  );
}

