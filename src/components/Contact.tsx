import React from 'react';
import './Contact.css';

const Contact: React.FC = () => (
  <section className="contact-section" id="contact">
    <h1 className="contact-heading">Contact Me</h1>
    <form
      className="contact-form"
      action="https://getform.io/f/98484116-5253-4539-9b0a-86f1a91536d3"
      method="POST"
      autoComplete="off"
    >
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={5} required />
      </div>
      <button type="submit" className="contact-submit">Send</button>
    </form>
  </section>
);

export default Contact; 