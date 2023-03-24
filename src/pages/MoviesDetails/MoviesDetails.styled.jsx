import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { FcLeft } from "react-icons/fc";

export const MoviesCard = styled.section``;
export const BtnGoBack = styled(NavLink)`
  padding: 8px 0 0 5px;
`;
export const Icon = styled(FcLeft)``;
export const CardImage = styled.img`
  border-radius: 8px;
  box-shadow: 3px 3px 5px #696969;
  margin-bottom: 15px;
`;
export const CardInfo = styled.div``;
export const MoviesDetailsInfo = styled.ul`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;
  gap: 15px;
`;
export const GenresTitle = styled.p`
  font-style: italic;
  font-weight: 600;
`;
export const MoviesDetailsInfoText = styled.p`
  font-size: 18px;
  font-weight: 600;
  padding: 10px;
  color: black;
`;
export const MoviesDetailsInfoItem = styled.li``;
export const MoviesDetailsLink = styled(NavLink)`
  font-family: "Raleway", sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #006400;
  transition: color 2000ms cubic-bezier(0, 0.11, 0.35, 2);
  text-shadow: 1px 1px 1px #6b8e23;
  &:hover {
    color: #0000cd;
    transition: color 2000ms cubic-bezier(0, 0.11, 0.35, 2);
  }
`;
