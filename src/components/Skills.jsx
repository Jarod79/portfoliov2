import React from "react";
import Logo from "../img/LogoJs.png";
import Cv from "../cv/cv.pdf";

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills__left">
        <img src={Logo} alt="CODE" />
        <h3>
          <a href={Cv} download="Eric-Arrijuria:CV.pdf">
            Télécharger mon C.V
          </a>
        </h3>
      </div>
      <div className="skills__language">
        <p>JAVASCRIPT</p>
        <p>HTML5</p>
        <p>CSS3</p>
        <p>SQL</p>
        <p>REACT</p>
        <p>NODE JS</p>
        <p>EXPRESS</p>
        <p>GITHUB</p>
        <p>TYPESCRIPT</p>
        <p>METHODE AGILE</p>
      </div>
    </div>
  );
};
export default Skills;
