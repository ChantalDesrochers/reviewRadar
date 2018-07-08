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

const variables = {
  color1: "lightblue",
  color2: "#289aee",
  buttonPadding: "10 px",
  buttonHeight: 48
};

const styles = {
  header: {
    background: variables.color2,
    color: "white"
  },
  register: {
    background: variables.color2,
    color: "white",
    height: variables.buttonHeight,
    padding: variables.buttonPadding
  },
  login: {
    border: 0,
    color: "grey",
    height: variables.buttonHeight,
    padding: variables.buttonPadding
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
      <div >
        <AppBar
          position="static"
          classes={{
            root: classes.header
          }}
        >
          <Toolbar>
            <Typography variant="title" color="inherit">
              [Logo] ReviewRadar
            </Typography>
            {/* <Button color="inherit">Login</Button>
          <Button color="inherit">Register</Button> */}
          </Toolbar>
        </AppBar>

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
      </div>
      <div>
        <Typography variant="display1" style={{ textAlign: "center" }}>
          Understanding how your customers feel, while running daily operations
          can be difficult. <br />We help simplify the process.
        </Typography>

        <Grid container spacing={40} justify="center">
          <LandingContainer
            header="header"
            img="http://via.placeholder.com/250x300"
            text="All your reviews in one place..."
          />
          <LandingContainer
            header="header"
            img="http://via.placeholder.com/250x300"
            text="Parsed by machine learning..."
          />
          <LandingContainer
            header="header"
            img="http://via.placeholder.com/250x300"
            text="Meaningfully displayed"
          />
        </Grid>
      </div>
    </div>
  );
}

// Landing.propTypes = {
//   classes: PropTypes.object.isRequired
// };

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
