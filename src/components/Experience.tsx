import React from 'react';
import './Experience.css';

const Experience: React.FC = () => (
  <section className="about-section">
    <h1 className="about-heading">My Work Till Now...</h1>

    <div className="about-experience">
      <h2 className="about-subheading">Co-founder & CTO</h2>
      <p className="about-tech">
        React Native, Expo, TypeScript, AWS (EC2, EventBridge, Amplify, Lambda), Node.js, Express.js, Python, Shell Script, MongoDB, CI/CD, Git, GitHub, Agile
      </p>
      <p className="about-company">Targetist (Jan 2024 – Present)</p>
      <p>
        Co-founded Targetist to eliminate coordination bottlenecks by building an agentic AI system using Claude, LangGraph, and a custom RAG pipeline for natural language planning. Designed and deployed a master-sub agent architecture with a React + TypeScript frontend, Node.js + Python FastAPI backend, AWS infrastructure, MongoDB, and integrations with Google Workspace and Microsoft Suite. Scaled to 1000+ beta users with 60% weekly retention, leveraging AI orchestration, workflow automation, system design, and product leadership to drive a successful B2B pivot.
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
