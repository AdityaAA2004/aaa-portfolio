import React from 'react';
import './Experience.css';

const Experience: React.FC = () => (
  <div className="section">
    <div className="container">
      <div className="reveal">
        <h2 className="sec-heading">Experience</h2>
      </div>

      <div className="exp-list">
        <div className="exp-entry reveal d1">
          <div className="exp-top">
            <div>
              <h3 className="exp-co">Delta Dental of Michigan</h3>
              <p className="exp-role">Application Developer Intern</p>
            </div>
            <span className="exp-period">Nov 2024 – May 2026</span>
          </div>
          <p className="exp-prose">
            Built Spring Boot APIs improving audit capabilities for dental insurance contracts serving 22M+ members.
            Reduced manual eligibility review time for 100+ analysts by constructing an end-to-end pipeline that ingests
            enrollment documents from Outlook, routes them through Azure OpenAI and Document Intelligence agents, and
            surfaces structured outputs via FastAPI. Designed the Angular review UI within Roosevelt Solutions for
            human-in-the-loop decision-making.
          </p>
          <div className="exp-tags">
            {['Spring Boot','FastAPI','Azure OpenAI','Angular','Java','JUnit','Mockito'].map(t => (
              <span key={t} className="exp-tag">{t}</span>
            ))}
          </div>
        </div>

        <div className="exp-entry reveal d2">
          <div className="exp-top">
            <div>
              <h3 className="exp-co">Michigan State University</h3>
              <p className="exp-role">Student Web Developer</p>
            </div>
            <span className="exp-period">Jan 2023 – May 2025</span>
          </div>
          <p className="exp-prose">
            Refactored the MSU Sports Camps platform to Drupal, stabilizing a system used by 2,000+ students that
            generates over $1M in annual program revenue. Debugged and resolved production issues in the RHS Service
            Portal — a Symfony application managing residence hall service desk operations across multiple buildings.
            Built a reusable PHP Drupal Hooks module that auto-generates customized XML event feeds for 10+ campus venues.
          </p>
          <div className="exp-tags">
            {['Drupal','PHP','Symfony','MySQL','JavaScript'].map(t => (
              <span key={t} className="exp-tag">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Experience;
