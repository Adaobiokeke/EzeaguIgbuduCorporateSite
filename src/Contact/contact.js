import React from "react";
import "./contact.css";
import Grid from "@material-ui/core/Grid";
import Phone from "../Assets/contact-img.jpg";
import Tooltip from "@mui/material/Tooltip";
import Navc from "../Navbar/Nav-contact";
import Footer from "../Footer/footer";
const Contact = () => {
  return (
    <div>
      <Navc />
      <div className="contact">
        <div className="container">
          <div className="phone-grid">
            <img src={Phone} alt="phone-pix" className="phone" />
          </div>
          {/* <Grid xs={12} sm={12} md={1}></Grid> */}
          <div className="contact-det">
            <h2 className="contact-inv">
              We are available for discussions on support for our community and
             other ideas that can help us realise our vision for the association.
            </h2>

            <div className="email">
              <h3 clasName="email-inv">
                Sending us an email is the fastest way to get our attention for
                that roubust discussion:
                <button className="email-btn">
                  ezeaguigbudutorontocanada@gmail.com
                </button>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
