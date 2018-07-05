import React, { Component } from "react";
import _ from 'lodash';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper'
import 'typeface-roboto'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import SentimentsToShow from './SentimentsToShow';
import KeywordsToShow from './KeyWordsToShow';
import Ratings from "./ratings.js"
import OrganizedConcepts from './reportPartials/organizedConcepts.js';
import CompletedData from './reportPartials/completedData.js'
import BottomRightNav from './BottomRightNav.js';
import Colors from './AppColors';
import KeywordBarChart from './reportPartials/_barChartKWs';
import SentimentPieChart from './reportPartials/_pieChart';
import SwapButton from './SwapButton';

const styles = {
  RightTopContainer: { height: '100%' },
  //  RightBottomContainer: { height: '34.5%', marginTop: 5 },
  RightTopPanel: { height: '100%', backgroundColor: Colors.RightTopColor },
  //RightBottomPanel: { height: '100%', backgroundColor: Colors.RightBottomColor },
  AppBar: { backgroundColor: Colors.AppBarColor },
  MainTitle: { color: 'black', margin: 'auto' },
  menuButton: { color: "red", marginLeft: -12, marginRight: 20, root: { flexGrow: 1 }, flex: { flex: 1 } },
  MainContainer: { height: '100%', marginTop: 8 },
  LargePanel: { position: 'relative', height: '50%', marginTop: 8, fontFamily: 'Bauhaus', backgroundColor: 'white' },
  Top: { height: '89vh' },
}
class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: Ratings,
      organizedConcepts: OrganizedConcepts,
      completedData: CompletedData,
      displaying: 'sentiment',
      leftSide: { displaying: 'sentiment', reviewsToShow: 1, show: 'both' },
      fadeTracker: { sentimentFadeBool: true, keywordFadeBool: false },
      currentTargetedReviews: [],

      currentTargetedType: '',
      specificTargetedReview: "",
      leftShowing: 'text'
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
  // showState = (message) => {
  //   console.log(message, this.state);
  // }

  LeftSideShow = (event) => {
    const { displaying, reviews, leftSide, fadeTracker } = this.state;
    console.log('in left side show displaying', displaying);
    switch (displaying) {
      case 'sentiment':
        console.log('in case sentiment');
        return <SentimentsToShow currentTargetReviews={this.state.currentTargetedReviews} completedData={this.state.completedData} />;
        break;
      case 'keyword':
        return <KeywordsToShow clickHandlerForKeyWordBarChart={this.clickHandlerForKeyWordBarChart} fadeTracker={fadeTracker.keywordFadeBool} currentTargetReviews={this.state.currentTargetedReviews} organizedConcepts={this.state.organizedConcepts} />;
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
        return <KeywordBarChart clickHandlerForKeyWordBarChart={this.clickHandlerForKeyWordBarChart} keywordClickHandler={this.clickHandlerForKeyWordBarChart} organizedConcepts={this.state.organizedConcepts} clickHandlerForKeyWordBarChart={this.clickHandlerForKeyWordBarChart} />
        break;
    }
  }
  swapReviewsOnAllSentimentChartClick = (focus) => {
    focus = focus.toLowerCase()
    const leftSide = { ...this.state.leftSide };
    console.log('focus is', focus);
    switch (focus) {
      case 'positive':
        console.log('wow im in positive');
        leftSide.reviewsToShow = 4;
        leftSide.show = 'positive'
        this.setState({ leftSide })
        return
      case 'negative':
        console.log('oh im in negative');
        leftSide.reviewsToShow = 4;
        leftSide.show = 'negative'
        return
    }
  }
  clickHandlerForKeyWordBarChart = (clickedItem) => {
    console.log('clicked for key word bar chart', clickedItem);
    let finalReviews = [];
    //this gets the id numbers that show where the target concept(clickedItem) appears
    var references = this.state.organizedConcepts.find(x => x.content === clickedItem).references
    //this makes an array called finalArrays that contains the text of the targeted reviewa
    for (var i = 0; i < references.length; i++) {
      finalReviews.push(this.findObjectByKey(this.state.completedData, 'id', references[i]).description);
    }
    this.setState({ currentTargetedReviews: finalReviews });
    this.render();
  }
  toggleFade = () => {
    const newState = { ...this.state }
    console.log('toggle fade called');
    newState.fadeTracker.sentimentFadeBool = !this.state.fadeTracker.sentimentFadeBool;
    newState.fadeTracker.keywordFadeBool = !this.state.fadeTracker.keywordFadeBool;
    this.setState(newState)
  };
  
  findObjectByKey(array, key, value) {
    for (var i = 0; i < array.length; i++) {
      if (array[i][key] === value) {
        return array[i];
      }
    }
    return null;
  }
  clickHandler = (clickedItem) => {
    const newState = { ...this.state }
    switch (clickedItem) {
      case 'sentiment':
        newState.leftSide.reviewsToShow = 2;
        newState.leftSide.show = 'both';
        newState.displaying = 'sentiment';
        if (this.state.displaying === clickedItem && this.state.fadeTracker.sentimentFadeBool) return
        this.setState(newState, () => {
          this.toggleFade();
        });
        return
      case 'keyword':
        newState.displaying = 'keyword';
        if (this.state.displaying === clickedItem && this.state.fadeTracker.keywordFadeBool) return
        this.setState(newState, () => {
          this.toggleFade();
        });
        return
    }
  };
  render() {
    return (
      <div style={styles.Top}>
        <AppBar position="static" style={styles.AppBar}>
          <Typography variant="display3" style={styles.MainTitle}>Planta</Typography>
        </AppBar>
        <Grid container style={styles.MainContainer} spacing={8}>
          <Grid item sm={8}>
            <BottomRightNav leftSideShow={this.LeftSideShow} clickHandler={this.clickHandler} />
            <Grid style={styles.LeftContainer} item sm={12}>
              <div id="large-panel" style={styles.LargePanel} data-message="left" onClick={this.clickHandler}>
                <div style={{ paddingLeft: '50px', paddingRight: '50px', backgroundColor: "white" }} >
                  {this.LeftSideShow()}
                </div>
              </div>
            </Grid>
          </Grid>
          <div style={{ position: 'absolute', bottom: 120, marginLeft: '65%' }}>
            <SwapButton />
          </div>
          <Grid style={styles.RightContainer} item sm={4}>
            <Grid style={styles.RightTopContainer} item sm={12}>
              <Paper style={styles.RightTopPanel} data-message="topRight" onClick={this.clickHandler} >
                <Grid item>
                  <div className="chart-container">
                    {this.RightSideShow()}
                  </div>
                </Grid>
                <Grid>
                  <p>Toggle exists here</p>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default withStyles(styles)(Report);


