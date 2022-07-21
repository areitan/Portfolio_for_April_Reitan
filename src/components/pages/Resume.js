import React from 'react';

const styles = {
  resume: {
    fontSize: "30px"
  }
};

export default function Resume() {
  return (
    <div>
      <h1>My Resume</h1>
      <div style={styles.resume} className='card text-center'>
      <a href="April_Reitan_Resume_6_15_2022.pdf" download>Download My Resume</a>
      </div>
    </div>
  );
}
