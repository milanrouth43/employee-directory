
import { Link } from "react-router";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/employees">Employees</Link>
      <Link to="/add-employee">Add Employee</Link>
    </nav>
  );
}

export default Navbar;
