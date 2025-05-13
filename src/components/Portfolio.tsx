import React from 'react';
import './Portfolio.css';

const projects = [
  {
    name: 'Targetist',
    image: require('../assets/targetist_new_logo.png'),
    link: 'https://targetist.io',
  },
  {
    name: 'Amazon Clone',
    image: require('../assets/amazon-clone.png'),
    link: 'https://my-amazon-clone-adiaa.vercel.app/',
  },
  {
    name: 'Neural Network Car Sim',
    image: require('../assets/nn-car-sim.png'),
    link: 'https://github.com/AdityaAA2004/Neural-Network-Car-sim',
  },
];

const Portfolio: React.FC = () => (
  <section className="portfolio-section" id="portfolio">
    <h1 className="portfolio-heading">My Projects</h1>
    <div className="portfolio-grid">
      {projects.map((project) => (
        <div className="portfolio-card" key={project.name}>
          <div className="portfolio-image-wrapper">
            <img src={project.image} alt={project.name} className="portfolio-image" />
          </div>
          <a href={project.link} className="portfolio-link" target="_blank" rel="noopener noreferrer">
            {project.name}
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Portfolio; 