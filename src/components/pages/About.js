import React from 'react';
import '../../styles/style.css';

const styles = {
  paragraph: {
    marginLeft: "5%",
    color: "black",
    fontSize: "20px",
  },
  aboutMe: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "spaceBetween",
    alignItems: "spaceBetween",
    position: "relative",
    padding: "20px",
    margin: "10px",
    color: "rgb(5, 5, 56)",
  }
};

export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <section style={styles.aboutMe}>
        <div style={styles.paragraph}>
          <p>I have worked in cancer research for nearly 2 decades. For 11 of those years, I worked on studies from
            the database user side. About 5 years ago, I was asked to join the data team. In that time I
            have learned a lot, but I always want to learn more. I have seen our studies go from paper-based
            questionnaires to electronic questionnaires administerd by interviewers, and now to being
            accessable to particiants online.</p>
        </div>
      </section>
    </div>
  );
}
