import React, { useContext } from "react";
import { AppContext } from "../context/Provider";
import styled from "styled-components";
// components
import Photo from "../components/Photo/Photo";

export default function Favorites() {
  const { favorites, width } = useContext(AppContext);

  return (
    <Container>
      <h1 style={{ textAlign: "center", marginBottom: "4rem", color: "white" }}>
        Favorites
      </h1>
      <PhotosContainer
        style={{
          flexDirection: width >= 800 ? "row" : "column",
          flexWrap: width >= 800 ? "wrap" : "nowrap",
        }}
      >
        {favorites.length >= 1 &&
          favorites.map((fav) => (
            <Photo key={fav.id} id={fav.id} height={fav.height} url={fav.url} />
          ))}
      </PhotosContainer>
    </Container>
  );
}

// Styled Components
const Container = styled.div`
  padding-top: 10rem;
  width: 100%;
`;

const PhotosContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
