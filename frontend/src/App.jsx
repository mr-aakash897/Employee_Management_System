import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employees" element={<Employees />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
