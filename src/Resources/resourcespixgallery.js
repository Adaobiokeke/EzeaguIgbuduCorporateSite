import React from 'react';
import Grid from "@material-ui/core/Grid";
import {resourcedata} from "../Resources/resourcedata";

const Resourcesgallery = () => {
return(
    <section class="picnic-grid">
        <Grid container spacing={3}>
          {resourcedata &&
            resourcedata.map((box, index) => (
              <Grid item xs={12} sm={6} md={4}>
                <div className="resgrid">
                  <img src={box.image} alt="images" className="mypix2" />
                  <h5>{box.name}</h5>
                </div>
              </Grid>
            ))}
        </Grid>
      </section>
)
}
