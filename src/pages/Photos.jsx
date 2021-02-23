import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/Provider";
import styled from "styled-components";
import axios from "axios";
// components
import Photo from "../components/Photo/Photo";

export default function Favorites() {
  const { width } = useContext(AppContext);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(2);

  useEffect(() => {
    const URL = `https://api.pexels.com/v1/curated?page=${page}per_page=20`;
    const CONFIG = {
      headers: {
        Accept: "application/json",
        Authorization: process.env.REACT_APP_API_KEY,
      },
    };
    axios
      .get(URL, CONFIG)
      .then((res) => {
        setData(res.data.photos);
      })
      .catch((error) => alert(error));
  }, [page]);

  const handleNext = () => {
    setPage(page + 1);
  };

  const handlePrev = () => {
    setPage(page - 1);
  };

  return (
    <Container>
      <h1
        id="header"
        style={{ textAlign: "center", marginBottom: "4rem", color: "white" }}
      >
        Photos
      </h1>
      <PhotosContainer
        style={{
          flexDirection: width >= 800 ? "row" : "column",
          flexWrap: width >= 800 ? "wrap" : "nowrap",
        }}
      >
        {data.length >= 1 &&
          data.map((photo) => (
            <Photo
              key={photo.id}
              id={photo.id}
              height={photo.height}
              url={photo.src.original}
            />
          ))}
      </PhotosContainer>
      <Buttons>
        {page > 2 && (
          <Button href="#header" onClick={handlePrev}>
            Prev Page
          </Button>
        )}
        <Button href="#header" onClick={handleNext}>
          Next Page
        </Button>
      </Buttons>
    </Container>
  );
}

// Styled Components
const Container = styled.div`
  padding-top: 10rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const PhotosContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Buttons = styled.div`
  width: 20rem;
  margin: 1rem 0 2rem 0;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.a`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.2rem;
  background: #444449;
  color: white;
  text-decoration: none;
  cursor: pointer;
`;
