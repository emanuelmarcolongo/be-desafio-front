import { Employee } from "../@types/Employee";
import dateFormater from "../utils/dateFormatter";
import phoneNumberFormatter from "../utils/phoneFormatter";
import styled from "styled-components";

type EmployeeInfoProps = {
  employee: Employee;
};

const EmployeeInfo = ({ employee }: EmployeeInfoProps) => {
  const { admission_date, phone, image, job, name } = employee;
  const formattedDate = dateFormater(admission_date);
  const formattedPhone = phoneNumberFormatter(phone);
  return (
    <EmployeeContainer>
      <img
        src={image}
        style={{ width: "34px", height: "34px", borderRadius: "50%" }}
      />
      <p>{name}</p>
      <p>{job}</p>
      <p>{formattedDate}</p>
      <p>{formattedPhone}</p>
    </EmployeeContainer>
  );
};

export default EmployeeInfo;

const EmployeeContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #00000033;
  p {
    align-self: flex-start;
  }
`;
