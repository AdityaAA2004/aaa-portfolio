import React from 'react';
import './Home.css';

const Home: React.FC = () => (
  <section className="home-section home-flex">
    <div className="home-content">
      <h1 className="home-heading">
        I'm a full-stack developer with AI skills, ready to enter the software industry.
      </h1>
      <div className="home-description">
        <p>
          I have hands-on experience as an Application Developer and Student Web Developer, working with modern technologies like Angular, Java, Spring Boot, Python, React Native, AWS, and PHP. I've contributed to large-scale enterprise projects, built APIs and UIs, automated workflows with AI, and collaborated in Agile teams. My work spans corporate, higher education, and startup environments, where I've solved real-world problems, improved user experiences, and delivered robust solutions across web and mobile platforms.
        </p>
      </div>
    </div>
    <div className="home-image-wrapper">
      <img src="/home-photo.jpg" alt="Aditya Archunan Anand" className="home-image" />
    </div>
  </section>
);

export default Home; 