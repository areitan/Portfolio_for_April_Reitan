import React from 'react';

const styles = {
  contactMe: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "spaceBetween",
    alignItems: "spaceBetween",
    fontSize: "25px",
    justifyContent: "spaceEvenly",
  }
};

function Footer() {
  return (
    <div>
      <div style={styles.contactMe}>
        <h2 id="contact-me">Contact Me</h2>
        <p><a href="mailto:areitan@fredhutch.org">areitan@fredhutch.org</a></p><br />
        <p><a href="https://github.com/areitan">GitHub</a></p><br />
        <p><a href="https://www.linkedin.com/in/april-reitan-4217559/">LinkedIn</a></p><br />
        <p><a href="tel:2535081957">Click to call</a></p>
      </div>
    </div>
  );
}

export default Footer;
