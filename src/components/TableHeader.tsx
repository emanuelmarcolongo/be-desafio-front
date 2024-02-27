import styled from "styled-components";

const TableHeader = () => {
  return (
    <TableHead>
      <p>FOTO</p>
      <p>NOME</p>
      <p>CARGO</p>
      <p>DATA DE ADMISSÃO</p>
      <p>TELEFONE</p>
    </TableHead>
  );
};

export default TableHeader;

const TableHead = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-image: linear-gradient(#5a84c0, #594ed2);
  color: white;
  font-size: 16px;
  font-weight: 500;
  border-radius: 8px 8px 0 0;
  height: 49px;
`;
