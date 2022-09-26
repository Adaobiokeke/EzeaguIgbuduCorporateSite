import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

// import Logo from '../Assets/lion.jpg'

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="logo-div">
          {/* <img src={Logo} alt='logo' className='logo-img'/> */}
          <Link to="/">
            <button className="nav-button">
              EzeaguIgbudu Association Canada
            </button>
          </Link>
        </div>
        <div className="navbar1">
          <Link to="/about">
            <button className="nav-button">ABOUT.</button>
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
