import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import "typeface-roboto";
import { withStyles } from "@material-ui/core/styles";

class LandingContainer extends Component {
  render() {
    return (
      <Grid item xs>
        <Paper style={{ textAlign: "center", height: 250 }}>{this.props.text}</Paper>
      </Grid>
    );
  }
}

export default LandingContainer;
