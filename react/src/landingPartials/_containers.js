import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import "typeface-roboto";

class LandingContainer extends Component {
  render() {
    return (
      <Grid item xs={2}>
        <Paper style={{ textAlign: "center",  }}>
        {/* <img src={ require('./images/image1.jpg') } /> */}
        {/* <img src={this.props.img} /> */}
        <Typography>{this.props.header}</Typography>
        <Typography>{this.props.text}</Typography>
        </Paper>
      </Grid>
    );
  }
}

export default LandingContainer;
