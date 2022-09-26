import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css";
// import Slider from "../Slider/slider";
import Grid from "@material-ui/core/Grid";
// import Landingimg from '../Assets/picnic lion2.jpg'
import picnic1 from "../Assets/humanitarian collage.png";
import Footer from "../Footer/footer";

const homepage = () => {
  return (
    <div className="">
      <Navbar />
      <section className="activity">
      <Grid container spacing={2} >
        <Grid item xs={12} sm={12} md={6}>
          <h1>Ada</h1>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <img src={picnic1} alt="picnic-img" className="landing-img" />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <img src={picnic1} alt="picnic-img" className="landing-img" />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <h1>Ada</h1>
        </Grid>
      </Grid>
       </section>
      {/* <section className="carouse-sec">
        <Slider />
      </section> */}
      <Footer />
    </div>
  );
};

export default homepage;
