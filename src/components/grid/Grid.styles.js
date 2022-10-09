import styled from "styled-components";

export const GridRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const GridColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 20rem;

  img {
    width: 100%;
  }
`;

export const GridItem = styled.img`
  width: 100%;
  height: ${({ height }) => height};
  object-fit: cover;
`;
