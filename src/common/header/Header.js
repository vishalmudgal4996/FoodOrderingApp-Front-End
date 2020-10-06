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
import Modal from "react-modal";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const TabContainer = (props) => {
  return (
    <Typography component="div" style={{ padding: 0, textAlign: "center" }}>
      {props.children}
    </Typography>
  );
};

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      value: 0,
      loginContactNumberRequired: "dispNone",
      loginContactNumber: "",
      loginPasswordRequired: "dispNone",
      loginPassword: "",
      firstNameRequired: "dispNone",
      firstName: "",
      lastName: "",
      emailRequired: "dispNone",
      email: "",
      registerPasswordRequired: "dispNone",
      registerPassword: "",
      registerContactNumberRequired: "dispNone",
      registerContactNumber: "",
    };
  }

  openModalHandler = () => {
    this.setState({
      modalIsOpen: true,
      value: 0,
    });
  };

  closeModalHandler = () => {
    this.setState({ modalIsOpen: false });
  };

  tabChangeHandler = (event, value) => {
    this.setState({ value });
  };

  loginContactNumberChangeHandler = (e) => {
    this.setState({ loginContactNumber: e.target.value });
  };

  loginPasswordChangeHandler = (e) => {
    this.setState({ loginPassword: e.target.value });
  };

  signUpClickHandler = () => {
    this.state.firstName === ""
      ? this.setState({ firstNameRequired: "dispBlock" })
      : this.setState({ firstNameRequired: "dispNone" });
    this.state.email === ""
      ? this.setState({ emailRequired: "dispBlock" })
      : this.setState({ emailRequired: "dispNone" });
    this.state.registerPassword === ""
      ? this.setState({ registerPasswordRequired: "dispBlock" })
      : this.setState({ registerPasswordRequired: "dispNone" });
    this.state.registerContactNumber === ""
      ? this.setState({ registerContactNumberRequired: "dispBlock" })
      : this.setState({ registerContactNumberRequired: "dispNone" });

    if (
      this.state.email === "" ||
      this.state.firstname === "" ||
      this.state.lastname === "" ||
      this.state.mobile === "" ||
      this.state.registerPassword === ""
    ) {
      return;
    }
  };

  firstNameChangeHandler = (e) => {
    this.setState({ firstName: e.target.value });
  };

  lastNameChangeHandler = (e) => {
    this.setState({ lastName: e.target.value });
  };

  emailChangeHandler = (e) => {
    this.setState({ email: e.target.value });
  };

  registerPasswordChangeHandler = (e) => {
    this.setState({ registerPassword: e.target.value });
  };

  registerContactNumberChangeHandler = (e) => {
    this.setState({ registerContactNumber: e.target.value });
  };

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
              <Button
                variant="contained"
                color="default"
                onClick={this.openModalHandler}
              >
                <AccountCircle style={{ marginRight: 4 }} />
                LOGIN
              </Button>
            </div>
          </div>
        </header>
        <Modal
          ariaHideApp={false}
          isOpen={this.state.modalIsOpen}
          contentLabel="Login"
          onRequestClose={this.closeModalHandler}
          style={customStyles}
        >
          <Tabs
            value={this.state.value}
            onChange={this.tabChangeHandler}
            className="tabs"
          >
            <Tab label="LOGIN" />
            <Tab label="SIGNUP" />
          </Tabs>
          {this.state.value === 0 && (
            <TabContainer>
              <FormControl required>
                <InputLabel htmlFor="loginContactNumber">
                  Contact No.
                </InputLabel>
                <Input
                  id="loginContactNumber"
                  type="number"
                  username={this.state.loginContactNumber}
                  onChange={this.loginContactNumberChangeHandler}
                  className="loginmodal-input"
                />
                <FormHelperText
                  className={this.state.loginContactNumberRequired}
                >
                  <span className="red">required</span>
                </FormHelperText>
              </FormControl>
              <br />
              <br />
              <FormControl required>
                <InputLabel htmlFor="loginPassword">Password</InputLabel>
                <Input
                  id="loginPassword"
                  type="password"
                  loginpassword={this.state.loginPassword}
                  onChange={this.loginPasswordChangeHandler}
                  className="loginmodal-input"
                />
                <FormHelperText className={this.state.loginPasswordRequired}>
                  <span className="red">required</span>
                </FormHelperText>
              </FormControl>
              <br />
              <br />
              {this.state.loggedIn === true && (
                <FormControl>
                  <span className="successText">Login Successful!</span>
                </FormControl>
              )}
              <br />
              <br />
              <Button variant="contained" color="primary">
                LOGIN
              </Button>
            </TabContainer>
          )}

          {this.state.value === 1 && (
            <TabContainer>
              <FormControl required>
                <InputLabel htmlFor="firstName">First Name</InputLabel>
                <Input
                  id="firstName"
                  type="text"
                  firstname={this.state.firstName}
                  onChange={this.firstNameChangeHandler}
                  className="loginmodal-input"
                />
                <FormHelperText className={this.state.firstNameRequired}>
                  <span className="red">required</span>
                </FormHelperText>
              </FormControl>
              <br />
              <br />
              <FormControl>
                <InputLabel htmlFor="lastName">Last Name</InputLabel>
                <Input
                  id="lastName"
                  type="text"
                  lastname={this.state.lastName}
                  onChange={this.lastNameChangeHandler}
                  className="loginmodal-input"
                />
              </FormControl>
              <br />
              <br />
              <FormControl required>
                <InputLabel htmlFor="email">Email</InputLabel>
                <Input
                  id="email"
                  type="text"
                  email={this.state.email}
                  onChange={this.emailChangeHandler}
                  className="loginmodal-input"
                />
                <FormHelperText className={this.state.emailRequired}>
                  <span className="red">required</span>
                </FormHelperText>
              </FormControl>
              <br />
              <br />
              <FormControl required>
                <InputLabel htmlFor="registerPassword">Password</InputLabel>
                <Input
                  id="registerPassword"
                  type="password"
                  registerpassword={this.state.registerPassword}
                  onChange={this.registerPasswordChangeHandler}
                  className="loginmodal-input"
                />
                <FormHelperText className={this.state.registerPasswordRequired}>
                  <span className="red">required</span>
                </FormHelperText>
              </FormControl>
              <br />
              <br />
              <FormControl required>
                <InputLabel htmlFor="registerContactNumber">
                  Contact No.
                </InputLabel>
                <Input
                  id="registerContactNumber"
                  type="number"
                  mobile={this.state.registerContactNumber}
                  onChange={this.registerContactNumberChangeHandler}
                  className="loginmodal-input"
                />
                <FormHelperText
                  className={this.state.registerContactNumberRequired}
                >
                  <span className="red">required</span>
                </FormHelperText>
              </FormControl>
              <br />
              <br />
              {this.state.registrationSuccess === true && (
                <FormControl>
                  <span className="successText">
                    Registration Successful. Please Login!
                  </span>
                </FormControl>
              )}
              <br />
              <br />
              <Button
                variant="contained"
                color="primary"
                onClick={this.signUpClickHandler}
              >
                SIGNUP
              </Button>
            </TabContainer>
          )}
        </Modal>
      </div>
    );
  }
}

export default withRouter(Header);
