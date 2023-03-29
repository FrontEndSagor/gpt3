import React from 'react'
import './navbar.css';
import logo from '../../assets/logo.svg'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
function Navbar() {
  return (
    <div className='gpt3__navbar'>
      <div className="gpt3__navbar-links">
        <div className="gpt3-navbar-links__logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  )
}

export default Navbar