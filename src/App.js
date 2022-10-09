import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";
// pages
import Home from "./pages/Home";
import Photos from "./pages/Photos";
import Favorties from "./pages/Favorites";
import Search from "./pages/Search";
// components
import NavBar from "./components/NavBar/NavBar";
import { Nav } from "./components";

function App() {
  return (
    <Container>
      <Router>
        <Nav />
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/photos" component={Photos} />
        <Route path="/favorites" component={Favorties} />
        <Route path="/search" component={Search} />
      </Router>
    </Container>
  );
}

// Styled Components
const Container = styled.div`
  /* background: #26252a; */
  overflow: hidden;
`;

export default App;
