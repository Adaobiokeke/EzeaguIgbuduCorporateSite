import React from "react";
import ReactPlayer from "react-player";
import Grid from "@material-ui/core/Grid";
import Navactivity from "../Navbar/Nav-activity";
import Footer from "../Footer/footer";
import "./Activity.css";

const Activity = () => {
  return (
    <div>
      <section className="nav-activity">
        <Navactivity />
      </section>
      <div className="humanservices">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6}>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=u-uFR0FsK7Q"
              className="vid1"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} className="vid-text">
            <h3>
              "Ezeagu Igbudu rendering humanitarian assistance to a villager"
            </h3>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6}>
            <h3>
              "Ezeagu Igbudu rendering humanitarian assistance to a villager"
            </h3>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=o2W9kVvCS6Q"
              className="vid1"
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6}>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=ozKx4SdK0Rk"
              className="vid1"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <h3>
              "Ezeagu Igbudu rendering humanitarian assistance to a villager"
            </h3>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
};

export default Activity;
