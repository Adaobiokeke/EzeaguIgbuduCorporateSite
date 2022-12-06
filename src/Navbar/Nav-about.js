import React from "react";
import "./Navbar.css";
import Logo from "../Assets/lion.jpg";
import { Link } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
          <Link to="/">
        <div className="logo-div">
        <HomeIcon className="home-logo"/>
          <button className="nav-button1">EzeaguIgbudu Association Canada</button>
        </div>
        </Link>
        <div className="navbar1">
          <Link to="/activity">
            <button className="nav-button">Humanitarian Activities</button>
          </Link>
          <Link to="/resources">
            <button className="nav-button">Resources</button>
          </Link>
          <Link to="/contact">
            <button className="nav-button">Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
