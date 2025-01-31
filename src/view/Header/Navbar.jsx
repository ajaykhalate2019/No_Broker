import React from 'react';
import './Navbar.css'
import {Link} from 'react-router-dom';
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

      <li>  <Link to="/PayRent">
      <button className="pay-rent-btn">Pay Rent</button>
      </Link>
      </li>

      <li> <Link to="/PropertyOwner">
      <button className="property-btn">For Property Owners</button>
      </Link>
      </li>

      <li>
      <Link to="/Sign_up">Sign up</Link>
        </li>

      <li>
      <Link to="/Log_in">Log in</Link>
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
  );
};
export default Navbar;