import React, { Component } from "react";
import _ from 'lodash';
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

import SentimentsToShow from './sentiments-to-show';
import KeywordsToShow from './KeyWordsToShow';
import Ratings from "./ratings.js"
import OrganizedConcepts from './reportPartials/organizedConcepts.js';
import CompletedData from './reportPartials/completedData.js'
import BottomRightNav from './BottomRightNav.js';
import Colors from './AppColors';
import KeywordBarChart from './reportPartials/_barChartKWs';
import SentimentPieChart from './reportPartials/_pieChart';

const styles = {
  RightTopContainer: { height: '65%' },
  RightBottomContainer: { height: '34.5%', marginTop: 5 },
  RightTopPanel: { height: '100%', backgroundColor: Colors.RightTopColor },
  RightBottomPanel: { height: '100%', backgroundColor: Colors.RightBottomColor },
  AppBar: { backgroundColor: Colors.AppBarColor },
  MainTitle: { color: 'black', margin: 'auto' },
  menuButton: { color: "red", marginLeft: -12, marginRight: 20, root: { flexGrow: 1 }, flex: { flex: 1 } },
  MainContainer: { height: '100%', marginTop: 8 },
  LargePanel: { height: '100%', fontFamily: 'Bauhaus', backgroundColor: Colors.LargePanelColor },
  Top: { height: '86vh' },
  Paper: { backgroundColor: 'red' }
}
class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: Ratings,
      organizedConcepts: OrganizedConcepts,
      completedData: CompletedData,
      displaying: 'sentiment',
      leftSide: { displaying: 'sentiment', reviewsToShow: 2, show: 'both' },
      fadeTracker: { sentimentFadeBool: true, keywordFadeBool: false },
      currentTargetedReviews: [],
      currentTargetedType: '',
      specificTargetedReview: ""
      //reviews: []
    };
    console.log(this.state.completedData)
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

  LeftSideShow = (event) => {
    const { displaying, reviews, leftSide, fadeTracker } = this.state;
    switch (displaying) {
      case 'sentiment':
        const topReviews = { title: 'Top Endorsements', content: reviews.slice(0, leftSide.reviewsToShow) }
        const bottomReviews = { title: 'Harshest Criticisms', content: reviews.slice(-(leftSide.reviewsToShow), reviews.length) }
        return SentimentsToShow(leftSide.show, this.clickHandler, topReviews, bottomReviews, fadeTracker.sentimentFadeBool)
        break;
      case 'keyword':      
        return <KeywordsToShow  clickHandlerForKeyWordBarChart={this.clickHandlerForKeyWordBarChart} fadeTracker={fadeTracker.keywordFadeBool} currentTargetReviews={this.state.currentTargetedReviews} organizedConcepts={this.state.organizedConcepts}/>;
        break;
    }
  }

  RightSideShow = (event) => {
    const { displaying, reviews, leftSide, fadeTracker } = this.state;
    switch (displaying) {
      case 'sentiment':
        return <SentimentPieChart reviews={this.state.reviews} pickReviewTypeToDisplay={this.swapReviewsOnAllSentimentChartClick} />
        break;
      case 'keyword':
      //set this so the top keyword is shown first,
      // this.prepareKeyWordBarChart();
        return <KeywordBarChart  clickHandlerForKeyWordBarChart={this.clickHandlerForKeyWordBarChart}keywordClickHandler={this.clickHandlerForKeyWordBarChart} organizedConcepts={this.state.organizedConcepts} clickHandlerForKeyWordBarChart={this.clickHandlerForKeyWordBarChart} />
        break;
    }
  }

  toggleFade = () => {
    console.log('toggle fade called');
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

findObjectByKey(array, key, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
            return array[i];
        }
    }
    return null;
}

prepareKeyWordBarChart = () =>{
console.log('called prepare chart');
}
  clickHandlerForKeyWordBarChart = (clickedItem) => {
    console.log('clicked for key word bar chart', clickedItem);
    let finalReviews = [];
    //this gets the id numbers that show where the target concept(clickedItem) appears
    var references = this.state.organizedConcepts.find(x => x.content === clickedItem).references
    //this makes an array called finalArrays that contains the text of the targeted reviewa
    for (var i =0; i < references.length; i++){
      finalReviews.push(this.findObjectByKey(this.state.completedData, 'id', references[i]).description);
    }
    this.setState({currentTargetedReviews:finalReviews});
    this.render();
    console.log(this.state.currentTargetedReviews);
  }

  clickHandler = (clickedItem) => {
    // let clickedItem = event.target.dataset.message;
    switch (clickedItem) {
      case 'sentiment':
        if (this.state.displaying === clickedItem && this.state.fadeTracker.sentimentFadeBool) return
        this.setState({ ...this.state.leftSide.reviewsToShow = 2, ...this.state.leftSide.show = 'both', ...this.state.displaying = 'sentiment' }, () => {
          this.toggleFade();   
        });
        return
      case 'keyword':
        if (this.state.displaying === clickedItem && this.state.fadeTracker.keywordFadeBool) return
        this.setState({ ...this.state.displaying = 'keyword' }, () => {
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
            <Tonality />
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
                <div className="chart-container">
                  {this.RightSideShow()}
                </div>
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


