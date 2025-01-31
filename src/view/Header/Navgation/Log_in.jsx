import React, { useState } from 'react';
import './Log_in.css';

function Log_in() {
  const[isVisible,setIsVisible] = useState(true);
//      const closeModal = () => {
//     const overlay = document.getElementById('overlay');
//     if(overlay) {
//         overlay.style.display = 'none';
//     }
// };

  return (
    <>
    {isVisible && (
          <div className="overlay" id="overlay">
          <div className="modal">
            <button className="close-button" onclick={closeModal()}>x</button>
            <div className="modal-content">
              <h2>Login / Sign up</h2>
              <p>✔ Zero Brokerage.<br/>✔ Thousands of new listings daily.<br/>✔ 100 Cr+ Brokerage saved monthly.</p>
              <div className="input-section">
                <label htmlFor="phone-number">Enter phone to continue</label>
                <div className="phone-input">
                  <span>+91</span>
                  <input type="text" id="phone-number" placeholder="Enter Mobile Number" />
                </div>
              </div>
              <button className="continue-button">Continue</button>
              <p className="terms">By continuing, you agree to our <a href="#">Terms & Conditions</a></p>
            </div>
          </div>
        </div>
    )}
  </>
  )
};

export default Log_in