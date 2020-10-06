import React, { Component } from "react";
import "./Header.css";
import Fastfood from "@material-ui/icons/Fastfood";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <header className="app-header">
          <div className="flex-container-header">
            <div className="app-logo">
              <Fastfood style={{ fontSize: "35px", color: "white" }} />
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
