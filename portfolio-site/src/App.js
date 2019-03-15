import React, { Component } from "react";
import NavBar from "./NavBar";
import SideDrawer from "./SideDrawer";
import "./App.css";
import headshot from "./images/headshot.jpg";

class App extends Component {
  state = {
    sideDrawerOpen: false
  };
  handleDrawerToggle = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  closeDrawer = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let sideDrawer;
    if (this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer closeDrawer={this.closeDrawer} />;
    }
    return (
      <div style={{ height: "100%" }}>
        <NavBar drawClickHandler={this.handleDrawerToggle} />
        {sideDrawer}
        <div className="photo">
          <img src={headshot} alt="headshot" height="20%" width="20%" />
        </div>
      </div>
    );
  }
}

export default App;
