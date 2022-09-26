import React from "react";
import "./About.css";
import Navabout from "../Navbar/Nav-about";
import Trustees from "../Slider/trusteeslider.js";
import { trusteesdatas } from "./tusteesdatas";
import Grid from "@material-ui/core/Grid";
import { memberdatas } from "./memberdatas";
import Community from "../Assets/about-img.jpg";
const About = () => {
  return (
    <div className="aboutus">
      <section className="nav-about">
        <Navabout />
      </section>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6}>
          <img src={Community} alt="community" className="community" />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <section className="aboutus1">
            <h2>
              Ezeagu Igbudu Association Toronto Canada is a non-profit oriented
              organisation that is based in Canada,
              <br /> we are a group of brothers and sisters from different parts
              of Ezeagu. We look to promote our culture by promoting our
              heritage, our cultural values, by providing support to one another
              and by empowering our community. NWANNE DI NA MBA! <br /> We have
              the following objectives;
            </h2>
            <ol>
              <li>
                To unite all indigenous members of Ezeagu in Toronto Canada, and
                bring us under one umbrella, for the purpose of getting involved
                in day to day activities that are happening in Ezeagu, and
                assist one another in Canada.
              </li>
              <li>
                To get fully involved in the process of community development
                through the various Humanitarian services we provide to our less
                privileged brothers and sisters in Nigeria
              </li>
              <li>
                To conduct social gathering of our people in Toronto Canada, in
                other to unit our families, and future generations, and also
                promote our culture in Canada.
              </li>
            </ol>
          </section>
        </Grid>
      </Grid>
        <section className="trustees">
        <h1>Our Trustees</h1>
      <Grid container spacing={3}>
      {trusteesdatas && trusteesdatas.map((box,index) =>
        <Grid item xs={12} sm={6} md={4}>
           <img src={box.image} alt='images'className='mypix' />
        </Grid>
      )}
      </Grid>
      <h1>Our Members</h1>
      <Grid container spacing={3}>
        {memberdatas && memberdatas.map((box,index) =>
        <Grid item xs={12} sm={6} md={3} >
          <div className='membergrid'>
          <img src={box.image} alt='images'className='mypix1' />
          <h5>{box.name}</h5>
          </div>
        </Grid>
        )}
        </Grid>
      </section>
      {/* <Grid container spacing={3}>
        {trusteesdatas && trusteesdatas.map((box,index) =>
        <Grid item xs={12} sm={6} md={4}>
          <img src={box.image} alt='images'className='mypix' />
        </Grid>
        )}
        </Grid>
        <h1>
          Our Members
        </h1>
         */}
    </div>
  );
};

export default About;
