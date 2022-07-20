import React from 'react';

export default function Project() {
  return (
    <div className="work">
      <h1 id="work">My Work</h1>
      <div className="pic-grid">
        <div className="box-item item1">
          <a href="https://areitan.github.io/PocketMonster/"><img className="big" alt="PocketMonster"
            src="./assets/images/index_screenshot.png"/></a>
          <div className="text-position">PocketMonster</div>
        </div>
        <div className="box-item item2">
          <a href="https://areitan.github.io/SemanticMarkup/"><img alt="Semantic Markup"
            src="./assets/images/Accessible_Wesite_Display.png"/></a>
          <div className="text-position">Semantic Markup</div>
        </div>
        <div className="box-item item3">
          <a href="https://areitan.github.io/Password_Generator/"><img alt="Password Generator"
            src="./assets/images/password.png"/></a>
          <div className="text-position">Password Generator</div>
        </div>
        <div className="box-item item4">
          <a href="https://areitan.github.io/Day_Planner/"><img alt="Day Planner"
            src="./assets/images/Day_Planner.png"/></a>
          <div className="text-position">Day Planner</div>
        </div>
        <div className="box-item item5">
          <a href="https://drive.google.com/file/d/1g5jCev9P6KtSrnee9WpiLV1jh25YpQS9/view"><img alt="Team Profile Generator"
            src="./assets/images/5_ViewProfile.png"/></a>
          <div className="text-position">Team Profile Generator</div>
        </div>
      </div>
    </div>
  );
}
