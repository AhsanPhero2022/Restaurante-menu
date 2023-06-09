import {
  FaShoppingCart,
  FaWallet,
  FaCalendarAlt,
  FaHome,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();

  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-[#d1a054]">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 ">
          <li>
            <NavLink>
              <FaHome></FaHome>User Home
            </NavLink>
          </li>
          <li>
            <NavLink>
              <FaCalendarAlt></FaCalendarAlt> Reservation
            </NavLink>
          </li>
          <li>
            <NavLink>
              <FaWallet></FaWallet>Payment History
            </NavLink>
          </li>
          <li className="flex">
            <NavLink to="/dashboard/mycart">
              <FaShoppingCart></FaShoppingCart>My Cart
              <span className=" badge badge-secondary">
                +{cart?.length || 0}
              </span>
            </NavLink>
          </li>

          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome>Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <FaHome></FaHome>Our Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <FaHome></FaHome>Our Food
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
