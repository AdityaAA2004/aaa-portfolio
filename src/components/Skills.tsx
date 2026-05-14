import React from 'react';
import './Skills.css';

const SKILLS: Record<string, string[]> = {
  'Languages':   ['Java', 'TypeScript', 'Python', 'PHP', 'SQL', 'JavaScript', 'C++'],
  'Frameworks':  ['React', 'Angular', 'Spring Boot', 'FastAPI', 'Node.js', 'Drupal', 'Django'],
  'AI / Data':   ['Azure OpenAI', 'Claude API', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy'],
  'Cloud / Ops': ['AWS', 'Azure', 'Docker', 'Firebase', 'MongoDB', 'Argo CD', 'Linux'],
};

const Skills: React.FC = () => (
  <div className="section">
    <div className="container">
      <div className="reveal">
        <h2 className="sec-heading">Tech Stack</h2>
      </div>
      <div className="skill-table">
        {Object.entries(SKILLS).map(([grp, items], i) => (
          <div key={grp} className={`skill-row reveal d${(i % 3) + 1}`}>
            <span className="skill-cat">{grp}</span>
            <div className="tags" style={{ rowGap: '9px' }}>
              {items.map((s) => <span key={s} className="tag">{s}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Skills;
