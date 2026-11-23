
import { Link } from "react-router";

function EmployeeCard(props) {
  return (
    <div className="employee-card">
      <h3>{props.employee.name}</h3>
      <p>Email: {props.employee.email}</p>
      <p>Department: {props.employee.department}</p>

      <Link to={`/employees/${props.employee.id}`}>
        View Details
      </Link>
    </div>
  );
}

export default EmployeeCard;
