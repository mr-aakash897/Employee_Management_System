import api from "../services/api";

export default function EmployeeList({ employees, refresh }) {
  const del = async id => {
    await api.delete(`/employees/${id}`);
    refresh();
  };

  return employees.map(e => (
    <div key={e._id}>
      <h3>{e.name}</h3>
      <p>{e.role} | ₹{e.salary}</p>
      <button onClick={()=>del(e._id)}>Delete</button>
    </div>
  ));
}
