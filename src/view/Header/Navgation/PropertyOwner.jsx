import React from 'react';
import './PropertyOwner.css';


function PropertyOwner() {
 const [whatsappUpdates, setWhatsappUpdates] = useState(true);
  const toggleWhatsappUpdates = () => {
    setWhatsappUpdates(!whatsappUpdates);
  };

  return (
    <div className="sell-or-rent-container">
      <h1>Sell or Rent your Property For Free</h1>
      <div className="sell-or-rent-content">
        {/* Left Section */}
        <div className="left-section">
          <h3>Why Post through us?</h3>
          <ul>
            <li>Zero Brokerage</li>
            <li>Faster Tenants</li>
            <li>10 lac tenants/buyers connections</li>
          </ul>
          <div className="testimonials">
            <h4>30 Lac+ Home Owners Trust Us</h4>
            <p>
              I posted a property ad online on NoBroker. Its an efficient real estate
              website because despite my busy schedule they did a great job of
              contacting me at the right times. To keep me updated they sent mails &
              messages. They found a great tenant for my rental property as per my demands.
            </p>
            <p><b>Aldrin</b> | Bangalore</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="right-section">
          <form>
            <div className="form-row">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
            </div>
            <div className="form-row">
              <div className="phone-input">
                <span>+91</span>
                <input type="text" placeholder="Mobile Number" />
              </div>
              <select>
                <option value="">Select City</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Chennai">Chennai</option>
              </select>
            </div>
            <div className="whatsapp-updates">
              <label>
                <input
                  type="checkbox"
                  checked={whatsappUpdates}
                  onChange={toggleWhatsappUpdates}
                />
                Get updates on <span>WhatsApp</span>
              </label>
            </div>
            <h4>Property type</h4>
            <div className="property-type">
              <button type="button" className="active">Residential</button>
              <button type="button">Commercial</button>
              <button type="button">Land/Plot</button>
            </div>
            <h4>Select Property Ad Type</h4>
            <div className="property-ad-type">
              <button type="button" className="active">Rent</button>
              <button type="button">Resale</button>
              <button type="button">PG/Hostel</button>
              <button type="button">Flatmates</button>
            </div>
            <button type="submit" className="submit-button">
              Start Posting Your Ad For FREE
            </button>
          </form>
        </div>
      </div>
      <div className="footer">
        <p>
          Give a missed call to <b>869-000-5267</b> to get help with your property listing
        </p>
      </div>
    </div>
  )
};

export default PropertyOwner;