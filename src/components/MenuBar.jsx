import React, { useState } from "react";
import Menu from "./Menu";
import git from "../img/git.png";
import linkedin from "../img/Linkedin.png";
import Logo from "../img/LogoEA.png";

const MenuBar = () => {
  const [menuShow, setMenuShow] = useState(false);
  const socialNetwork = [
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/eric-arrijuria-a64990/",
      image: linkedin
    },
    {
      name: "GitHub",
      link: "https://github.com/Jarod79",
      image: git
    }
  ];
  return (
    <div className="container">
      <div className="menuLeft">
        <div className="menuLeft__logo">
          <img src={Logo} alt="logo" />
        </div>
        <div
          className="menuLeft__burger"
          onClick={() => setMenuShow(!menuShow)}
        >
          <div className="wrapper">
            <div className="bun">
              <div className="bigmac">
                <span className="meat">{menuShow ? "CLOSE" : "MENU"}</span>
              </div>
            </div>
          </div>
        </div>
        {socialNetwork.map((social, index) => (
          <div className="menuLeft__social" key={index}>
            <a href={social.link} target="blank" className="menu_link_social">
              <img src={social.image} alt={social.name} className="linkedin" />
            </a>
          </div>
        ))}
        <Menu show={menuShow} setMenuShow={setMenuShow} />
      </div>
    </div>
  );
};

export default MenuBar;
