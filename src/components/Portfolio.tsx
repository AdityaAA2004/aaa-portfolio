import React from 'react';
import './Portfolio.css';

const projects = [
  {
    name: 'Targetist',
    sub: 'AI-powered goal & task management platform',
    desc: 'A productivity platform that uses AI to help users break down goals into actionable tasks, track progress, and stay accountable. Features smart scheduling, priority management, and progress analytics to keep users on track.',
    tags: ['React', 'TypeScript', 'Node.js', 'Firebase', 'AI'],
    link: 'https://targetist.io',
    linkLabel: 'Visit ↗',
  },
  {
    name: 'Zenith',
    sub: 'Full-stack social productivity app',
    desc: 'A collaborative productivity application built with a Spring Boot backend and React frontend. Implements JWT authentication, real-time updates, and a relational data model supporting user goals, tasks, and social accountability features.',
    tags: ['React', 'Spring Boot', 'MySQL', 'Java', 'REST API'],
    link: 'https://github.com/AdityaAA2004/Zenith',
    linkLabel: 'GitHub ↗',
  },
  {
    name: 'Neural Network Car Sim',
    sub: 'Self-driving car simulation with a hand-rolled neural net',
    desc: 'A browser-based simulation where cars learn to navigate a track using a neural network trained via a genetic algorithm — no ML libraries. The network processes sensor ray-cast distances and steers the car in real time, with each generation visibly improving lap performance.',
    tags: ['JavaScript', 'Canvas API', 'Neural Networks', 'Genetic Algorithm'],
    link: 'https://github.com/AdityaAA2004/Neural-Network-Car-sim',
    linkLabel: 'GitHub ↗',
  },
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
            <div>
              <h3 className="proj-name">{p.name}</h3>
              <p className="proj-sub">{p.sub}</p>
              <p className="proj-desc">{p.desc}</p>
              <div className="tags">
                {p.tags.map((t) => <span key={t} className="tag tag-a">{t}</span>)}
              </div>
            </div>
            {p.link && (
              <a href={p.link} target="_blank" rel="noreferrer" className="proj-link">
                {p.linkLabel}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Portfolio;
