import { React } from "react";
import "./navbar.css";  
import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <Logo />
        <div className="navbar-right">
          <div className="nv-text">
            <Link to="/Blog">Product</Link>
          </div>
          <div className="nv-text">
            <Link to="/Service">Services</Link>
          </div>
          <div className="nv-text">Contact</div>
          <div className="nv-tex">
            <p>
              <Link to="/post/:id">Get Access</Link>
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
