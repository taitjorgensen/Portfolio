import React from "react";
import "./NavBar.css";
import ToggleButton from "./ToggleButton.jsx";

const NavBar = props => (
  <header className="navBar">
    <nav className="navBar_toolbar">
      <ToggleButton click={props.drawerClickHandler} />
      <div className="navBar_logo">
        <a href="/">The Logo</a>
      </div>
      <div className="spacer" />
      <div className="navBar_items">
        <ul>
          <li>
            <a href="/">About Me</a>
          </li>
          <li>
            <a href="/">Projects</a>
          </li>
          <li>
            <a href="/">Resume</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default NavBar;
