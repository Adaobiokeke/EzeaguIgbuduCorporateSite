import React, { useState}from "react";
import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";



const footer = () => {
  return (
  
    <footer className="footer-container">
        <div className="icon">
          <h4>Connect With Us</h4>
        <a
            href="https://www.facebook.com/groups/553122378471956/?ref=share"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon className="icons" />
          </a>
        </div>
        <div className="email">
          <h4 style={{color:'black'}}>Contact Us</h4>
            <h4 style={{color:'black'}}>ezeaguigbudutorontocanada@gmail.com</h4>
        </div>
       
    </footer>
  );
};

export default footer;
