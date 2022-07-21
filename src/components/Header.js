import React from 'react';
import myPic from '../assets/pic.jpg'
import background from '../assets/pexels-rovenimagescom-949587.jpg'

const styles = {
  header: {
    maxWidth: "300px",
  }
};

function Header() {
  return (
    <div style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat',
    backgroundSize:'cover' }}>
      <p>April Reitan</p>
      <div style={styles.header}>
      <img style={{ width: 225, height: 300 }} src={myPic} alt="It's me, April!"/>
    </div>
    </div>
  );
}

export default Header;
