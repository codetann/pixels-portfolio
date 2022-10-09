import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../context/Provider";
// components
import Photo from "../components/Photo/Photo";
import { data } from "../context/test.data";
import { Grid } from "../components";

export default function Home() {
  const { width, homePhotos } = useContext(AppContext);
  const mobileURL =
    "https://images.pexels.com/photos/1376201/pexels-photo-1376201.jpeg?cs=srgb&dl=pexels-daria-shevtsova-1376201.jpg&fm=jpg";
  const desktopURL =
    "https://images.pexels.com/photos/4905057/pexels-photo-4905057.jpeg?cs=srgb&dl=pexels-nick-bondarev-4905057.jpg&fm=jpg";

  return (
    <Container>
      <Grid photos={data.photos} />
      {/* <PhotosContainer
        style={{
          flexDirection: width >= 800 ? "row" : "column",
          flexWrap: width >= 800 ? "wrap" : "nowrap",
        }}
      >
        {data.photos.length > 1 &&
          data.photos.map((photo) => (
            <Photo
              key={photo.id}
              id={photo.id}
              height={photo.height}
              url={photo.src.original}
            />
          ))}
      </PhotosContainer> */}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 3rem;
`;

// Styled Components
const ImageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
`;

const PhotosContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
