import React from 'react';
import './App.css';

const LandingPage = ({ onGetStarted }) => {
  return (
    <div className="landing-page">
      <div className="background-image"></div>
      <div className="content">
        <h1>Paradise Nursery</h1>
        <p>Your one-stop shop for beautiful, healthy houseplants. From aromatic herbs to medicinal wonders, we bring nature to your home.</p>
        <button className="get-started-btn" onClick={onGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default LandingPage;