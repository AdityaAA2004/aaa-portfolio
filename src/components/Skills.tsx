import React from 'react';
import './Skills.css';

const skillCategories = [
  {
    heading: 'Languages',
    skills: [
      { name: 'Java', image: require('../assets/java.png') },
      { name: 'Python', image: require('../assets/python-logo.png') },
      { name: 'C++', image: require('../assets/cpp-logo.png') },
      { name: 'HTML', image: require('../assets/html-logo.png') },
      { name: 'CSS', image: require('../assets/css-logo.png') },
      { name: 'JavaScript', image: require('../assets/js-logo.png') },
      { name: 'TypeScript', image: require('../assets/typescript.png') },
      { name: 'Kotlin', image: require('../assets/kotlin-logo.webp') },
      { name: 'MySQL', image: require('../assets/mysql-logo.png') },
      { name: 'PHP', image: require('../assets/php-logo.png') },
      { name: 'Shell Scripts', image: require('../assets/shell_scripts.png') },
    ],
  },
  {
    heading: 'Frameworks',
    skills: [
      { name: 'Angular', image: require('../assets/angular.png') },
      { name: 'React.js & React Native', image: require('../assets/react-logo.png') },
      { name: 'Redux', image: require('../assets/redux-logo.png') },
      { name: 'Spring Boot', image: require('../assets/spring_boot.png') },
      { name: 'Node & Express.js', image: require('../assets/node-and-express.jpeg') },
      { name: 'Electron', image: require('../assets/electron_js.png') },
      { name: 'Numpy', image: require('../assets/numpy.png') },
      { name: 'Tensorflow', image: require('../assets/tensorflow.png') },
      { name: 'Drupal', image: require('../assets/drupal-logo.webp') },
      { name: 'Flask', image: require('../assets/flask.png') },
      { name: 'Fast API', image: require('../assets/fast_api.png') },
      { name: 'Next.js', image: require('../assets/nextjs-logo.png') },
      { name: 'Jetpack Compose', image: require('../assets/jetpack-compose-logo.png') },
    ],
  },
  {
    heading: 'Developer Tools',
    skills: [
      { name: 'AWS', image: require('../assets/aws.png') },
      { name: 'Azure', image: require('../assets/azure.png') },
      { name: 'Firebase', image: require('../assets/firebase-logo.png') },
      { name: 'Mongo DB', image: require('../assets/mongoDB.png') },
      { name: 'Git & GitHub', image: require('../assets/git-github-logo.png') },
      { name: 'Docker', image: require('../assets/docker.png') },
      { name: 'Linux', image: require('../assets/linux.png') },
      {name : 'Postman', image: require('../assets/postman.png')},
      {name: 'Maven', image: require('../assets/maven.png')},
    ],
  },
];

const Skills: React.FC = () => (
  <div className="section">
    <div className="container">
      <div className="reveal">
        <h2 className="sec-heading">Tech Stack</h2>
      </div>
      <div className="skill-table">
        {skillCategories.map((cat, i) => (
          <div key={cat.heading} className={`skill-row reveal d${(i % 3) + 1}`}>
            <span className="skill-cat">{cat.heading}</span>
            <div className="skill-chips">
              {cat.skills.map((skill) => (
                <div key={skill.name} className="skill-chip">
                  <img src={skill.image} alt={skill.name} className="chip-img" />
                  <span className="chip-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Skills;
