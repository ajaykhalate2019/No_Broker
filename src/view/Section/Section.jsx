import React from 'react';
import './Section.css';

const Section = () => {
  return (
    <>
      <div className="header">
        <h1>World's Largest NoBrokerage Property Site</h1>
        <div className="guarantee">🏠 Home Interiors | 🔒 45-Days Guarantee</div>
      </div>
      <div className="search-container">
        <div className="tabs">
          <button className="active">Buy</button>
          <button>Rent</button>
          <button>Commercial</button>
        </div>
        <div className="search-bar">
          <select>
            <option value="bangalore">Bangalore</option>
            <option value="mumbai">Mumbai</option>
            <option value="delhi">Delhi</option>
          </select>
          <input type="text" placeholder="Search up to 3 localities or landmarks" />
          <button className="search-button">Search</button>
        </div>
        <div className="search-bar2">
          <div>
            <input type="radio" id="full-house" name="type" defaultChecked />
            <label htmlFor="full-house">Full House</label>
            <input type="radio" id="land-plot" name="type" />
            <label htmlFor="land-plot">Land/Plot</label>
          </div>
          <select>
            <option value="bhk-type">BHK Type</option>
            <option value="1bhk">1 BHK</option>
            <option value="2bhk">2 BHK</option>
          </select>
          <select>
            <option value="property-status">Property Status</option>
            <option value="new">New</option>
            <option value="resale">Resale</option>
          </select>
          <label>
            <input type="checkbox" /> New Builder Projects
          </label>
        </div>
      </div>

      <div className="post-free">
        <p>----- Are you a Property Owner? -----</p>
        <button>Post Free Property Ad</button>
      </div>

      <div className="eligibility">
        <p>
          Do you know how much <strong>loan</strong> you can get? Get maximum with <strong>NoBroker</strong>
        </p>
        <button>Check Eligibility</button>
      </div>
    </>
  );
};

export default Section;