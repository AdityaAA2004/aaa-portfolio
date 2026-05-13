import React from 'react';
import './Experience.css';

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  prose: string;
  tags: string[];
}

const EXPERIENCE: ExperienceItem[] = [
  {
    company: 'Delta Dental of Michigan',
    role: 'Application Developer Intern',
    period: 'Nov 2024 – May 2026',
    prose: 'Built Spring Boot APIs improving audit capabilities for dental insurance contracts serving 22M+ members. Reduced manual eligibility review time for 100+ analysts by constructing an end-to-end pipeline that ingests enrollment documents from Outlook, routes them through Azure OpenAI and Document Intelligence agents, and surfaces structured outputs via FastAPI. Designed the Angular review UI within Roosevelt Solutions for human-in-the-loop decision-making.',
    tags: ['Spring Boot', 'FastAPI', 'Azure OpenAI', 'Angular', 'Java', 'JUnit', 'Mockito'],
  },
  {
    company: 'Michigan State University',
    role: 'Student Web Developer',
    period: 'Jan 2023 – May 2025',
    prose: 'Refactored the MSU Sports Camps platform to Drupal, stabilizing a system used by 2,000+ students that generates over $1M in annual program revenue. Debugged and resolved production issues in the RHS Service Portal — a Symfony application managing residence hall service desk operations across multiple buildings. Built a reusable PHP Drupal Hooks module that auto-generates customized XML event feeds for 10+ campus venues.',
    tags: ['Drupal', 'PHP', 'Symfony', 'MySQL', 'JavaScript'],
  },
];

const Experience: React.FC = () => (
  <section id="work" className="section">
    <div className="container">
      <div className="reveal">
        <h2 className="sec-heading">Experience</h2>
      </div>
      <div className="exp-list">
        {EXPERIENCE.map((e, i) => (
          <div key={e.company} className={`exp-entry reveal d${i + 1}`}>
            <div className="exp-top">
              <div>
                <h3 className="exp-co">{e.company}</h3>
                <p className="exp-role">{e.role}</p>
              </div>
              <span className="exp-period">{e.period}</span>
            </div>
            <p className="exp-prose">{e.prose}</p>
            <div className="tags">
              {e.tags.map((t) => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
