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
  box-shadow: 3px 3px 5px #696969;
  vertical-align: middle;
    transition: transform 450ms cubic-bezier(0, 0.110, 0.35, 2);
  &:hover {
    transform: scale(1.02);
    transition: transform  450ms cubic-bezier(0, 0.110, 0.35, 2);
  }
`;

export const CardImage = styled.img`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const CardName = styled.h3`
  padding: 4px;
  margin: 0px;
  color: black;
  text-align: center;
`;
