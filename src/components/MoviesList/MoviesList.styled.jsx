import styled from "@emotion/styled";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  gap: 16px;
  justify-content: center;
`;

export const MoviesCard = styled.div`
  border: 1px solid: #fff;
  background-color: #fff;
  border-radius: 8px;
  transform: scale(1);
  &:hover {
    transform: scale(1.05);
  }
`;

export const CardImage = styled.img`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const CardName = styled.h3`
  padding: 4px;
  margin: 0px;
  color: #fff;
  text-align: center;
`;
