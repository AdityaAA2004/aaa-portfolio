import React from 'react';
import './Portfolio.css';

const projects = [
  { name: 'Targetist',            image: require('../assets/targetist_new_logo.png'), link: 'https://targetist.io' },
  { name: 'Zenith',               image: require('../assets/zenith.png'),             link: 'https://github.com/AdityaAA2004/Zenith' },
  { name: 'Neural Network Car Sim', image: require('../assets/nn-car-sim.png'),       link: 'https://github.com/AdityaAA2004/Neural-Network-Car-sim' },
];

const Portfolio: React.FC = () => (
  <div className="section">
    <div className="container">
      <div className="reveal">
        <h2 className="sec-heading">Projects</h2>
      </div>
      <div className="proj-list">
        {projects.map((p, i) => (
          <div key={p.name} className={`proj-entry reveal d${(i % 3) + 1}`}>
            <div className="proj-img-wrap">
              <img src={p.image} alt={p.name} className="proj-img" />
            </div>
            <div className="proj-info">
              <h3 className="proj-name">{p.name}</h3>
              <a href={p.link} target="_blank" rel="noreferrer" className="proj-link">GitHub ↗</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Portfolio;
