import { Employee } from "../@types/Employee";

const getEmployeeData = async (): Promise<Employee[]> => {
  const url = `http://localhost:8000/employees`;

  const options = {
    method: "GET",
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const EmployeeService = { getEmployeeData };
