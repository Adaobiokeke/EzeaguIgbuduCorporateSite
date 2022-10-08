import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css";
import Slider from "../Slider/slider";
import Grid from "@material-ui/core/Grid";
// import Landingimg from '../Assets/picnic lion2.jpg'
// import picnic1 from "../Assets/humanitarian collage.png";
import Footer from "../Footer/footer";
import Landingimg from '../Assets/lioninthejungle.jpg'

const homepage = () => {
  return (
    <div className="">
      <Navbar />
      <section className="activity">
        <div>
          <img src={Landingimg} alt='landing-img' className='landing-img' />
          </div>
          <div className="landing-title">
          <p >
            EzeaguIgbudu Association Toronto Canada
          </p>
          </div>
      </section>
      <Footer />
    </div>
  );
};

export default homepage;
