import styled from "styled-components";

export const GridRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  min-height: 100vh;
  gap: 1rem;
  padding: 2rem 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const GridColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  gap: 1rem;
`;

export const GridItem = styled.img`
  width: 100%;
  height: 100%;
  height: ${({ height }) => height || "20rem"};
  border-radius: 0.5rem;
  cursor: pointer;
  /* object-fit: cover; */
`;
