import React, { Component } from "react";
import Header from "./../../common/header/Header";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header homeOptions="true" />
      </div>
    );
  }
}

export default Home;
