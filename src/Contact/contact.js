import React from "react";
import "./contact.css";
import Grid from "@material-ui/core/Grid";
import Phone from "../Assets/contact-img.jpg";
import Tooltip from "@mui/material/Tooltip";
import Navc from '../Navbar/Nav-contact'
import Footer from '../Footer/footer'
const Contact = () => {
  return (
    <div>
      <Navc/>
    <div className="contact">
      <Grid container classname="container">
      <Grid xs={12} sm={6} md={4} className="phone-grid">
          <img src={Phone} alt="phone-pix" className="phone" />
        </Grid>
        {/* <Grid xs={2} sm={2} md={1}></Grid> */}
        <Grid xs={12} sm={6} md={6} className="contact-det">
          <h2>
            We are available for discussions on support for our community and a cup of hot
            chocolate!
          </h2>
          {/* <div className="whatsapp-div">
          <h3>Call us on </h3>
          </div> */}
          {/* <div className="whatsapp">
          <h2>If talking is not your thing...send us an email on!</h2>
          <Tooltip title="Click me!" arrow>
          <a
            href="https://wa.me/14373455804"
            className="whatsapp_float"
            rel="noreferrer"
            target="_blank"
          >
            <i class="fa fa-whatsapp whatsapp-icon"></i>
          </a>
          </Tooltip>
          </div> */}
          <div className="email">
          <h3 clasName="email">
            Sending us as email is the fastest way to get our attention for that roubust discussion: 
            <button className="email">ezeaguigbudutorontocanada@gmail.com</button>
          </h3>
          </div>
          {/* <div className="linkedin">
          <Tooltip title="Click me!" arrow>
            <a
              href="https://www.linkedin.com/in/adaobi-okeke-65025258/"
              target="_blank"
              className
              rel="noreferrer"
            >
              <button className='linkedin-btn'>Connect with me on LinkedIn</button>
            </a>
          </Tooltip>
          </div> */}
        </Grid>
  
      </Grid>
    </div>
    <Footer />
    </div>
  );
};

export default Contact;
