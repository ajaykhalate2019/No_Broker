import React from 'react';
import './Footer.css';

const Footer =() => {
  return (
    <div className="footer-section">
    <div className="f-container">
        <div className="f-item">
            <h3>Find Property</h3>
            <p>Select from thousands of options, without brokerage.</p>
            <button>Find Now</button>
        </div>
        <div className="f-item">
            <h3>List Your Property</h3>
            <p>For free. Without any brokerage.</p>
            <button>Free Posting</button>
        </div>
    </div>
  
    <div className="footer-links">
        <a href="#">About Us</a>
        <a href="#">Careers</a>
        <a href="#">Terms & Conditions</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Testimonials</a>
        <a href="#">Sitemap</a>
        <a href="#">FAQs</a>
    </div>
  
    <div className="social-media">
        <a href="#"><i className="fa-brands fa-facebook"></i></a>
        <a href="#"><i className="fa-brands fa-square-x-twitter"></i></a>
        <a href="#"><i className="fa-brands fa-instagram"></i></a>
        <a href="#"><i className="fa-brands fa-linkedin"></i></a>
        <a href="#"><i className="fa-brands fa-youtube"></i></a>
    </div>
  
    <div className="copyright">
        &copy; 2013-24 NoBroker Technologies Solution Pvt. Ltd.
    </div>
  </div>
  )
}

export default Footer;