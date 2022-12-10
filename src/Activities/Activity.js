import React from "react";
import ReactPlayer from "react-player";
import Grid from "@material-ui/core/Grid";
import Navactivity from "../Navbar/Nav-activity";
import Footer from "../Footer/footer";
import "./Activity.css";
import '../About/About.css'
const Activity = () => {
  return (
    <div>
      <section className="nav-activity">
        <Navactivity />
      </section>
      <section className='trustees'>
      <h2>Our Humanitarian aid is a means the Ezeagu Igbudu Association Toronto Canada gives back to our Ezeagu Communities in Nigeria, to promote growth and advancement of our people. 
Our main focus are towards Empowerments in the category of; the less privileged people that are in dire condition. Our relieve package is to help them find their footing in the society as 
we understand the Challenges/ Situations our people face on a daily basis.
 </h2>
 <br/>
 <h2 style={{color:'rgb(114, 48, 23)'}}>
 FUNDING
 </h2>
 <h2>
The source of  our humanitarian project funding at this stage are from  our honorable members of the association. We hope and look forward to finding an avenue to increase our funds to give more to our communities as it will provide greater opportunities for more people. Our  aim is  to take this project to the next level were we will be able to extend our Humanitarian aid towards Education System and more Youth Empowerment.
 </h2>
 <br/>
<h2 style={{color:'rgb(114, 48, 23)'}}>
ACHIEVEMENTS
</h2>
<h2>
In 2018, we were able to visit six Communities in Ezeagu. We provided a Relief funds that will help them start up a business, support their businesses.etc.
We were extremely overjoyed to put smiles in their faces and it became a motivator to us knowing that our people needs us. 
<br/>
Below are the pictures of our Humanitarian activities in 2018....
</h2>
      </section>
      <section className='activities'>

      <div className="humanservices">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={4} className="vid-cont">
            <iframe
              className="vid1"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/u-uFR0FsK7Q"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            {/* <ReactPlayer
              url="https://www.youtube.com/watch?v=u-uFR0FsK7Q"
              className="vid1"
            /> */}
          </Grid>
         
          <Grid item xs={12} sm={12} md={4} className="vid-cont">
            <iframe
              className="vid1"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/o2W9kVvCS6Q"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            {/* <ReactPlayer
              url="https://www.youtube.com/watch?v=o2W9kVvCS6Q"
              className="vid1"
            /> */}
          </Grid>
          <Grid item xs={12} sm={12} md={4} className="vid-cont">
            <iframe
              width="380"
              height="315"
              src="https://www.youtube.com/embed/ozKx4SdK0Rk"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              ></iframe>
            {/* <ReactPlayer
              url="https://www.youtube.com/watch?v=ozKx4SdK0Rk"
              className="vid1"
            /> */}
          </Grid>
          </Grid>
      </div>
            </section>
      <Footer />
    </div>
  );
};

export default Activity;
