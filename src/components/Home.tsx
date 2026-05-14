import React from 'react';
import './Home.css';
const resumePDF = require('../assets/Aditya_Archunan_Anand.pdf');
const photo = require('../assets/aditya.jpg');

const Home: React.FC = () => (
  <section className="hero">
    <div className="container">
      <div className="hero-inner">
        <div>
          <p className="hero-label">Software Engineer</p>
          <h1 className="hero-name">Aditya<br />Archunan Anand</h1>
          <p className="hero-tagline">
            Building AI-powered systems and developer tools — from API design to production deployment at enterprise scale.
          </p>
          <div className="hero-linkbar">
            <a href="mailto:anandad1@msu.edu" className="clink p">Email</a>
            <a href="https://linkedin.com/in/aanandadi/" target="_blank" rel="noreferrer" className="clink">LinkedIn ↗</a>
            <a href="https://github.com/AdityaAA2004" target="_blank" rel="noreferrer" className="clink">GitHub ↗</a>
            <a href={resumePDF} target="_blank" rel="noreferrer" className="clink">Resume ↓</a>
          </div>
        </div>
        <div className="hero-photo-side">
          <img className="hero-img" src={photo} alt="Aditya Archunan Anand" />
          <div className="hero-avail">
            <div className="avail-dot" />
            Open to full-time
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Home;
