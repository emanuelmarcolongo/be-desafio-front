import { Employee } from "../@types/Employee";
import dateFormater from "../utils/dateFormatter";
import phoneNumberFormatter from "../utils/phoneFormatter";
import arrow from "../../public/icons/arrowDown.svg";
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
      <ImageContainer>
        <img
          src={image}
          style={{
            width: "34px",
            height: "34px",
            borderRadius: "50%",
          }}
        />
      </ImageContainer>

      <EmployeeInfoParagraph>{name}</EmployeeInfoParagraph>
      <EmployeeInfoParagraph hides={true}>{job}</EmployeeInfoParagraph>
      <EmployeeInfoParagraph hides={true}>
        {formattedDate}
      </EmployeeInfoParagraph>
      <EmployeeInfoParagraph hides={true}>
        {formattedPhone}
      </EmployeeInfoParagraph>
    </EmployeeContainer>
  );
};

export default EmployeeInfo;

const EmployeeContainer = styled.tr<{ hides?: boolean }>`
  height: 49px;
  border: 1px solid #00000033;
  td {
    padding-left: 4px;
    text-align: left;
    color: #1c1c1c;
    font-size: 16px;
    font-weight: 400;
    padding: 16px;
  }
`;

const ImageContainer = styled.div`
  height: 49px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const EmployeeInfoParagraph = styled.td<{ hides?: boolean }>`
  text-align: left;
  @media (max-width: 768px) {
    display: ${(props) => (props.hides ? "none" : "")};
  }
`;
