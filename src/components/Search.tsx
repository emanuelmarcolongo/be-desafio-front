import styled from "styled-components";
import searchIcon from "../../public/icons/search.svg";
import React, { SetStateAction, Dispatch } from "react";

type SearchProps = {
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
};

const Search = ({ filter, setFilter }: SearchProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };
  return (
    <Container>
      <SearchContainer>
        <p>Funcionários</p>
        <InputIconContainer>
          <SearchInput
            value={filter}
            onChange={handleInputChange}
            placeholder="Pesquisar"
          ></SearchInput>
          <img src={searchIcon} />
        </InputIconContainer>
      </SearchContainer>
    </Container>
  );
};

export default Search;

const Container = styled.div`
  width: screen;
  padding: 0px 32px;
  margin-bottom: 32px;
`;
const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 961px;
  margin: auto;

  p {
    font-size: 24px;
    font-weight: 500;
    color: #1c1c1c;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: start;
    p {
      margin-bottom: 12px;
    }
  }
`;

const SearchInput = styled.input`
  border: 1px solid #dfdfdf;
  height: 48px;
  border-radius: 8px;
  min-width: 300px;
  @media (max-width: 768px) {
    min-width: 100%;
  }

  &::placeholder {
    font-weight: 400;
    color: #9e9e9e;
    font-size: 16px;
    padding-left: 25px;
  }
`;

const InputIconContainer = styled.div`
  display: flex;
  position: relative;
  @media (max-width: 768px) {
    width: 100%;
  }

  img {
    position: absolute;
    bottom: 13px;
    right: 25px;
    height: 25px;
  }
`;
