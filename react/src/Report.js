import React, { Component } from "react";

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper'
import 'typeface-roboto'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
//import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton, AccessAlarm, ThreeDRotation, Accessible, ArrowForward, PlayArrow, Navigation, Tonality } from '@material-ui/icons'
import SvgIcon from '@material-ui/core/SvgIcon';
import PaperTexture from './textured-paper.png';
import AppBarTexture from './app-bar-image.png';

import ChartContainer from "./reportPartials/_chartContainer";
import SentimentsToShow from './sentiments-to-show';
import KeywordsToShow from './keywords-to-show';
import Ratings from "./ratings.js"
import BottomRightNav from './BottomRightNav.js';
import Colors from './AppColors';
// const colors = {
//   RightTopContainerColor:  '# F1FFAF' ,
//   AppBarColor: '#68A0B2',
//   PieChartColors: {VeryPositiveColor: '#9B59B6' }
// }
const styles = {
  RightTopContainer: { height: '65%' },
  RightBottomContainer: { height: '34.5%', marginTop: 5 },
  RightTopPanel: { height: '100%', backgroundColor: Colors.RightTopColor},
  RightBottomPanel: { height: '100%', backgroundColor: Colors.RightBottomColor },
  AppBar: { backgroundColor: Colors.AppBarColor },
  MainTitle: { color: 'black', margin: 'auto' },
  menuButton: { color: "red", marginLeft: -12, marginRight: 20, root: { flexGrow: 1 }, flex: { flex: 1 } },
  MainContainer: { height: '100%', marginTop: 8 },
  LargePanel: { height: '100%', fontFamily: 'Bauhaus', backgroundColor: Colors.LargePanelColor },
  ChartContainer:{},
  // backgroundImage: `url(${PaperTexture})`, backgroundRepeat: 'repeat',    <=== For adding backgrounds to the panels

  // LeftContainer: { height: '100%' , padding:0},
  Top: { height: '86vh' },
  Paper: { backgroundColor: 'red' }
}
class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: Ratings,
      leftSide: { displaying: 'sentiment', reviewsToShow: 2, show: 'both' },
      fadeTracker: { sentimentFadeBool: true, keywordFadeBool: false }
      //reviews: []
    };
  }
  //*****************keep this and the above review for when we actually scrape******************
  // componentDidMount(){
  // fetch('http://localhost:3001/1')
  // .then(results => { return results.json()  })
  // .then(results => {this.setState({reviews: results})
  // console.log('in report', this.state)}
  // );
  //  }
  showState = (message) => {
    console.log(message, this.state);
  }

  //All 'sides' need to be removed from variables/functions and called ...maybe
  LeftSideShow = (event) => {
    const { reviews, leftSide, fadeTracker } = this.state;
    switch (leftSide.displaying) {
      case 'sentiment':
        const topReviews = { title: 'Top Endorsements', content: reviews.slice(0, leftSide.reviewsToShow) }
        const bottomReviews = { title: 'Harshest Criticisms', content: reviews.slice(-(leftSide.reviewsToShow), reviews.length) }
        return SentimentsToShow(leftSide.show, this.clickHandler, topReviews, bottomReviews, fadeTracker.sentimentFadeBool)
        break;
      case 'keyword':
        return KeywordsToShow(fadeTracker.keywordFadeBool);
        break;
    }
  }

  toggleFade = () => {
    this.setState({ ...this.state.fadeTracker.sentimentFadeBool = !this.state.fadeTracker.sentimentFadeBool, ...this.state.fadeTracker.keywordFadeBool = !this.state.fadeTracker.keywordFadeBool })
  };

  swapReviewsOnAllSentimentChartClick = (focus) => {
    focus = focus.toLowerCase()
    switch (focus) {
      case 'positive':
        console.log('wow im in positive');
        this.setState({ ...this.state.leftSide.reviewsToShow = 4 })
        this.setState({ ...this.state.leftSide.show = 'positive' })
        return
      case 'negative':
        console.log('oh im in negative');
        this.setState({ ...this.state.leftSide.reviewsToShow = 4 })
        this.setState({ ...this.state.leftSide.show = 'negative' })
        return
    }

  }

  clickHandler = (clickedItem) => {
    // let clickedItem = event.target.dataset.message;
    switch (clickedItem) {
      case 'sentiment':
        if (this.state.leftSide.displaying === clickedItem && this.state.fadeTracker.sentimentFadeBool) return
        this.setState({ ...this.state.leftSide.reviewsToShow = 2, ...this.state.leftSide.show = 'both', ...this.state.leftSide.displaying = 'sentiment' }, () => {
          this.toggleFade();
        });
        return
      case 'keyword':
        if (this.state.leftSide.displaying === clickedItem && this.state.fadeTracker.keywordFadeBool) return
        this.setState({ ...this.state.leftSide.displaying = 'keyword' }, () => {
          this.toggleFade();
        });
        return
    }
  };

  render() {
    return (
      <div style={styles.Top}>
        <AppBar position="static" style={styles.AppBar}>
          <Toolbar>
<Tonality/>
            {/* <IconButton style={styles.menuButton} color="inherit" aria-label="Menu"> */}
              <PlayArrow />
            {/* </IconButton> */}
            <Typography variant="display3" style={styles.MainTitle}>Planta</Typography>
          </Toolbar>
        </AppBar>
        <Grid container style={styles.MainContainer} spacing={8}>
          <Grid style={styles.LeftContainer} item sm={7}>
            <Paper id="large-panel" style={styles.LargePanel} data-message="left" onClick={this.clickHandler}>
            <div >
              {this.LeftSideShow()}
              </div>
            </Paper>
          </Grid>
          <Grid style={styles.RightContainer} item sm={5}>
            <Grid style={styles.RightTopContainer} item sm={12}>
              <Paper style={styles.RightTopPanel} data-message="topRight" onClick={this.clickHandler} >
                <ChartContainer reviews={this.state.reviews} pickReviewTypeToDisplay={this.swapReviewsOnAllSentimentChartClick} />
              </Paper>
            </Grid>
            <Grid style={styles.RightBottomContainer} item sm={12}>
              <Paper style={styles.RightBottomPanel} >
                <BottomRightNav leftSideShow={this.LeftSideShow} clickHandler={this.clickHandler} />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default withStyles(styles)(Report);


