import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { AppContext } from "../../context/Provider";

export default function Photo({ id, height, url }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const { saveFavorite, favorites, deleteFavorite } = useContext(AppContext);

  // Checks if the photos id is already in localstorage.
  // If yes, it will set favorite to TRUE
  useEffect(() => {
    console.log(url);
    for (let i = 0; i < favorites.length; i++) {
      if (favorites[i].id === id) {
        setIsFavorite(true);
      }
    }
  }, []);

  // Checks if the photo is already favorited.
  // If it is it will remove it from localstorage and reset the styling
  const handleClick = () => {
    if (isFavorite) {
      deleteFavorite(id);
      setIsFavorite(false);
    } else {
      setIsFavorite(true);
      saveFavorite(id, height, url);
    }
  };

  return (
    <Container
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&h=650&w=940")`,
        backgroundPosition: "center",
        backgroundSize: "auto",
        height: height / 12,
        width: "350px",
      }}
    >
      <Buttons>
        <Favorite
          className={`${isFavorite ? "fas fa-heart" : "far fa-heart"}`}
          style={{
            fill: isFavorite ? "red" : "white",
          }}
          onClick={handleClick}
        ></Favorite>
        <a href={url} download>
          <Download className="fas fa-download"></Download>
        </a>
      </Buttons>
    </Container>
  );
}

// 6805857

// Styled Components
const Container = styled.div`
  margin: 1rem 0.5rem;
  display: flex;
  align-items: flex-end;
`;

const Buttons = styled.div`
  width: 100%;
  height: 3rem;
  background: rgba(23, 23, 24, 0.726);
  display: flex;
  align-items: center;
  padding-left: 1rem;
`;

const Favorite = styled.i`
  font-size: 1.5rem;
  color: #f53434;
  margin-right: 1rem;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
  transition: 0.3s;
`;

const Download = styled.i`
  font-size: 1.5rem;
  color: #ffffff;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
  transition: 0.3s;
`;
