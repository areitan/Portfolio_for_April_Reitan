import React from 'react';
import Form from '../Form/index';
import '../../styles/style.css';

export default function Contact() {
  return (
    <div>
      <h1>Contact Me</h1>
      <div className="contact-me">
      <Form />
        <h2 id="contact-me">Contact Me</h2>
        <p><a href="mailto:areitan@fredhutch.org">areitan@fredhutch.org</a></p>
        <p><a href="https://github.com/areitan">GitHub</a></p>
        <p><a href="https://www.linkedin.com/in/april-reitan-4217559/">LinkedIn</a></p>
        <p><a href="tel:2535081957">Click to call</a></p>
      </div>
    </div>
  );
}
