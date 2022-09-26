import React from 'react'
import './Navbar.css'
import Logo from '../Assets/lion.jpg'

const Navbar = () => {
  return (
    <div>
     <div className="navbar">
        <div className="logo-div">
        <img src={Logo} alt='logo' className='logo-img'/>
        <span>EzeaguIgbudu Association Canada</span>
        </div>
        <div className="navbar1">
            <button className= "nav-button">ABOUT.</button>
            <button className= "nav-button">Humaniterian Activities</button>
  
        </div>
        </div>
        </div>
  )
}

export default Navbar