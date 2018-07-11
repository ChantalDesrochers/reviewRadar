import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import "typeface-roboto";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";


const styles = {
  card: {
    maxWidth: 345,
    height: '100%',
  },
  media: {
    height: 0,
    // paddingTop: "56.25%" // 16:9
    paddingTop: "100%" // 16:9
  }
};

class LandingContainer extends Component {
  render() {
    return (
        <Grid item xs={2}>
        <Card style={styles.card}>
          <CardMedia style={styles.media} image={this.props.img} title="Contemplative Reptile" />
          <CardContent>
            <Typography variant="headline">{this.props.text}</Typography>
          </CardContent>
        </Card>
       </Grid>
    );
  }
}

// class LandingContainer extends Component {
//   render() {
//     return (
//       <Grid item xs={2}>
//         <Paper style={{ textAlign: "center",  }}>
//         {/* <img src={ require('./images/image1.jpg') } /> */}
//         <img src={this.props.img} />
//         {/* <Typography>{this.props.header}</Typography> */}
//         <Typography variant="headline">{this.props.text}</Typography>
//         </Paper>
//       </Grid>
//     );
//   }
// }

export default LandingContainer;
