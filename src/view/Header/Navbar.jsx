import React from 'react';
import './Navbar.css'
import {Link} from 'react-router-dom'
import Pho from '../../assets/logo.png'

const Navbar = ()=> {
  return (
    <>
        <nav className="navbar">
    <div className="logo">
      <img src={Pho} alt="Logo" className="logo-image" />
      <span><b>NO</b>BROKER</span>
    </div>
    <ul className="nav-links">
      <li>
        <button className="pay-rent-btn">
        <Link to="/pay-rent">Pay Rent</Link>
        </button>
        </li>

      <li>
        <button className="property-btn">
      <Link to="/property-owners" className="link-button">For Property Owners</Link>
      </button>
      </li>

      <li>
        <Link to="/signup">Sign up</Link>
        </li>

      <li>
      <Link to="/login">Log in</Link>
      </li>

      <li>
        <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
       ☰ Menu
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
      <button className="dropdown-item" type="button">Action</button>
      
      </div>
      </div>
      </li>
    </ul>
  </nav>
    </>
  )
}

export default Navbar;