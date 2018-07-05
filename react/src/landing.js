import React, { Component } from "react";
import { Link } from "@reach/router";

class Landing extends Component {
  render() {
    return (
      <div>
        Welcome to ReviewRadar
        <br />
        <Link to="request">Get your report now</Link>
      </div>
    );
  }
}

export default Landing;
