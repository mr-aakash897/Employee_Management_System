import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <h2>Workforce Hub</h2>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/employees">Employees</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
    </header>
  );
}
