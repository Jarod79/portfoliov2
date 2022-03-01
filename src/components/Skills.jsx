import React from "react";
import Logo from "../img/LogoJs.png";
import Cv from "../cv/cv.pdf";

const Skills = () => {
  const skills = [
    {
      text: "JAVASCRIPT"
    },
    {
      text: "HTML5"
    },
    {
      text: "CSS3"
    },
    {
      text: "SQL"
    },
    {
      text: "REACT"
    },
    {
      text: "NODE JS"
    },
    {
      text: "EXPRESS"
    },
    {
      text: "GITHUB"
    },
    {
      text: "TYPESCRIPT"
    },
    {
      text: "METHODE AGILE"
    }
  ];
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
        {skills.map((skill, index) => (
          <p key={index}>{skill.text}</p>
        ))}
      </div>
    </div>
  );
};
export default Skills;
