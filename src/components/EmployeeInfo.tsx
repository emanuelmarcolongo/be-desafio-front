import { Employee } from "../@types/Employee";
import dateFormater from "../utils/dateFormatter";
import phoneNumberFormatter from "../utils/phoneFormatter";
import arrow from "../../public/icons/ArrowDown.svg";
import styled from "styled-components";
import { Dispatch, SetStateAction } from "react";

type EmployeeInfoProps = {
  employee: Employee;
  visibleElements: Number[];
  setVisibleElements: Dispatch<SetStateAction<Number[]>>;
};

const EmployeeInfo = ({
  visibleElements,
  employee,
  setVisibleElements,
}: EmployeeInfoProps) => {
  const { id, admission_date, phone, image, job, name } = employee;
  const formattedDate = dateFormater(admission_date);
  const formattedPhone = phoneNumberFormatter(phone);

  const handleVisibilityClick = (id: number) => {
    if (visibleElements.includes(id)) {
      setVisibleElements([...visibleElements.filter((item) => item !== id)]);
    } else {
      setVisibleElements([...visibleElements, id]);
    }
  };
  return (
    <>
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

        <EmployeeInfoTd>{name}</EmployeeInfoTd>
        <EmployeeInfoTd hides={true}>{job}</EmployeeInfoTd>
        <EmployeeInfoTd hides={true}>{formattedDate}</EmployeeInfoTd>
        <EmployeeInfoTd hides={true}>{formattedPhone}</EmployeeInfoTd>
        <EmployeeInfoTdInverse
          hides={true}
          onClick={() => handleVisibilityClick(id)}
        >
          {visibleElements.includes(id) && (
            <img style={{ rotate: "180deg" }} src={arrow} />
          )}
          {!visibleElements.includes(id) && <img src={arrow} />}
        </EmployeeInfoTdInverse>
      </EmployeeContainer>
    </>
  );
};

export default EmployeeInfo;

const EmployeeContainer = styled.tr<{ hides?: boolean }>`
  height: 49px;
  border: 1px solid #00000033;
  border-bottom: 0px;

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
  position: relative;

  img {
    position: absolute;
    left: 20px;
    top: -25px;
  }
  @media (max-width: 768px) {
    img {
      position: absolute;
      left: 20px;
      top: -35px;
    }
  }
`;

const EmployeeInfoTd = styled.td<{ hides?: boolean }>`
  text-align: left;
  @media (max-width: 768px) {
    display: ${(props) => (props.hides ? "none" : "")};
  }
`;

const EmployeeInfoTdInverse = styled.td<{ hides?: boolean }>`
  padding: 0px 0px 0px 0px;
  text-align: left;
  @media (min-width: 768px) {
    display: ${(props) => (props.hides ? "none" : "")};
  }
`;
