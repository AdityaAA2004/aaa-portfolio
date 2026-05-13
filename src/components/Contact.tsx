import React from 'react';
import './Contact.css';
const resumePDF = require('../assets/Aditya_Archunan_Anand.pdf');

const Contact: React.FC = () => (
  <>
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="contact-hed reveal">I build things<br />that ship.</h2>
        <p className="contact-sub reveal d2">
          Open to full-time new grad software engineering roles. Let's talk.
        </p>
        <div className="contact-row reveal d3">
          <a href="mailto:anandad1@msu.edu" className="clink p">Email</a>
          <a href="https://linkedin.com/in/aanandadi/" target="_blank" rel="noreferrer" className="clink">LinkedIn ↗</a>
          <a href="https://github.com/AdityaAA2004" target="_blank" rel="noreferrer" className="clink">GitHub ↗</a>
          <a href={resumePDF} target="_blank" rel="noreferrer" className="clink">Resume ↓</a>
        </div>
      </div>
    </section>
    <footer className="site-footer">
      <div className="container footer-inner">
        <span className="ft">© 2026 Aditya Archunan Anand</span>
        <span className="ft">anandad1@msu.edu</span>
      </div>
    </footer>
  </>
);

export default Contact;
