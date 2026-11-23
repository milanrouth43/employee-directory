
import SearchBar from "../components/SearchBar";
import EmployeeCard from "../components/EmployeeCard";

function EmployeeList({ employees, loading, search, setSearch }) {

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Employee List</h2>

      <SearchBar search={search} setSearch={setSearch} />

      {loading && <p>Loading employees...</p>}

      {!loading && employees.length === 0 && (
        <p>No employees found.</p>
      )}

      {!loading && employees.length > 0 && (
        <>
          <h3>Total Employees: {employees.length}</h3>

          {filteredEmployees.length === 0 ? (
            <p>No matching employees found.</p>
          ) : (
            filteredEmployees.map((employee) => (
              <EmployeeCard
                key={employee.id}
                employee={employee}
              />
            ))
          )}
        </>
      )}
    </div>
  );
}

export default EmployeeList;
