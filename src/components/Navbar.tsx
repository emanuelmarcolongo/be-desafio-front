import styled from "styled-components";
import logo from "../../public/Logo.svg";

const Navbar = () => {
  return (
    <Nav>
      <LogoContainer>
        <img src={logo} />
      </LogoContainer>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  background-color: white;
  height: 60px;
  width: screen;
  margin-bottom: 40px;
  padding: 0px 32px;
  filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03))
    drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  max-width: 961px;
  margin: auto;
`;
