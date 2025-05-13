import React from 'react';
import './Experience.css';

const Experience: React.FC = () => (
  <section className="about-section">
    <h1 className="about-heading">My Work Till Now...</h1>

    <div className="about-experience">
      <h2 className="about-subheading">Fouding Engineer</h2>
      <p className="about-tech">React Native, Expo, AWS EC2, Amazon EventBridge, AWS Amplify, AWS Lambda, Python, Shell Script, CI/CD, MongoDB, Node.js, Express.js, Git, GitHub, Agile</p>
      <p className="about-company">Targetist (Jan 2024 - Present)</p>
      <p>
        As part of a four-member startup team, I helped build an AI-based task automation app from the ground up. I designed and developed the mobile user interface using React Native and Expo, implemented secure authentication with AWS Amplify, and integrated backend APIs for seamless data operations. Our team followed Agile practices, pitching the product at startup competitions and demoing to both students and venture capitalists. I also contributed to the machine learning model in Python, and architected a scalable cloud backend using AWS services like SQS, EventBridge, Lambda, and Sagemaker, with CI/CD automation via GitHub Actions and shell scripts. The app was published on the iOS App Store.
      </p>
    </div>

    <div className="about-experience">
      <h2 className="about-subheading">Application Developer</h2>
      <p className="about-tech">Python, Fast API, Azure OpenAI SDK, Angular, Java, MySQL, Git, Bitbucket, Apache Tomcat, Oracle Database, Spring Boot, Agile</p>
      <p className="about-company">Delta Dental of Michigan (Dec 2024 - Present)</p>
      <p>
        At Delta Dental, I worked on the Group Admin Audit feature for Roosevelt Solutions, a platform serving over 22 million users. My responsibilities included designing API documentation, writing complex SQL queries, and developing robust Spring Boot API endpoints using test-driven development. I also built Angular interfaces for admin users and created a reusable Python FastAPI endpoint leveraging Azure OpenAI to automate the analysis of insurance documents, streamlining eligibility workflows. This experience deepened my expertise in enterprise software and Agile collaboration.
      </p>
    </div>

    <div className="about-experience">
      <h2 className="about-subheading">Student Web Developer</h2>
      <p className="about-tech">PHP, MySQL, PostgreSQL, Devilbox, OOP, Docker, Git, Gitlab, Linux</p>
      <p className="about-company">Michigan State University (Jan 2023 - Present)</p>
      <p>
        As a student web developer, I resolved technical issues and contributed to long-term projects for the Residential and Hospitality Services department. I developed custom PHP modules using Drupal Hooks and object-oriented principles, managed code as Git submodules, and helped migrate the MSU Sports camps site to Drupal for improved stability and user experience. My work spanned PHP, MySQL, Docker, and Linux, and I collaborated closely with a team to deliver solutions for thousands of users and site admins.
      </p>
    </div>
  </section>
);

export default Experience; 