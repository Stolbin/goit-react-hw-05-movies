import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { FcLeft } from "react-icons/fc";

export const BoxRaiting = styled.div`
  margin: 5px 0;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: flex-start;
  gap: 10px;
`;
export const ScoresTitle = styled.p`
  font-size: 18px;
  font-weight: 700;
`;
export const CircleRating = styled.div`
  position: relative;
  width: 60px;
  height: 22px;
  font-size: 20px;
  font-weight: 700;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  background-image: linear-gradient(
    108deg,
    rgba(242, 245, 139, 1) 17.7%,
    rgba(148, 197, 20, 0.68) 91.2%
  );
  border-radius: 50px;
`;
export const LineRating = styled.div``;
export const Raiting = styled.p`
  padding: 5px 0 7px 0;
  font-size: 16px;
  font-weight: 700;
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: left center;
  transform: translateX(-50%) translateY(-50%);
`;
export const MoviesCard = styled.section``;
export const BtnGoBack = styled(NavLink)`
  width: 120px;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: flex-start;
  gap: 10px;
  font-size: 16px;
  font-weight: 700;
  color: rgb(60, 56, 56);
  padding: 8px 14px;
  background-color: #fff;
  border-radius: 25px;
  margin-bottom: 20px;
  transition: all 1000ms cubic-bezier(0, 0.11, 0.35, 2);
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  &:hover {
    background-color: #dbdbdb;
    transition: all 1500ms cubic-bezier(0, 0.11, 0.35, 2);
  }
`;
export const BtnGoBackText = styled.p``;
export const Icon = styled(FcLeft)`
  fill: #fff;
  margin-top: 2px;
`;
export const CardImage = styled.img`
  border-radius: 8px;
  box-shadow: 3px 3px 5px #696969;
  margin-bottom: 15px;
`;
export const CardInfo = styled.div``;
export const MoviesDetailsInfoText = styled.p`
  font-size: 19px;
  font-weight: 700;
  color: black;
  margin: 20px 0 20px 0;
`;
export const MoviesDetailsInfo = styled.ul`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
  gap: 15px;
`;
export const GenresTitle = styled.p`
  font-style: italic;
  font-weight: 600;
`;
export const MoviesDetailsInfoItem = styled.button`
  width: 150px;
  height: 50px;
  padding: 10px 20px;
  border-radius: 25px;
  background-color: #fff;
  box-shadow: 10px 10px 21px -9px rgba(0, 0, 0, 0.4);
  transition: all 1000ms cubic-bezier(0, 0.11, 0.35, 2);
  &:hover {
    background-color: #dbdbdb;
    transition: all 2000ms cubic-bezier(0, 0.11, 0.35, 2);
  }
`;
export const BtnMovieDetText = styled.p`
  font-family: "Raleway", sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #006400;
  text-shadow: 1px 1px 1px #6b8e23;
  transition: all 900ms ease;
  &:hover {
    color: #0000cd;
    transition: all 900ms ease;
  }
`;
export const MoviesDetailsLink = styled(NavLink)``;
