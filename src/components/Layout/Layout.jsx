import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { MainContainer, Header } from "./Layout.styled";

const Layout = () => {
  return (
    <MainContainer>
      <Header>
        <nav>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </Header>
      <Suspense>
        <Outlet />
      </Suspense>
    </MainContainer>
  );
};

export default Layout;
