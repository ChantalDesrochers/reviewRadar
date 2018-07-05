import React, { Component } from "react";
import { Link } from "@reach/router";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import "typeface-roboto";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import PropTypes from "prop-types";
import LandingContainer from "./landingPartials/_containers";

import Button from "@material-ui/core/Button"; // used to reroute to Registration + Login

const colors = {
  color1: "lightblue",
  color2: "#289aee"
};

const styles = {
  register: {
    background: colors.color2,
    // borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "10 px"
    //boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
  },
  login: {
    // borderRadius: 3,
    border: 0,
    color: "grey",
    height: 48,
    padding: "10 px"
  },
  label: {
    textTransform: "capitalize"
  }
};

const paper = {
  padding: 2,
  textAlign: "center"
  // color: palette.text.secondary,
};

function Landing(props) {
  const { classes } = props;

  return (
    <div>
      <Typography variant="display3">Welcome to ReviewRadar</Typography>
      <Link to="request" style={{ textDecoration: "none" }}>
        <Button
          classes={{
            root: classes.register, // class name, e.g. `classes-nesting-root-x`
            label: classes.label // class name, e.g. `classes-nesting-label-x`
          }}
        >
          Get your request
        </Button>
      </Link>
      <Link to="report" style={{ textDecoration: "none" }}>
        <Button
          classes={{
            root: classes.login, // class name, e.g. `classes-nesting-root-x`
            label: classes.label // class name, e.g. `classes-nesting-label-x`
          }}
        >
          Already Registered
        </Button>
      </Link>

      <Grid container spacing={24}>
        <LandingContainer text="container1" img=""/>
        <LandingContainer text="container2" img=""/>
        <LandingContainer text="container3"img=""/>
      </Grid>
    </div>
  );
}

Landing.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Landing);
// class Landing extends Component {
//   render() {
//     return (
//       <div>
//         <Typography variant="display3">Welcome to ReviewRadar</Typography>
//         <Button variant="raised">
//           <Link to="request">Get your request</Link>
//         </Button>
//         {/* <Button variant="outlined" color="light blue"> */}
//         <Button variant="text" >
//           <Link to="report"> Already Registered</Link>
//         </Button>
//       </div>
//     );
//   }
// }

// export default Landing;
