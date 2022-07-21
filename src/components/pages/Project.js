import React from 'react';
import '../../styles/style.css';
import Pic1 from '../../assets/1_index_screenshot.png'
import Pic2 from '../../assets/2_Accessible_Wesite_Display.png'
import Pic3 from '../../assets/3_password.png'
import Pic4 from '../../assets/4_Day_Planner.png'
import Pic5 from '../../assets/5_ViewProfile.png'
import Pic6 from '../../assets/6_New_post.png'





const styles = {
  work: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "spaceBetween",
    alignItems: "spaceBetween",
    gap: "50px",
    position: "relative",
    padding: "25px",
    color: "white",
},
textPosition: {
  position: "absolute",
  bottom: "20px",
  left: "16px",
  fontSize: "30px",
  border: "3px solid rgb(0, 162, 255)",
  backgroundColor: "rgb(0, 162, 255)",
  color: "white",
},
h2: {
  flexBasis: "25%",
  alignSelf: "flexStart",
  alignItems: "flexStart",
},
picGrid: {
  display: "flex",
  flexBasis: "100%",
  gap: "25px",
  flexDirection: "row",
  flexWrap: "wrap",
},
img: {
  maxHeight: "350px",
},
boxItem: {
  border: "3px solid var(--background-color)",
  padding: "10px",
    position: "relative",
  }
};

export default function Project() {
  return (
    <div><h1>My Projects</h1>
    <div style={styles.work}>
      <h1>My Work</h1>
      <div style={styles.picGrid}>
        <div style={styles.boxItem}>
          <a href="https://areitan.github.io/PocketMonster/"><img style={{ width: 800, height: "auto" }} className="big" alt="PocketMonster"
            src={Pic1}/></a>
          <div style={styles.textPosition}>PocketMonster</div>
        </div>
        <div style={styles.boxItem}>
          <a href="https://areitan.github.io/SemanticMarkup/"><img style={{ width: 600, height: "auto" }} alt="Semantic Markup"
            src={Pic2}/></a>
          <div style={styles.textPosition}>Semantic Markup</div>
        </div>
        <div style={styles.boxItem}>
          <a href="https://areitan.github.io/Password_Generator/"><img style={{ width: 600, height: "auto" }} alt="Password Generator"
            src={Pic3}/></a>
          <div style={styles.textPosition}>Password Generator</div>
        </div>
        <div style={styles.boxItem}>
          <a href="https://areitan.github.io/Day_Planner/"><img style={{ width: 600, height: "auto" }} alt="Day Planner"
            src={Pic4}/></a>
          <div style={styles.textPosition}>Day Planner</div>
        </div>
        <div style={styles.boxItem}>
          <a href="https://drive.google.com/file/d/1g5jCev9P6KtSrnee9WpiLV1jh25YpQS9/view"><img style={{ width: 600, height: "auto" }} alt="Team Profile Generator"
            src={Pic5}/></a>
          <div style={styles.textPosition}>Team Profile Generator</div>
                  </div>
                  <div style={styles.boxItem}>
          <a href="https://community-closet-206.herokuapp.com/"><img style={{ width: 600, height: "auto" }} alt="Community Closet"
            src={Pic6}/></a>
          <div style={styles.textPosition}>Community Closet</div>
                  </div>
      </div>
    </div>
    </div>
  );
}
