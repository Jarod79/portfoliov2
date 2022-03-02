import React from "react";
import MenuBar from "./components/MenuBar";
import BackgroundBubble from "./components/BackgroundBubble";
import "./Sass/AllSass.scss";
import { menuList } from "./Menu";
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <MenuBar />
        <BackgroundBubble />
        <Routes>
          {menuList.map(({ pathFr, component }, index) => (
            <Route path={pathFr} key={index} element={component} />
          ))}
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
