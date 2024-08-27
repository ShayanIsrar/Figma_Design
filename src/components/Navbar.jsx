import React from 'react'
import logo from '../assets/brand_logo.png'
const Navbar = () => {
  return (
    <div>
      <div className="header">
        <div className="img">
        <img src={logo} alt="" />
        </div>
        <div className="nav">
            <li className='list'>MENU</li>
            <li className='list'>LOCATION</li>
            <li className='list'>ABOUT</li>
            <li className='list'>CONTACT</li>
        </div>
        <div className='button'>
            <button className="btn">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
