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
import radar from "./landingPartials/radar.png";

import Button from "@material-ui/core/Button"; // used to reroute to Registration + Login

const variables = {
  color1: "lightblue",
  color2: "#289aee",
  buttonPadding: "10px",
  buttonHeight: 48,
  buttonFont: "150%"
};

const styles = {
  header: {
    background: variables.color2,
    color: "white"
  },
  register: {
    background: variables.color2,
    color: "white",
    padding: variables.buttonPadding,
    textTransform: "capitalize",
    fontSize: variables.buttonFont
  },
  login: {
    background: "white",
    color: "grey",
    padding: variables.buttonPadding,
    textTransform: "capitalize",
    fontSize: variables.buttonFont
  }
};

// -webkit-linear-gradient(-45deg, rgba(11,145,255,1) 0%,rgba(81,180,255,0) 100%)

function Landing() {
  return (
    <div style={{overflow: 'hidden'}}>
      <div
        style={{
          height: "100vh",
          background:
            "-webkit-linear-gradient(-45deg, rgba(11,145,255,1) 0%,rgba(81,180,255,0) 100%)",
        }}
      >
        {/* <AppBar position="static" style={styles.header}>
          <Toolbar>
            <Typography variant="title" color="inherit">
              [Logo] ReviewRadar
            </Typography>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Register</Button> 
          </Toolbar>
        </AppBar> */}

        <Typography
          style={{ paddingTop: "3em", marginBottom: "15px" }}
          variant="display4"
        >
          Welcome to ReviewRadar
        </Typography>
        <div style={{ marginLeft: "36%", marginTop: '4%' }}>
          <Link
            to="request"
            style={{ textDecoration: "none", marginRight: "20px" }}
          >
            <Button style={styles.register}>Start a New Request</Button>
          </Link>
          <Link to="report" style={{ textDecoration: "none" }}>
            <Button style={styles.login}>View My Report</Button>
          </Link>
        </div>
        <img
          src={radar}
          style={{
            height: "75%",
            left: "57%",
            position: "absolute",
            bottom: "37%",
            zIndex: -1
          }}
        />
      </div>
      <div style={{ height: "95vh", maxWidth: "98%" }}>
        <Typography
          variant="display1"
          style={{ textAlign: "center", margin: "3em 0em" }}
        >
          Understanding how your customers feel, while running daily operations
          can be difficult. <br />We help simplify the process.
        </Typography>

        <Grid container spacing={40} justify="center">
          <LandingContainer
            header="header"
            img="http://via.placeholder.com/250x300"
            text="This is container1"
            while
          />
          <LandingContainer
            header="header"
            img="http://via.placeholder.com/250x300"
            text="This is container2"
          />
          <LandingContainer
            header="header"
            img="http://via.placeholder.com/250x300"
            text="This is container3"
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
