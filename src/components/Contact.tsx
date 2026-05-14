import React from 'react';
import './Contact.css';

const Contact: React.FC = () => (
  <>
    <div className="contact-section section">
      <div className="container">
        <h2 className="contact-hed reveal"><span className="sec-num">04</span>Let's work<br />together.</h2>
        <p className="contact-sub reveal d1">
          Open to full-time new grad software engineering roles. Send me a message.
        </p>
        <form
          className="contact-form reveal d2"
          action="https://getform.io/f/98484116-5253-4539-9b0a-86f1a91536d3"
          method="POST"
          autoComplete="off"
        >
          <div className="cf-row">
            <div className="cf-field">
              <label className="cf-label" htmlFor="name">Name</label>
              <input className="cf-input" type="text" id="name" name="name" required />
            </div>
            <div className="cf-field">
              <label className="cf-label" htmlFor="email">Email</label>
              <input className="cf-input" type="email" id="email" name="email" required />
            </div>
          </div>
          <div className="cf-field">
            <label className="cf-label" htmlFor="message">Message</label>
            <textarea className="cf-input" id="message" name="message" rows={5} required />
          </div>
          <div className="cf-footer">
            <div className="cf-links">
              <a href="https://linkedin.com/in/aanandadi/" target="_blank" rel="noreferrer" className="cf-link">LinkedIn ↗</a>
              <a href="https://github.com/AdityaAA2004" target="_blank" rel="noreferrer" className="cf-link">GitHub ↗</a>
            </div>
            <button type="submit" className="cf-submit">Send message →</button>
          </div>
        </form>
      </div>
    </div>
    <footer className="site-footer">
      <div className="container footer-inner">
        <span className="ft">© 2026 Aditya Archunan Anand</span>
        <span className="ft">anandad1@msu.edu</span>
      </div>
    </footer>
  </>
);

export default Contact;
