import React, { useState } from "react";
import Menu from "./Menu";
import git from "../img/git.png";
import linkedin from "../img/Linkedin.png";
import Logo from "../img/LogoEA.png";

const MenuBar = () => {
  const [menuShow, setMenuShow] = useState(false);
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
        <div className="menuLeft__social">
          <a
            href="https://www.linkedin.com/in/eric-arrijuria-a64990/"
            target="blank"
            className="menu_link_social"
          >
            <img src={linkedin} alt="Linkedin" className="linkedin" />
          </a>
          <a
            href="https://github.com/Jarod79"
            target="blank"
            className="menu_link_social"
          >
            <img src={git} alt="GitHub" className="git" />
          </a>
        </div>
        <Menu show={menuShow} setMenuShow={setMenuShow} />
      </div>
    </div>
  );
};

export default MenuBar;
