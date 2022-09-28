import React from "react";
import "./footer.css";
import Grid from "@material-ui/core/Grid";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";



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
          <h4>Contact Us</h4>
            <h4>ezeaguigbudutorontocanada@gmail.com</h4>
        </div>
        {/* <div>
          <h4>Copyright@2022,EzeaguIgbuduAssociationTorontoCanada</h4>
        </div> */}
    </footer>
  );
};

export default footer;
