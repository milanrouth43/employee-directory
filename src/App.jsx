
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router";

import "./App.css";
import employeeData from "./data/employees";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import EmployeeList from "./pages/EmployeeList";
import EmployeeDetails from "./pages/EmployeeDetails";
import AddEmployee from "./pages/AddEmployee";

function App() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setEmployees(employeeData);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  function addEmployee(newEmployee) {
    setEmployees((previousEmployees) => [
      ...previousEmployees,
      newEmployee
    ]);
  }

  return (
    <BrowserRouter>
      <div>
        <h1>Employee Directory</h1>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/employees"
            element={
              <EmployeeList
                employees={employees}
                loading={loading}
                search={search}
                setSearch={setSearch}
              />
            }
          />

          <Route
            path="/employees/:id"
            element={
              <EmployeeDetails
                employees={employees}
                loading={loading}
              />
            }
          />

          <Route
            path="/add-employee"
            element={
              <AddEmployee addEmployee={addEmployee} />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
