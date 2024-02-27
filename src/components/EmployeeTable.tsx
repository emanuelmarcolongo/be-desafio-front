import styled from "styled-components";
import { Employee } from "../@types/Employee";
import EmployeeInfo from "./EmployeeInfo";
import TableHeader from "./TableHeader";
import EmployeeMobileData from "./EmployeeMobileData";
import React, { useState } from "react";

type EmployeeTableProps = {
  employeeData: Employee[];
};

const EmployeeTable = ({ employeeData }: EmployeeTableProps) => {
  const [visibleElements, setVisibleElements] = useState<Number[]>([]);
  return (
    <Container>
      <TableContainer>
        <TableHeader />
        <tbody>
          {employeeData.map((employee, idx) => (
            <React.Fragment key={employee.id}>
              <EmployeeInfo
                visibleElements={visibleElements}
                setVisibleElements={setVisibleElements}
                employee={employee}
              />
              <EmployeeMobileData
                visibility={visibleElements.includes(employee.id) && true}
                employee={employee}
              />
            </React.Fragment>
          ))}
        </tbody>
      </TableContainer>
    </Container>
  );
};

export default EmployeeTable;

const Container = styled.div`
  width: screen;
  padding: 0px 32px;
`;

const TableContainer = styled.table`
  width: 100%;
  max-width: 961px;
  margin: 0 auto;
  background-color: white;
`;
