import React, { Component } from "react";
import "./Header.css";
import { withRouter } from "react-router-dom";
import Fastfood from "@material-ui/icons/Fastfood";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Button from "@material-ui/core/Button";
import Search from "@material-ui/icons/Search";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import Typography from "@material-ui/core/Typography";

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
            {this.props.homeOptions === "true" ? (
              <div className="app-search">
                <Typography variant="h6">
                  <Input
                    type="text"
                    placeholder="Search by Restaurant Name"
                    inputProps={{ "aria-label": "description" }}
                    style={{ color: "grey", width: 280 }}
                    startAdornment={
                      <InputAdornment position="start">
                        <Search style={{ color: "white" }} />
                      </InputAdornment>
                    }
                  />
                </Typography>
              </div>
            ) : (
              ""
            )}
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

export default withRouter(Header);
