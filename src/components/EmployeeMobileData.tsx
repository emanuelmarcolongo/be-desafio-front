import styled from "styled-components";
import { Employee } from "../@types/Employee";
import dateFormater from "../utils/dateFormatter";
import phoneNumberFormatter from "../utils/phoneFormatter";

type EmployeeMobileDataProps = {
  employee: Employee;
  visibility: boolean;
};

const EmployeeMobileData = ({
  visibility,
  employee,
}: EmployeeMobileDataProps) => {
  const { job, admission_date, phone } = employee;
  const formattedDate = dateFormater(admission_date);
  const formattedPhone = phoneNumberFormatter(phone);

  return (
    <>
      <tr>
        <Td colSpan={5}>
          <Container visibility={visibility} hides={true}>
            <InformationContainer>
              <h1>Cargo</h1>
              <h2>{job}</h2>
            </InformationContainer>
            <InformationContainer>
              <h1>Data de admissão</h1>
              <h2>{formattedDate}</h2>
            </InformationContainer>
            <InformationContainer>
              <h1>Telefone</h1>
              <h2>{formattedPhone}</h2>
            </InformationContainer>
          </Container>
        </Td>
      </tr>
    </>
  );
};

export default EmployeeMobileData;

const Container = styled.div<{ hides?: boolean; visibility: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-left: 1px solid #00000033;
  border-bottom: 1px solid #00000033;
  border-right: 1px solid #00000033;
  display: ${(props) => (props.visibility ? "block" : "none")};
  @media (min-width: 768px) {
    display: ${(props) => (props.hides ? "none" : "block")};
  }
`;

const Td = styled.td`
  width: 100%;
  column-span: 5;
`;

const InformationContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0px;
  border-bottom: 1px dotted gray;
  h1 {
    font-weight: 500;
  }
  h1,
  h2 {
    padding: 0px 20px;
    text-align: left;
  }
`;
