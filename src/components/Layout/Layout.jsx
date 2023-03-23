import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { MainContainer, Header, NavItem } from "./Layout.styled";

const Layout = () => {
  return (
    <MainContainer>
      <Header>
        <nav>
          <NavItem to="/" end>
            Home
          </NavItem>
          <NavItem to="/movies">Movies</NavItem>
        </nav>
      </Header>
      <Suspense>
        <Outlet />
      </Suspense>
    </MainContainer>
  );
};

export default Layout;
