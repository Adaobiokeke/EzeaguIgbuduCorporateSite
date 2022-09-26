// import Carousel from 'react-elastic-carousel'
// import Item from './Item'
// import item1 from '../Assets/mypix.png'
// import item2 from '../Assets/mypix.png'
// import item4 from '../Assets/mypix.png'
// // import item5 from '../Assets/lion.jpg'




// const breakPoints = [
//   {width:'1', itemsToShow:1},
//   {width:300, itemsToShow:1},
//   {width:450, itemsToShow:1},
//   {width:768, itemsToShow:3},
//   {width:1200, itemsToShow:4},
// ]

// function Slider(){

//   return(
//     <>
//     <div>
//       <Carousel breakPoints = {breakPoints} autoScroll>
//       {/* {images.map((image)=><img src={image.image} alt='carousel-img'/>)} */}
//       <Item>
//         <img src={item1} alt='' style={{width:'100%',borderRadius: '10px'}}/>
//       </Item>
//       <Item >
//         <img src={item2} alt='' style={{width:'100%',borderRadius: '10px'}}/>
//       </Item>
//       <Item>
//         <img src={item4} alt='' style={{width:'100%',borderRadius: '10px'}}/>
//       </Item>
//       </Carousel>
//     </div>
//     </>
//   )
// }
// export default Slider;
import React from 'react'
import Grid from '@material-ui/core/Grid'
import item1 from '../Assets/mypix.png'
import item2 from '../Assets/mypix.png'
import item4 from '../Assets/mypix.png'
const trusteeslider = () => {
  return (
    <div>
        <Grid container spacing={3} >
            <Grid item xs={12} sm={6} md={4}>
                <img src ={item1} alt='mypix' className='mypix'/>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <img src ={item2} alt='mypix' className='mypix'/>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <img src ={item4} alt='mypix' className='mypix'/>
            </Grid>
        </Grid>
    </div>
  )
}

export default trusteeslider