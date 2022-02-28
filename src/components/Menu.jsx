import React, { useState } from "react";
import { menuList } from "../Menu";
import { NavLink } from "react-router-dom";

const Menu = ({ show, setMenuShow }) => {
  return (
    <>
      <div className={show ? "menu" : "menuClose"}>
        <div className="menu__link">
          {menuList.map(({ pathFr, nameFr }, index) => (
            <NavLink key={index} to={pathFr} onClick={() => setMenuShow(false)}>
              {nameFr}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default Menu;
