import React from "react";
import "./SideDrawer.css";

const sideDrawer = props => (
  <div className="backdrop" click={props.closeDrawer}>
    <nav className="side-drawer">
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
    </nav>
  </div>
);

export default sideDrawer;
