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
import AppBarTexture from './app-bar-image.png';
import Switch from '@material-ui/core/Switch';
import Slide from '@material-ui/core/Slide';
import red from '@material-ui/core/colors/red';
// remove hardcoded reviews after database is online

const primary = '#ffff5a';
const darkAccent = '#ffff00'; // #E040FB
const lightAccent = purple.A200; // #E040FB (alternative method)

const styles = {
  ReviewPaper: { height: 'calc(100%)', backgroundColor: '#F0F4C3', backgroundImage: `url(${PaperTexture})`, backgroundRepeat: 'repeat' },
  MainTitle: { color: 'black', margin: 'auto' },
  // ChartPaper: { height: 'calc(50% - 64px)', marginTop:'20%' }
  ChartPaper: { height: 'calc(140%)', backgroundImage: `url(${PaperTexture})`, backgroundRepeat: 'repeat', backgroundColor: '#B3E5FC' },
  NavPaper: { height: 'calc(60%)', marginTop: 160, backgroundImage: `url(${PaperTexture})`, backgroundRepeat: 'repeat', backgroundColor: '#B3E5FC' },
  menuButton: { backcolor: "black", marginLeft: -12, marginRight: 20, root: { flexGrow: 1 }, flex: { flex: 1 } },
  AppBar: { backgroundImage: `url(${AppBarTexture})`, backgroundRepeat: 'repeat', backgroundColor: '#B3E5FC' },
  RightContainer: { marginTop: 6 },
  LeftContainer: { marginTop: 6 },
  MainTitle:{}
}
class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: Ratings,
      chartClicked: false
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

    const { check } = this.state;
    const handleChartClick = (trigger) => {
      // this.setState(state => ({ checked: !state.checked }));

      console.log('works', trigger.target.dataset.message);
    };
    return (

      <div>
        <div >
          <AppBar position="static" style={styles.AppBar}>
            <Toolbar>
              <IconButton style={styles.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="display3" style={styles.MainTitle}>Komfort and Kim</Typography>

            </Toolbar>
          </AppBar>
        </div>
        <Grid container>
          <Grid style={styles.LeftContainer} container sm={12} spacing={24}>
            <Grid item sm={8}>
              <Paper style={styles.ReviewPaper}>
                <TextContainer className="top-reviews" reviews={topReviews} />
                <TextContainer className="bottom-reviews" reviews={bottomReviews} />
              </Paper>

            </Grid>
            <Grid style={styles.RightContainer} container sm={4} spacing={24}>
              <Grid item sm={12}>
                {/* <Slide direction ="up"> */}
                <Paper data-message="chart" onClick={handleChartClick} style={styles.ChartPaper}  >
                  <ChartContainer />
                </Paper>
                {/* </Slide> */}
              </Grid>
              <Grid item sm={12}>
                <Paper style={styles.NavPaper}>
                  <ChartContainer />
                </Paper>
              </Grid>
            </Grid>

          </Grid>
        </Grid>
      </div>

    );
  }
}

export default withStyles(styles)(Report);


