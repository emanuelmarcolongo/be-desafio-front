import styled from "styled-components";

const TableHeader = () => {
  return (
    <thead>
      <TableHead>
        <HeadContent>FOTO</HeadContent>
        <HeadContent>NOME</HeadContent>

        <HeadContent hides={true}>CARGO</HeadContent>
        <HeadContent hides={true}>DATA DE ADMISSÃO</HeadContent>
        <HeadContent hides={true}>TELEFONE</HeadContent>
        <HeadDiv hides={true} />
      </TableHead>
    </thead>
  );
};

export default TableHeader;

const TableHead = styled.tr`
  background-image: linear-gradient(#5a84c0, #594ed2);
  color: white;
  font-size: 16px;
  font-weight: 500;

  justify-content: space-between;
  height: 49px;
`;

const HeadContent = styled.th<{ hides?: boolean }>`
  padding: 16px;
  text-align: start;
  @media (max-width: 768px) {
    display: ${(props) => (props.hides ? "none" : "")};
  }
`;

const HeadDiv = styled.div<{ hides?: boolean }>`
  width: 10px;
  height: 10px;
  background-color: white;
  border-radius: 50%;
  display: ${(props) => (props.hides ? "none" : "")};
  @media (max-width: 768px) {
    display: ${(props) => (props.hides ? "" : "none")};
  }
`;
