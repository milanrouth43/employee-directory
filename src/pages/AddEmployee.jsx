
import { useState } from "react";
import { useNavigate } from "react-router";

function AddEmployee({ addEmployee }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    if (
      name.trim() === "" ||
      email.trim() === "" ||
      department.trim() === ""
    ) {
      alert("Please fill in all fields");
      return;
    }

    const newEmployee = {
      id: Date.now(),
      name: name.trim(),
      email: email.trim(),
      department: department.trim()
    };

    addEmployee(newEmployee);

    navigate("/employees");
  }

  return (
    <div>
      <h2>Add Employee</h2>

      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          placeholder="Enter employee name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter employee email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <label>Department:</label>
        <input
          type="text"
          placeholder="Enter department"
          value={department}
          onChange={(event) => setDepartment(event.target.value)}
          required
        />

        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
}

export default AddEmployee;
