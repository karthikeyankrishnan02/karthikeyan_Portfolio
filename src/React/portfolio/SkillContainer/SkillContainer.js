import React from "react";
import { Element } from "react-scroll";
import skillimg from "../../img/fn.gif";
import { LinearProgress } from "@mui/material";
import "./SkillContainer.css"

const SkillContainer = () => {
  return (
    
      <Element className="SkillContainer" id="skills">
        <div className="skillContainer">
          <img src={skillimg} alt="" />
        
        <div className="skillContainer_text">
          <h2>Skills</h2>
          <div className="skillContainer_skillset">
            <h5>React</h5>
            <div className="skillContainer_slider skillContainer_slider1">
              <LinearProgress variant="determinate" value={90} />
            </div>
          </div>
            <div className="skillContainer_skillset">
              <h5>Java script</h5>
              <div className="skillContainer_slider skillContainer_slider2">
                <LinearProgress variant="determinate" value={70} />
              </div>
            </div>
          <div className="skillContainer_skillset">
              <h5>HTML</h5>
              <div className="skillContainer_slider skillContainer_slider3">
                <LinearProgress variant="determinate" value={70} />
              </div>
            </div>
            <div className="skillContainer_skillset">
              <h5>CSS</h5>
              <div className="skillContainer_slider skillContainer_slider4">
                <LinearProgress variant="determinate" value={70} />
                </div>
              </div>
            </div>
          </div>
          
    
      </Element>
    
  );
};

export default SkillContainer;
