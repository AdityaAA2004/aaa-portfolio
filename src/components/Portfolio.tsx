import React from 'react';
import './Portfolio.css';

const projects = [
  {
    name: 'Developable',
    sub: 'Multi-agent code generation skill built on Claude',
    desc: 'A structured Claude skill that coordinates three agents — Developer, Tester, and Version Control — to generate complete, tested Express + TypeScript backends from a schema definition. The Developer agent produces auth-enforced, Zod-validated endpoints; the Tester writes 100+ integration tests per schema; the VC agent handles schema diffing and incremental regeneration. Prompt caching eliminates redundant LLM calls on iterative runs, cutting token consumption by 20%+ per session.',
    tags: ['Python', 'TypeScript', 'Prisma', 'Claude API', 'Docker', 'Pytest'],
    link: 'https://github.com/DevelopableAI',
    linkLabel: 'GitHub ↗',
  },
  {
    name: 'ContractOS',
    sub: 'Contractor lifecycle workflow engine',
    desc: 'Declarative workflow engine for the full contractor lifecycle — requisition to offboarding. Configurable stage templates, an append-only EventLog with deadline triggers, and compliance checkpoints at each gate maintain full auditability for organizations managing concurrent assignments.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma'],
    link: null,
    linkLabel: null,
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
