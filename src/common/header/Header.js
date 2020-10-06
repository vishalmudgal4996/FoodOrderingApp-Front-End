import React, { Component } from "react";
import "./Header.css";
import Fastfood from "@material-ui/icons/Fastfood";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Button from "@material-ui/core/Button";

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
            <div className="app-login">
              <Button variant="contained" color="default">
                <AccountCircle style={{ marginRight: 4 }} />
                LOGIN
              </Button>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
