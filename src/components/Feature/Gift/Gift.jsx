import React from 'react';
import './Gift.css';
import Banner from "../../../assets/Food_Image/special_day_Gift.jpg"
import Navbar from "../../Navbar/Navbar"
import Footer from "../../../container/Footer/Footer"

function Gift() {
  return (
    <>
    <div className="gift-container">
    <Navbar />
      <div className="hero-banner">
        <img src={Banner} alt="Special Day Banner" />
      </div>
      <h1 className="gift-header">Special Day Gift</h1>
      <p className="gift-description">Select a special date in a year to receive your auto gift!</p>
      <div className="gift-date-picker">
        <label htmlFor="specialDate">Choose your special date:</label>
        <input type="date" id="specialDate" name="specialDate" />
      </div>
      <button className="gift-btn">Claim Your Gift</button>
      <Footer />
    </div>
    </>
  );
}

export default Gift;
