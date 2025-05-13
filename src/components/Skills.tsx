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
      { name: 'Next.js', image: require('../assets/nextjs-logo.png') },
      { name: 'Spring Boot', image: require('../assets/spring_boot.png') },
      { name: 'Node & Express.js', image: require('../assets/node-and-express.jpeg') },
      { name: 'Jetpack Compose', image: require('../assets/jetpack-compose-logo.png') },
      { name: 'Numpy', image: require('../assets/numpy.png') },
      { name: 'Tensorflow', image: require('../assets/tensorflow.png') },
      { name: 'Drupal', image: require('../assets/drupal-logo.webp') },
      { name: 'Flask', image: require('../assets/flask.png') },
      { name: 'Fast API', image: require('../assets/fast_api.png') },
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
  <section className="skills-section" id="skills">
    <h1 className="skills-heading">Skills</h1>
    <div className="skills-categories">
      {skillCategories.map((cat) => (
        <div className="skills-category" key={cat.heading}>
          <h2 className="skills-category-heading">{cat.heading}</h2>
          <div className="skills-grid">
            {cat.skills.map((skill) => (
              <div className="skill-card" key={skill.name}>
                {skill.image && (
                  <img src={skill.image} alt={skill.name} className="skill-image" />
                )}
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills; 