import React from 'react';
import './Experience.css';

const Experience: React.FC = () => (
  <section className="about-section">
    <h1 className="about-heading">My Work Till Now...</h1>


    <div className="about-experience">
      <h2 className="about-subheading">Application Developer</h2>
      <p className="about-tech">
        Java, Spring Boot, Angular, Oracle SQL, MySQL, FastAPI, Python, Azure OpenAI,
        Azure Document Intelligence, Git, Bitbucket, Agile
      </p>
      <p className="about-company">
        Delta Dental of Michigan (Dec 2024 – Present)
      </p>
      <p>
        Contributed to the development of enterprise-grade audit and AI automation
        systems within Roosevelt Solutions, a dental insurance platform serving over
        22 million users across multiple states. Designed and maintained Spring Boot
        APIs backed by complex Oracle SQL queries to support contract audits, with a
        strong focus on performance, security, and reliability. Authored OpenAPI
        documentation and applied Test-Driven Development to improve backend quality
        and reduce API errors.
        <br /><br />
        Built reusable AI agents using Azure OpenAI and Azure Document Intelligence to
        automate eligibility determination from enrollment documents. Deployed the
        solution via FastAPI and implemented asynchronous processing with Python
        asyncio to efficiently handle large document volumes. Developed Angular-based
        admin interfaces enabling seamless interaction with audit data and AI-powered
        workflows, significantly reducing manual processing time and improving
        operational efficiency.
      </p>
    </div>


    <div className="about-experience">
      <h2 className="about-subheading">Student Web Developer</h2>
      <p className="about-tech">
        PHP, MySQL, PostgreSQL, Drupal, Symfony, Docker, Devilbox, Git, GitLab, Linux,
        Object-Oriented Programming
      </p>
      <p className="about-company">
        Michigan State University (Jan 2023 – May 2025)
      </p>
      <p>
        Contributed to the development and maintenance of production Drupal websites
        for Michigan State University’s Residential and Hospitality Services
        department. Delivered bug fixes and feature enhancements using PHP, MySQL,
        and containerized Devilbox environments, resolving over 20 technical issues
        and supporting multiple long-term projects built on Drupal and Symfony.
        <br /><br />
        Designed and developed a reusable custom Drupal module using hooks and
        object-oriented principles to customize XML event feed output for upcoming
        events across multiple MSU venues. Maintained the module as a Git submodule in
        GitLab, enabling consistent reuse across different university websites.
        <br /><br />
        Refactored and stabilized the MSU Sports Camps website to improve
        performance, reliability, and user experience for over 2,000 end users.
        Supported a mission-critical platform responsible for generating more than
        $1M in annual program revenue.
      </p>
    </div>

  </section>
);

export default Experience;
