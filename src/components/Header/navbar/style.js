import styled from "styled-components";

export const NavbarContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const Navbar = styled.nav`
  display: flex;
  width: 30%;
  justify-content: space-between;
  margin-right: 30px;
  padding: 30px;

  @media (min-width: 320px) and (max-width: 768px) {
    width: 100%;
    align-items: center;
    margin-right: 0px;
  }
`;
