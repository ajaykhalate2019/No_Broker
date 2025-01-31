import React from 'react';
import './PayRent.css'

function PayRent() {
  return (
    <>
    <div className="container">
      <h1>Payments via Credit Card</h1>
      <button className="start-payment-button">START NEW PAYMENT FOR Education Fee</button>

      <div className="offers-section">
        <h2>Get Upto 30% Extra Discount</h2>
        <p>On Top Brands Using Gift Vouchers</p>
      </div>

      <div className="cashback-section">
        <h2>It's Raising Cashback Offers!</h2>
        <p>Cashback of upto $500 On Every Credit Card Payment.</p>
      </div>

      <div className="categories-section">
        <h3>Pay bills expenses</h3>
        <div className="categories-grid">
          <div className="category">House Rent</div>
          <div className="category">School Fee</div>
          <div className="category">Society Maintenance</div>
          <div className="category">Tuition Fee</div>
          <div className="category">Office/Shop Rent</div>
          <div className="category">Property Token</div>
          <div className="category">Property Deposit</div>
        </div>
      </div>

      <div className="benefits-section">
        <h2>Benefits of Using Our Service</h2>
        <ul>
          <li>Instant cash in 5 minutes upto $1 lakhs</li>
          <li>Lowest Charges on Credit card payment</li>
          <li>Payment is Convenient and Time-Saving</li>
          <li>100% secure</li>
          <li>Instant disbursement</li>
        </ul>
      </div>
    </div>

      </>
  )
}

export default PayRent;