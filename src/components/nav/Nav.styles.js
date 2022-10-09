import styled from "styled-components";

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: white !important;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  height: 4rem;
`;

export const NavLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const NavProfile = styled.img``;

export const NavLinks = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  gap: 2rem;
`;
