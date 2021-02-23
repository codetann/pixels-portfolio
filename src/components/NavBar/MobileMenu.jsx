import React, { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// components
import SearchBar from "./SearchBar";

export default function MobileMenu({ toggled, setToggled }) {
  const node = useRef(null);

  // if the user clicks outside of the mobile menu, it will close.
  useEffect(() => {
    const handleClick = (e) => {
      if (!node.current.contains(e.target) && toggled) {
        setToggled(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

  const handleLink = () => {
    setToggled(false);
  };

  return (
    <Container
      ref={node}
      style={{
        transform: `translate(${!toggled ? "-310px" : "0px"}, 0)`,
        transition: ".4s",
      }}
    >
      <SearchBar />
      <Links>
        <Link to="/" className="link">
          <LinkText onClick={handleLink}>Home</LinkText>
        </Link>
        <Link to="/photos" className="link">
          <LinkText onClick={handleLink}>Photos</LinkText>
        </Link>
        <Link to="/favorites" className="link">
          <LinkText onClick={handleLink}>Favorites</LinkText>
        </Link>
      </Links>
    </Container>
  );
}

// Styled Components
const Container = styled.div`
  position: fixed;
  left: 0;
  width: 300px;
  height: 100vh;
  background-color: #2d2c31;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding-top: 3rem;
`;

const Links = styled.div`
  margin-top: 3rem;
  width: 14rem;
`;

const LinkText = styled.p`
  color: #878791;
  margin-bottom: 3rem;
  outline: none;
`;
