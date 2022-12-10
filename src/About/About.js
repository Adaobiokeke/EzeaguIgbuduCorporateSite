import React from "react";
import "./About.css";
import Navabout from "../Navbar/Nav-about";
import Trustees from "../Slider/trusteeslider.js";
import { trusteesdatas } from "./tusteesdatas";
import ReactPlayer from "react-player";
import Footer from '../Footer/footer'
import Constitution from "../Assets/constitution.jpg";
import Cert from "../Assets/of incorporation.png";

import Grid from "@material-ui/core/Grid";
import { memberdatas } from "./memberdatas";
import Community from "../Assets/about-img.jpg";
const About = () => {
  return (
    <div className="aboutus">
      <section className="nav-about">
        <Navabout />
      </section>
      {/* <div>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12}>
            <ReactPlayer
            url=""/>
          </Grid>
        </Grid>
      </div> */}
     
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6}>
          <img src={Community} alt="community" className="community" />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <section className="aboutus1">
            <h2 className="proverb">
              Ezeagu Igbudu Association Toronto Canada is a non-profit oriented
              organisation that is based in Canada,
              <br /> we are a group of brothers and sisters from different parts
              of Ezeagu. We look to promote our culture by promoting our
              heritage, our cultural values, by providing support to one another
              and by empowering our community. NWANNE DI NA MBA! <br /> We have
              the following objectives;
            </h2>
            <ol style={{color:'rgb(35, 88, 88)'}}>
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
        <h1 style={{color:'rgb(35, 88, 88)'}}>Our Trustees</h1>
      <Grid container spacing={3}>
      {trusteesdatas && trusteesdatas.map((box,index) =>
        <Grid item xs={12} sm={6} md={4}>
           <img src={box.image} alt='images'className='mypix' />
           <div className='nametag'>
           <p>{box.details}</p>
           <p>{box.title}</p>
           </div>
        </Grid>
      )}
      </Grid>
      {/* <h1>Our Members</h1> */}
      {/* <Grid container spacing={3}>
        {memberdatas && memberdatas.map((box,index) =>
        <Grid item xs={12} sm={6} md={3} >
          <div className='membergrid'>
          <img src={box.image} alt='images'className='mypix1' />
          <h5>{box.name}</h5>
          </div>
        </Grid>
        )}
        </Grid> */}
      </section>
      <section className="res-sec">
        <div className="resources">
          <div className="res-grid">
            <div className="const-grid">
              <img
                src={Constitution}
                alt="the Constitution"
                className="img-const"
              />
              <div className="text-div">
                <h5>
                  Our objective is to promote and protect the culture of Ezeagu
                  Igbudu in particular and Enugu State, Nigeria and West Africa
                  in general <br />
                </h5>
                <a
                  href="https://docs.google.com/document/d/1LyIcxyfARRk16Om45FVcjSI-9jKvKAxg1sNYJE8hTaU/edit?usp=sharing"
                  target="_blank"
                >
                  <h6>Read More...</h6>
                </a>
              </div>
            </div>
            <div style={{paddigTop:'50%',textAlign: "center"}} >
            <h5 style={{fontSize:'35px',color:'rgb(35, 88, 88)',fontFamily:'cursive'}}>
              View Our Constitution
            </h5>
          </div>
            <div className="const-grid">
              <img src={Cert} alt="the Constitution" className="img-const" />
              <div className="text-div2">
                <h5>We are a fully registered Non for Profit Organisation. </h5>
                <a
                  href="https://www.canva.com/design/DAFN_s0G-J0/ZRI7jDoKqq2-uhS42ZM3tg/view?utm_content=DAFN_s0G-J0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                  target="_blank"
                >
                  <h6>View here...</h6>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
         <Footer/>
    </div>
  );
};

export default About;
