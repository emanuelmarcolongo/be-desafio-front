import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { EmployeeService } from "./services/getEmployeeData";
import { Employee } from "./@types/Employee";
import EmployeeTable from "./components/EmployeeTable";

const App = () => {
  const [data, setData] = useState<Employee[]>([]);
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
  });
  return (
    <>
      <Navbar />
      {data && <EmployeeTable employeeData={data} />}
    </>
  );
};

export default App;
