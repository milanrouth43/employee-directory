
import { useParams, Link } from "react-router";

function EmployeeDetails({ employees, loading }) {
  const { id } = useParams();

  const employee = employees.find(
    (person) => person.id === Number(id)
  );

  if (loading) {
    return <p>Loading employee details...</p>;
  }

  if (!employee) {
    return <p>Employee not found.</p>;
  }

  return (
    <div>
      <h2>Employee Details</h2>

      <h3>{employee.name}</h3>
      <p>ID: {employee.id}</p>
      <p>Email: {employee.email}</p>
      <p>Department: {employee.department}</p>

      <Link to="/employees">Back to Employees</Link>
    </div>
  );
}

export default EmployeeDetails;
    