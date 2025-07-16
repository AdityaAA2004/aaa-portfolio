import React from 'react';
import './Experience.css';

const Experience: React.FC = () => (
  <section className="about-section">
    <h1 className="about-heading">My Work Till Now...</h1>

    <div className="about-experience">
      <h2 className="about-subheading">Founding Engineer</h2>
      <p className="about-tech">React Native, Expo, AWS (EC2, EventBridge, Lambda, Amplify, SQS), MongoDB, Node.js, Express.js, Python, Shell Script, CI/CD, GitHub Actions, Agile</p>
      <p className="about-company">Targetist (Jan 2024 – Present)</p>
      <p>
        Co-founded and engineered an AI-powered task automation app from the ground up—launched on the iOS App Store. Led mobile app development with React Native and AWS Amplify for secure authentication. Architected and deployed a scalable serverless backend using AWS Lambda, EventBridge, and MongoDB Triggers, supporting real-time task scheduling. Designed core backend APIs in Node.js with rigorous test coverage using Jest and CI/CD pipelines powered by GitHub Actions and custom shell scripts. Also contributed to the machine learning engine in Python and presented live product demos to VCs and student panels.
      </p>
    </div>

    <div className="about-experience">
      <h2 className="about-subheading">Application Developer Intern</h2>
      <p className="about-tech">Java, Spring Boot, Angular, MySQL, Oracle DB, FastAPI, Azure OpenAI, Bitbucket, Git, Agile</p>
      <p className="about-company">Delta Dental of Michigan (Dec 2024 – Present)</p>
      <p>
        Spearheaded development of critical backend and frontend components for Roosevelt Solutions—an enterprise insurance platform used by 22M+ users. Designed scalable Spring Boot APIs with TDD, authored precise SQL queries, and documented endpoints with full MD specs. Built intuitive Angular UI interfaces and developed a FastAPI-based Azure OpenAI agent to automate insurance eligibility from unstructured documents. Engineered a seamless admin interface integrating this AI solution, significantly reducing manual workload.
      </p>
    </div>

    <div className="about-experience">
      <h2 className="about-subheading">Student Web Developer</h2>
      <p className="about-tech">PHP, MySQL, PostgreSQL, Drupal, Docker, Git, Linux, Devilbox, OOP</p>
      <p className="about-company">Michigan State University (Jan 2023 – Present)</p>
      <p>
        Delivered production-grade web solutions for MSU’s Residential and Hospitality Services. Built custom Drupal modules in PHP using OOP and hooks to extend CMS functionality for multi-venue event systems. Migrated legacy sports camp sites to modern Drupal stack—enhancing performance and usability for 2,000+ admins and users. Resolved 20+ critical bugs and contributed to cross-team development using Dockerized Devilbox environments and GitLab CI practices.
      </p>
    </div>
  </section>
);

export default Experience;
