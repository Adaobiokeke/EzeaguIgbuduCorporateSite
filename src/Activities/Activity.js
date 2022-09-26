import React from "react";
import ReactPlayer from "react-player";
import Grid from "@material-ui/core/Grid";
import Navactivity from "../Navbar/Nav-activity";
import './Activity.css'



const Activity = () => {
  return (
    <div>
      <section className="nav-activity">
        <Navactivity />
      </section>
      <Grid container spacing={3} className="grid">
        <Grid item xs={12} sm={12} md={6} className="container">
          <ReactPlayer url="https://www.youtube.com/watch?v=u-uFR0FsK7Q" className="vid1"/>
        </Grid>

        <Grid item xs={12} sm={12} md={6} className="container1">
          <section className="humanservices">
            <h2>"Ezeagu Igbudu rendering humanitarian assistance to a villager"</h2>
          </section>
        </Grid>
      </Grid>
    </div>
  );
};

export default Activity;
