import React from 'react';

const styles = {
  contactMe: {
    display: "flex",
    flexDirection: "row",
    justifyText: "center",
    fontSize: "20px"
  }
};

function Footer() {
  return (
    <div style={styles.contactMe} className='row '>
      <div className='card col-3 text-center'>
        <p><a href="mailto:areitan@fredhutch.org">areitan@fredhutch.org</a></p>
      </div>
      <div className='card col-3 text-center'>
        <p><a href="https://github.com/areitan">GitHub</a></p>
      </div>
      <div className='card col-3 text-center'>
        <p><a href="https://www.linkedin.com/in/april-reitan-4217559/">LinkedIn</a></p>
      </div>
      <div className='card col-3 text-center'>
        <p><a href="tel:2535081957">Click to call</a></p>
      </div>
    </div>
  );
}

export default Footer;
