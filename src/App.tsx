import { Suspense, useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { EmployeeService } from "./services/getEmployeeData";
import { Employee } from "./@types/Employee";
import EmployeeTable from "./components/EmployeeTable";
import Search from "./components/Search";

const App = () => {
  const [data, setData] = useState<Employee[]>([]);
  const [filter, setFilter] = useState<string>("");

  const filteredData = data.filter(
    (employee) =>
      employee.name.toLowerCase().includes(filter) ||
      employee.job.toLowerCase().includes(filter) ||
      employee.phone.toLowerCase().includes(filter)
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await EmployeeService.getEmployeeData();
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <Navbar />
      <Search filter={filter} setFilter={setFilter} />

      <Suspense fallback={<p>Carregando...</p>}>
        {data.length > 0 && <EmployeeTable employeeData={filteredData} />}
      </Suspense>
    </>
  );
};

export default App;
