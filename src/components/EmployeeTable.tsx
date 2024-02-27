import styled from "styled-components";
import { Employee } from "../@types/Employee";
import EmployeeInfo from "./EmployeeInfo";
import TableHeader from "./TableHeader";

type EmployeeTableProps = {
  employeeData: Employee[];
};

const EmployeeTable = ({ employeeData }: EmployeeTableProps) => {
  return (
    <Container>
      <TableContainer>
        <TableHeader />
        {employeeData.map((employee, idx) => (
          <EmployeeInfo key={employee.name + idx} employee={employee} />
        ))}
      </TableContainer>
    </Container>
  );
};

export default EmployeeTable;

const Container = styled.div`
  width: screen;
  padding: 0px 32px;
`;

const TableContainer = styled.div`
  max-width: 961px;
  margin: 0 auto;
  background-color: white;
`;
