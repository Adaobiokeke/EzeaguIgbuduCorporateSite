import React from "react";
import Navresource from "../Navbar/Nav-res";
import "./Resources.css";
import Lion from "../Assets/lioninthewild.jpg";
import Grid from "@material-ui/core/Grid";
import Constitution from "../Assets/constitution.jpg";
import Cert from '../Assets/of incorporation.png'
import Footer from '../Footer/footer'
import {resourcedata} from '../Resources/resourcedata'
const Resources = () => {
  return (
    <div>
      <section className="nav-res">
        <Navresource />
      </section>
      <section className='res-sec'>
      <div className="resources">
        <div className="res-grid">
          <div className="const-grid">
            <img src={Constitution} alt="the Constitution" className="img-const"/>
           <div className="text-div"> 
            <h5>
              Our objective is to promote and protect the culture of Ezeagu
              Igbudu in particular and Enugu State, Nigeria and West Africa in
              general{" "}<br/>
            </h5>
            <a href='https://docs.google.com/document/d/1LyIcxyfARRk16Om45FVcjSI-9jKvKAxg1sNYJE8hTaU/edit?usp=sharing' target='_blank'>
              <h6>Read More...</h6>
            </a>
          </div>
          </div>
          <div className="const-grid">
            <img src={Constitution} alt="the Constitution" className="img-const"/>
            <h5>
              Our objective is to promote and protect the culture of Ezeagu
              Igbudu in particular and Enugu State, Nigeria and West Africa in
              general{" "}
            </h5>
          </div>
          <div className="const-grid">
            <img src={Cert} alt="the Constitution" className="img-const"/>
           <div className="text-div2"> 
            <h5>
              We are a fully registered Non for Profit Organisation.{" "}
            </h5>
            <a href='https://www.canva.com/design/DAFN_s0G-J0/ZRI7jDoKqq2-uhS42ZM3tg/view?utm_content=DAFN_s0G-J0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' target='_blank'>
              <h6>View here...</h6>
            </a>
            </div>
          </div>
        </div>
      </div>
      </section>
      <section class='picnic-grid'>
        <Grid container spacing={3}>
        {resourcedata && resourcedata.map((box,index) =>
        <Grid item xs={12} sm={6} md={3} >
          <div className='resgrid'>
          <img src={box.image} alt='images'className='mypix2' />
          <h5>{box.name}</h5>
          </div>
        </Grid>
        )}
        </Grid>

      </section>
      <Footer/>
    </div>
  );
};

export default Resources;
