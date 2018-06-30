import React, { Component } from "react";
import Grid from '@material-ui/core/Grid'
import TextContainer from "./reportPartials/_textContainer";
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper'
import Ratings from "./ratings.js"
import ChartContainer from "./reportPartials/_chartContainer";
import 'typeface-roboto'
import purple from '@material-ui/core/colors/purple';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PaperTexture from './textured-paper.png';
import red from '@material-ui/core/colors/red';
// remove hardcoded reviews after database is online

const primary = '#ffff5a';
const darkAccent = '#ffff00'; // #E040FB
const lightAccent = purple.A200; // #E040FB (alternative method)

const styles = {
  ReviewPaper: { backgroundColor:'#B3E5FC', padding: 5, marginTop: 2, marginBottom: 2, backgroundImage: `url(${PaperTexture})`, backgroundRepeat: 'repeat'},
  MainTitle: { color: 'black', margin: 'auto'},
  // ChartPaper: { height: 'calc(50% - 64px)', marginTop:'20%' }
  ChartPaper: { height: 'calc(100%)', backgroundImage: `url(${PaperTexture})`, backgroundRepeat: 'repeat' },
  menuButton: {marginLeft: -12, marginRight: 20,
    root: {flexGrow: 1},
    flex: {flex: 1},
  },
}
class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: Ratings
      //reviews: []
    };
  }
  // componentDidMount(){
  // fetch('http://localhost:3001/1')
  // .then(results => { return results.json()  })
  // .then(results => {this.setState({reviews: results})
  // console.log('in report', this.state)}
  // );


  //  }

  render() {
    const { reviews } = this.state;
    const topReviews = {
      title: 'Top Endorsements',
      content: reviews.slice(0, 3)
    }
    const bottomReviews = {
      title: 'Top Critisms',
      content: reviews.slice(-3, reviews.length)
    }

    return (
      <div>
        <div >
          <AppBar position="static" color="default">
            <Toolbar>
            <IconButton  style={styles.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
            <Typography variant="display3" style={styles.MainTitle}>Pai Thai Reviews</Typography>

            </Toolbar>
          </AppBar>
        </div>
        <Grid container sm={12} spacing='8'>
          <Grid item sm={8}>
            <Paper style={styles.ReviewPaper}>
              <TextContainer className="top-reviews" reviews={topReviews} />
              <TextContainer className="bottom-reviews" reviews={bottomReviews} />
            </Paper>

          </Grid>
          <Grid container sm={4}>
          <Grid item sm={12}>
            <Paper style={styles.ChartPaper}>
              <ChartContainer />
            </Paper>
          </Grid>
          <Grid item sm={12}>
            <Paper style={styles.ChartPaper}>
              <ChartContainer />
            </Paper>
          </Grid>
          </Grid>

        </Grid>
      </div>

    );
  }
}

export default withStyles(styles)(Report);

{/* <div className={classes.root}>
<Grid container spacing={24}>
  <Grid item xs={12}>
    <Paper className={classes.paper}>xs=12</Paper>
  </Grid>
  <Grid item xs={12} sm={6}>
    <Paper className={classes.paper}>xs=12 sm=6</Paper>
  </Grid>
  <Grid item xs={12} sm={6}>
    <Paper className={classes.paper}>xs=12 sm=6</Paper>
  </Grid>
  <Grid item xs={6} sm={3}>
    <Paper className={classes.paper}>xs=6 sm=3</Paper>
  </Grid>
  <Grid item xs={6} sm={3}>
    <Paper className={classes.paper}>xs=6 sm=3</Paper>
  </Grid>
  <Grid item xs={6} sm={3}>
    <Paper className={classes.paper}>xs=6 sm=3</Paper>
  </Grid>
  <Grid item xs={6} sm={3}>
    <Paper className={classes.paper}>xs=6 sm=3</Paper>
  </Grid>
</Grid>
</div> */}

