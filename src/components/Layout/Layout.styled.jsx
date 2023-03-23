import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const MainContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px 20px 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 5px;
  padding: 0 0 8px 0;
  margin-bottom: 16px;
  border-bottom: 2px solid black;

  > nav {
    display: flex;
    gap: 10%;
  }
`;

export const NavItem = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-size: 20px;
  font-weight: 700;

  &:hover {
    color: #708090;
  }

  &.active {
    color: #ff4500;
  }
`;
