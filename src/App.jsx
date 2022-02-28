import React from "react";
import MenuBar from "./components/MenuBar";
import BackgroundBubble from "./components/BackgroundBubble";
import "./Sass/AllSass.scss";
import { menuList } from "./Menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/portfoliov2">
        <MenuBar />
        <BackgroundBubble />
        <Routes>
          {menuList.map(({ pathFr, component }, index) => (
            <Route path={pathFr} key={index} element={component} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
