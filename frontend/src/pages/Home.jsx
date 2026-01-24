import "./Home.css";

export default function Home() {
  return (
    <section className="home">
      <div className="hero-card">
        <h1>Smart Employee Management System</h1>
        <p>
          Manage employees efficiently with a modern, secure and scalable system.
        </p>
        <a href="/employees" className="btn-primary">
          Manage Employees
        </a>
      </div>
    </section>
  );
}
