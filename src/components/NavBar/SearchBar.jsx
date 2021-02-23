import React, { useContext, useRef } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { AppContext } from "../../context/Provider";

function SearchBar({ history }) {
  const { setToggled, setQuery } = useContext(AppContext);
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setToggled(false);
    setQuery(inputRef.current.value);
    history.push({
      pathname: "/search",
    });
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Icon className="fas fa-search"></Icon>
        <Input ref={inputRef} type="text" placeholder="Search" />
      </form>
    </Container>
  );
}

export default withRouter(SearchBar);

// Styled Components
const Container = styled.div`
  width: 14rem;
  height: 2.5rem;
  background: #444449;
  border-radius: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
`;

const Icon = styled.i`
  color: #c9c9c9;
  text-align: center;
  width: 30%;
  height: 100%;
`;

const Input = styled.input`
  height: 100%;
  width: 70%;
  background: none;
  border-radius: 0 2rem 2rem 0;
  border: none;
  outline: none;
  color: white;
`;
