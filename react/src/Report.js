import React, { Component } from "react";
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
import Colors from './AppColors';
import KeywordBarChart from './reportPartials/_barChartKWs';
import SentimentPieChart from './reportPartials/_pieChart';
import SwapButton from './SwapButton';
import ChartContainer from "./reportPartials/_chartContainer";
import TopNavPanels from "./TopNavPanels.js";
import TopNavPanel from "./TopNavPanel.js";
import WatsonBars from './WatsonBar';
import VisibleReviewNavPanel from './VisibleReviewNavPanel.js';
import conceptAggreator from './parsingConceptbyMonth';
import checkForExisting from './parsingConceptbyMonth';
import ReviewStars from "./ReviewStars";

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
  TopNavPanel: { float: 'left', padding: 20 },
  TopNavPanelContainer: { backgroundColor: "blue" },
  WatsonBars: { bottom: 50 },
  ReviewStars: { bottom:100 }
}
class Report extends Component {
  constructor(props) {

    super(props);
    this.state = {
      companyName:'Planta',
      reviews: Ratings,
      organizedConcepts: OrganizedConcepts,
      completedData: CompletedData,
      displaying: 'sentiment',
      leftSide: { displaying: 'sentiment', reviewsToShow: 1, show: 'both' },
      fadeTracker: { sentimentFadeBool: true, keywordFadeBool: false },
      currentTargetedReviews: CompletedData,
      currentWatsonRating: 0,
      currentTargetedType: '',
      visibleReview: 1,
      leftShowing: 'text',
      keywordChartTarget: ''
      // reviews: []
    };
  }

  // componentDidMount() {
  //   //console.log('fired from report')
  //   fetch('http://localhost:3001/1')
  //     .then(results => { return results.json() })
  //     .then(results => {
  //       this.setState({ reviews: results })
  //       console.log('fetched and fired')
  //       // console.log('in report', this.state.reviews)
  //     });

  //   console.log('component did mount current target', this.state.currentTargetedReviews);
  // }

  LeftSideShow = (event) => {
    const { displaying, reviews, leftSide, fadeTracker } = this.state;
    switch (displaying) {
      case 'sentiment':
        return <SentimentsToShow currentTargetReviews={this.state.currentTargetedReviews}
          completedData={this.state.completedData}
          // reviewSwitch={this.reviewSwitch}
          visibleReview={this.state.visibleReview} />;
        break;
      case 'keyword':
        return <KeywordsToShow clickHandlerForKeyWordBarChart={this.clickHandlerForKeyWordBarChart}
          fadeTracker={fadeTracker.keywordFadeBool} 
          currentTargetReviews={this.state.currentTargetedReviews}

          s ={this.state}/>;
        break;
    }
  }

  //has chart container supplanted this?
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
    switch (focus) {
      case 'positive':
        leftSide.reviewsToShow = 4;
        leftSide.show = 'positive'
        this.setState({ leftSide })
        return
      case 'negative':
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
      // finalReviews.push(this.findObjectByKey(this.state.completedData, 'id', references[i]).description);


      finalReviews.push(this.findObjectByKey(this.state.completedData, 'id', references[i]));
    }
    console.log('final reviews', finalReviews)
    //old way that works
    // this.setState({ currentTargetedReviews: finalReviews });
    // this.render();
    //proper way from david/tim
  
    this.setState((prevState) => {
      let newState = { ...prevState,  currentTargetedReviews: finalReviews }
      return newState;
    })
  }
  reviewSwitch = (changeBy) => {
    if (changeBy === 'forward') {
      this.setState((prevState) => {
        let newState = { ...prevState, visibleReview: prevState.visibleReview + 1 }
        return newState;
      })
    }
    else if (changeBy === 'backward') {
      this.setState((prevState) => {
        let newState = { ...prevState, visibleReview: prevState.visibleReview - 1 }
        return newState;
      })
    }
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
    console.log('panel clicked, clicked item', clickedItem);
    const newState = { ...this.state }
    switch (clickedItem) {
      case 'sentiment':
        //Menotr Note:  syou need the second this.state.leftSide because this method will overwrite the whole object
        // so you copy it over one *****the could be refactored and might be wrong******
        this.setState({ ...this.state,
          leftSide: {
            ...this.state.leftSide,
            reviewsToShow: 2,
            show: 'both'
          }
        })
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
        // if (this.state.displaying !== clickedItem)
        console.log('in keyword');
        this.setState((prevState)  => {

  //  this.clickHandlerForKeyWordBarChart(this.state.organizedConcepts[0].content)

          let newState = {...prevState, displaying: 'keyword', keywordChartTarget: this.state.organizedConcepts[0].content}
        // this.toggleFade();
          return newState
        });
      this.clickHandlerForKeyWordBarChart(this.state.organizedConcepts[0].content);
    }

  //   this.setState((prevState) => {
  //     let newState = { ...prevState, visibleReview: prevState.visibleReview - 1 }
  //     return newState;
  //   })
  // }

  };
  render() {
    const watsonIndex = this.state.visibleReview;
    return (
      <div style={styles.Top}>
        <AppBar position="static" style={styles.AppBar}>
          <Typography variant="display3" style={styles.MainTitle}>Planta</Typography>
        </AppBar>
        <Grid container style={styles.MainContainer} spacing={8}>
          <Grid item sm={8}>
            <TopNavPanels clickHandler={this.clickHandler} />
            <Grid style={styles.LeftContainer} item sm={12}>
              <div id="large-panel" style={styles.LargePanel} data-message="left" onClick={this.clickHandler}>
                <div style={{ paddingLeft: '50px', paddingRight: '50px', backgroundColor: "white" }} >
                  {this.LeftSideShow()}
                </div>
                <VisibleReviewNavPanel reviewSwitch={this.reviewSwitch}/>         
              </div>
             
            </Grid>
          </Grid>
          <div style={{ position: 'absolute', bottom: 120, marginLeft: '65%' }}>
            <SwapButton />
          </div>

          <Grid style={styles.RightContainer} item sm={4}>
            <Grid style={styles.RightTopContainer} item sm={12}>
              <Paper style={styles.RightTopPanel} data-message="topRight" onClick={this.clickHandler} >
                <ChartContainer displaying={this.state.displaying} reviews={this.state.reviews}
                  pickReviewTypeToDisplay={this.swapReviewsOnAllSentimentChartClick}
                  reviewTypeToDisplayKW={this.clickHandlerForKeyWordBarChart} />
              </Paper>
              <div>
               {/* <ReviewStars style={styles.ReviewStars} currentTargetedReviews={this.state.currentTargetedReviews} visibleReview={this.state.currentTargetedReviews[this.state.visibleReview]}/> */}
                <WatsonBars style={styles.WatsonBars}  s={this.state} currentTargetedReviews={this.state.currentTargetedReviews} visibleReview={this.state.visibleReview} />  
              </div>
            </Grid>
            <Grid style={{ float: 'left', width: "50%" }} item sm={6}>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default withStyles(styles)(Report);
