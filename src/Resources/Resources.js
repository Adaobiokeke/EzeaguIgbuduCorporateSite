import React from "react";
import Navresource from "../Navbar/Nav-res";
import "./Resources.css";
import Lion from "../Assets/lioninthewild.jpg";
import Grid from "@material-ui/core/Grid";
import Constitution from "../Assets/constitution.jpg";
import Cert from "../Assets/of incorporation.png";
import Footer from "../Footer/footer";
import { resourcedata } from "../Resources/resourcedata";
const Resources = () => {
  return (
    <div>
      <section className="nav-res">
        <Navresource />
      </section>
      <section className="trustees">
        <h2 style={{fontFamily:'cursive',color:'rgb(35, 88, 88)'}}>
          OUR SOCIAL ACTIVITY <br/><br/>One of the Associations aims and objectives is to
          bring all Ezeagu Indigenous People together, to associate with your
          brothers and sisters away from home. We are each others support at all
          times.<br/> Ezeagu Igbudu Association Toronto Canada holds their Annual
          Picnic every Summer. It is an avenue for not only adults, to come and
          socialize but also our Children have the opportunity to witness their
          Father's culture rather than stories.<br/><br/> It is the height of our social
          activities as we do our best to include different cultural activities
          such as Yam roasting ( ihu ji), palm oil and oil bean sauce ( mmanu
          ukpaka), Cultural musics ( Ogene) and many more. We have various games
          that are very entertaining for all. <br/><br/>COME JOIN US <br/>EZEAGU IGBUDU KWENU !<br/><br/>
          Below are pictures of our Past Social activities...
        </h2>
      </section>
      <section class="picnic-grid">
        <Grid container spacing={3}>
          {resourcedata &&
            resourcedata.map((box, index) => (
              <Grid item xs={12} sm={6} md={3}>
                <div className="resgrid">
                  <img src={box.image} alt="images" className="mypix2" />
                  <h5>{box.name}</h5>
                </div>
              </Grid>
            ))}
        </Grid>
      </section>
      <Footer />
    </div>
  );
};

export default Resources;
