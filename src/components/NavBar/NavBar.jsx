import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../context/Provider";
import { Link } from "react-router-dom";
// components
import SearchBar from "./SearchBar";
import MobileMenu from "./MobileMenu";

export default function NavBar() {
  // - Hooks
  const { width, toggled, setToggled } = useContext(AppContext);

  // - Functions
  const handleToggle = () => {
    setToggled(true);
  };

  return (
    <>
      {/* DESKTOP VIEW */}
      {width >= 800 && (
        <DesktopContainer>
          <div>
            <LogoText>Pixels</LogoText>
          </div>
          <Links>
            <Link to="/" className="link">
              <LinkText>Home</LinkText>
            </Link>
            <Link to="/photos" className="link">
              <LinkText>Photos</LinkText>
            </Link>
            <Link to="/favorites" className="link">
              <LinkText>Favorites</LinkText>
            </Link>

            <SearchBar />
          </Links>
        </DesktopContainer>
      )}

      {/* MOBILE VIEW */}
      {width < 800 && (
        <>
          <MobileContainer>
            <div>
              <LogoText>Pixels</LogoText>
            </div>
            <Menu onClick={handleToggle} className="fas fa-bars"></Menu>
          </MobileContainer>
          <MobileMenu width={width} toggled={toggled} setToggled={setToggled} />
        </>
      )}
    </>
  );
}

// Styled Components
const DesktopContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 5rem;
  background: #2d2c31;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;
const MobileContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 5rem;
  background: #2d2c31;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

const LogoText = styled.h1`
  color: white;
  font-size: 28px;
`;

const Menu = styled.i`
  color: white;
  font-size: 26px;
`;

const Links = styled.div`
  width: 30rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LinkText = styled.p`
  color: #878791;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    color: white;
  }
`;
