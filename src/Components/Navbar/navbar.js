import { React } from "react";
import "./navbar.css";
// import { DarkMode } from "../Theme/theme";
import { Link, Outlet } from "react-router-dom";

function Navbar() {
  //   const { ToggleSwitch, darkMode } = useContext(DarkMode);
  return (
    <div>
      <div className="navbar">
        <Logo />
        <div className="navbar-right">
          {/* <label className="switch">
          <input type="checkbox"></input>
          <span class="slider-round"></span>
        </label> */}
          <div className="nv-text">
            <Link to="/Products">Product</Link>
          </div>
          <div className="nv-text">
            <Link to="/Service">Services</Link>
          </div>
          <div className="nv-text">Contact</div>
          <div className="nv-text">
            <Link to="/Login">Login</Link>
          </div>
          <div className="nv-tex">
            <p>
              <Link to="/user/Post">Get Access</Link>
            </p>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
function Logo() {
  return (
    <Link to="/main">
      <div className="navbar-left">
        <p>Team</p>
        <div></div>
      </div>
    </Link>
  );
}
export default Navbar;
