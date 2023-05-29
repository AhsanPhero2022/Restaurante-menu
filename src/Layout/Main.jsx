import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";

import NavItem from "../pages/Shared/Footer/Navbar/NavItem";

const Main = () => {
  const location = useLocation();
  const isLogin =
    location.pathname.includes("login") || location.pathname.includes("signup");

  return (
    <div>
      {isLogin || <NavItem></NavItem>}
      <Outlet></Outlet>
      {isLogin || <Footer></Footer>}
    </div>
  );
};

export default Main;
