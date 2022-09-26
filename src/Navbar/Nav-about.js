import React from "react";
import "./Navbar.css";
import Logo from "../Assets/lion.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="logo-div">
          {/* <img src={Logo} alt="logo" className="logo-img" /> */}
          <Link to="/">
          <button className="nav-button">EzeaguIgbudu Association Canada</button>
        </Link>
        </div>
        <div className="navbar1">
          <Link to="/activity">
            <button className="nav-button">Humanitarian Activities</button>
          </Link>
          <Link to="/resources">
            <button className="nav-button">Resources</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
