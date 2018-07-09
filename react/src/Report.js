import React, { Component } from "react";
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper'
import 'typeface-roboto'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import SentimentsToShow from './SentimentsToShow';
import KeywordsToShow from './KeyWordsToShow';
import Colors from './AppColors';
import KeywordBarChart from './reportPartials/_barChartKWs';
import SentimentPieChart from './reportPartials/_pieChart';
import SwapButton from './SwapButton';
import ChartContainer from "./reportPartials/_chartContainer";
import TopNavPanels from "./TopNavPanels.js";
import TopNavPanel from "./TopNavPanel.js";
import WatsonBars from './WatsonBar';
import VisibleReviewNavPanel from './VisibleReviewNavPanel.js';
import ReviewStars from "./ReviewStars";
import ChartsToShow from "./ChartsToShow.js"

const styles = {
  AppBar: { backgroundColor: Colors.AppBarColor },
  MainTitle: { color: 'black', margin: 'auto' },
  menuButton: { color: "red", marginLeft: -12, marginRight: 20, root: { flexGrow: 1 }, flex: { flex: 1 } },
  MainContainer: { height: '100%', marginTop: 8 },
  LargePanel: { position: 'relative', height: '50%', marginTop: 8, fontFamily: 'Bauhaus', backgroundColor: 'white' },
  // Top: { height: '89vh' },

  TopNavPanel: { float: 'left', padding: 20 },
  TopNavPanelContainer: { backgroundColor: "blue" },
  WatsonBars: { bottom: 50 },
  ReviewStars: { bottom: 100 },

  ChartOnLeftSide: { marginTop: 100 },
  ChartOnRightSide: {},
  ReviewNavButtonsOnLeftSide: { marginLeft: '35%', backgroundColor: 'blue' },
  ReviewNavButtonsOnRightSide: {}
}
class Report extends Component {
  constructor(props) {

    super(props);
    this.state = {
      dataFocus: 'review',
      displaying: 'sentiment',
      displayModifier: 'volume',
      displaySentimentType: '',
      companyName: 'Planta',
      fadeTracker: { sentimentFadeBool: true, keywordFadeBool: false },
      currentWatsonRating: 0,
      visibleReview: 1,
      leftShowing: 'text',
      keywordChartTarget: '',
      // live server data
      loading: true,
      reviews: [], // all reviews
      organizedConcepts: [], // reviews parsed into concepts
      monthConcepts: [], // reviews parsed into monthly concept data


    };
  }

  componentDidMount() {
    fetch('http://localhost:3001/1')
      .then(results => { return results.json() })
      .then(results => {
        this.setState({ loading: false, reviews: results.reviews, currentTargetedReviews: results.reviews, organizedConcepts: results.organizedConcepts, monthConcepts: results.monthConcepts, companyName: results.name })

      });
  }

  swapDisplaySides = () => {
    if (this.state.dataFocus === 'review') {
      this.setState((prevState) => {
        let newState = { ...prevState, dataFocus: 'chart' }
        return newState;
      })
    }
    else if (this.state.dataFocus === 'chart') {
      this.setState((prevState) => {
        let newState = { ...prevState, dataFocus: 'review' }
        return newState;
      })
    }
  }
  LeftSideShow = (event) => {
    const { displaying, reviews, leftSide, fadeTracker } = this.state;
    if (this.state.dataFocus === 'review') {
      switch (displaying) {
        case 'sentiment':
          return <div><SentimentsToShow s={this.state} reviewSwitch={this.reviewSwitch} />
            <VisibleReviewNavPanel style={styles.ReviewNavButtonsOnLeftSide} s={this.state} reviewSwitch={this.reviewSwitch} /></div>
          break;
        case 'keyword':
          return <div><KeywordsToShow s={this.state} reviewSwitch={this.reviewSwitch} />;
          <VisibleReviewNavPanel style={styles.ReviewNavButtonsOnLeftSide} s={this.state} reviewSwitch={this.reviewSwitch} /></div>
          break;
        case 'chart':
          return <ChartsToShow s={this.state} />
          break;
      }

    }
    else if (this.state.dataFocus === 'chart') {
      return <div style={styles.ChartOnLeftSide}><ChartContainer displaying={this.state.displaying} reviews={this.state.reviews}
        pickReviewTypeToDisplay={this.swapReviewsOnAllSentimentChartClick}
        reviewTypeToDisplayKW={this.clickHandlerForKeyWordBarChart}
        organizedConcepts={this.state.organizedConcepts}
        monthConcepts={this.state.monthConcepts}
        changeSentimentDisplayModifier={this.changeSentimentDisplayModifier}
        clickHandlerForSentimentTimeChart={this.clickHandlerForSentimentTimeChart}
        clickHandlerForKeywordTimeChart={this.clickHandlerForKeywordTimeChart}
        s={this.state}
      />
      </div>
    }

  }

  RightSideShow = (event) => {
    const { displaying, reviews, leftSide, fadeTracker } = this.state;

    if (this.state.dataFocus === 'chart') {
      switch (displaying) {
        case 'sentiment':
          return <div><SentimentsToShow s={this.state} reviewSwitch={this.reviewSwitch} />
            <VisibleReviewNavPanel s={this.state} reviewSwitch={this.reviewSwitch} /></div>
          break;
        case 'keyword':
          return <div> <KeywordsToShow s={this.state} reviewSwitch={this.reviewSwitch} />;
          <VisibleReviewNavPanel s={this.state} reviewSwitch={this.reviewSwitch} /></div>
          break;
      }

    }
    else if (this.state.dataFocus === 'review') {
      return <div style={styles.ChartOnRightSide}><ChartContainer displaying={this.state.displaying} reviews={this.state.reviews}
        pickReviewTypeToDisplay={this.swapReviewsOnAllSentimentChartClick}
        reviewTypeToDisplayKW={this.clickHandlerForKeyWordBarChart}
        organizedConcepts={this.state.organizedConcepts}
        monthConcepts={this.state.monthConcepts}
        changeSentimentDisplayModifier={this.changeSentimentDisplayModifier}
        clickHandlerForSentimentTimeChart={this.clickHandlerForSentimentTimeChart}
        clickHandlerForKeywordTimeChart={this.clickHandlerForKeywordTimeChart}
        s={this.state}
      />
      </div>
    }
  }
  swapReviewsOnAllSentimentChartClick = (focus) => {
    focus = focus.toLowerCase()
    const leftSide = { ...this.state.leftSide };
    switch (focus) {
      case 'positive':
        this.setState((prevState) => {
          let newState = { ...prevState, displayModifier: 'volumeBySentiment', displaySentimentType: 'positive' }
          return newState;
        })
        console.log('positive clicked');
        // this.setState({ leftSide })
        return
      case 'negative':
        this.setState((prevState) => {
          let newState = { ...prevState, displayModifier: 'volumeBySentiment', displaySentimentType: 'negative' }
          return newState;
        })
        console.log('negative clicked');
        return
    }
  }


  changeSentimentDisplayModifier = (displayModifier) => {
    this.setState((prevState) => {
      let newState = {
        ...prevState,
        displayModifier: displayModifier
      }
      return newState;
    })
  }

  clickHandlerForSentimentTimeChart = (clickedMonth) => {
    let month = clickedMonth.substring(0, 3)
    let dAlteredArray = this.state.reviews.map(review =>
      ({ ...review, datePublished: new Date(review.datePublished) })
    )
    let monthReviews = dAlteredArray.filter(review => review.datePublished.toString().includes(month))
    this.setState((prevState) => {
      let newState = { ...prevState, currentTargetedReviews: monthReviews, displayModifier: 'timebymonth', displaying: 'sentiment' }
      return newState;
    })
  }

  clickHandlerForKeyWordBarChart = (clickedItem) => {
    console.log('clicked for key word bar chart', clickedItem);
    let finalReviews = [];
    var references = this.state.organizedConcepts.find(x => x.content === clickedItem).references
    for (var i = 0; i < references.length; i++) {
      finalReviews.push(this.findObjectByKey(this.state.reviews, 'id', references[i]));
    }
    this.setState((prevState) => {
      let newState = { ...prevState, currentTargetedReviews: finalReviews }
      return newState;
    })
  }

  clickHandlerForKeywordTimeChart = (clickedMonth) => {
    console.log('clicked month on sentiment chart', clickedMonth)
    let month = clickedMonth.substring(0, 3)
    let dAlteredArray = this.state.reviews.map(review =>
      ({ ...review, datePublished: new Date(review.datePublished) })
    )
    console.log(dAlteredArray)
    let monthReviews = dAlteredArray.filter(review => review.datePublished.toString().includes(month))
    console.log(monthReviews)
    this.setState((prevState) => {
      let newState = { ...prevState, currentTargetedReviews: monthReviews, displayModifier: 'timebymonth', displaying: 'keyword' }
      return newState;
    })
  }

  //arrow key handler
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

  //not in use but needed for future reference
  toggleFade = () => {
    const newState = { ...this.state }
    console.log('toggle fade called');
    newState.fadeTracker.sentimentFadeBool = !this.state.fadeTracker.sentimentFadeBool;
    newState.fadeTracker.keywordFadeBool = !this.state.fadeTracker.keywordFadeBool;
    this.setState(newState)
  };

  //this is old but still in use, I think it is doing what the filter.map stuff is doing elsewhere
  findObjectByKey(array, key, value) {
    for (var i = 0; i < array.length; i++) {
      if (array[i][key] === value) {
        return array[i];
      }
    }
    return null;
  }

  topNavClickHandler = (clickedItem) => {
    const newState = { ...this.state }
    switch (clickedItem) {
      case 'sentiment':
        newState.displaying = 'sentiment';
        this.setState((prevState) => {
          let newState = { ...prevState, displayModifier: 'volume', displaying: 'sentiment', currentTargetedReviews: this.state.reviews, visibleReview: 1, }
          return newState;
        })
        break;
      case 'keyword':
        newState.displaying = 'keyword';
        this.setState((prevState) => {
          let newState = { ...prevState, displayModifier: 'volume', displaying: 'keyword', keywordChartTarget: this.state.organizedConcepts[0].content }
          // this.toggleFade();
          return newState
        });
        break;
      case 'charts': //added chart state handle
        this.setState((prevState) => {
          let newState = { ...prevState, displaying: 'chart' }
          return newState;
        })
        this.clickHandlerForKeyWordBarChart(this.state.organizedConcepts[0].content);
    }
  };
  render() {
    console.log('state', this.state)
    const watsonIndex = this.state.visibleReview;
    return (
      this.state.loading ? (<div> Loading </div>) : (
        <div style={styles.Top}>
          {/* TOP BANNER BAR */}
          <AppBar position="static" style={styles.AppBar}>
            <Typography variant="display3" style={styles.MainTitle}>{this.state.companyName}</Typography>
          </AppBar>
          {/* LEFT SIDE */}
          <Grid container style={styles.MainContainer} spacing={8}>
            <Grid item sm={8}>
              <TopNavPanels topNavClickHandler={this.topNavClickHandler} />
              <Grid style={styles.LeftContainer} item sm={12}>
                <div id="large-panel" style={styles.LargePanel} data-message="left" onClick={this.topNavClickHandler}>
                  <div style={{ paddingLeft: '50px', paddingRight: '50px', backgroundColor: "white" }} >
                    {this.LeftSideShow()}
                  </div>
                </div>
              </Grid>
            </Grid>
            {/* SWAP BUTTON */}
            <div style={{ position: 'absolute', bottom: 120, marginLeft: '65%' }}>
              <SwapButton swapDisplaySides={this.swapDisplaySides} />
            </div>
            {/* RIGHT SIDE */}
            <Grid item sm={4} >
              <Grid item sm={12}  >
                <Paper onClick={this.topNavClickHandler} >
                  {this.RightSideShow()}
                </Paper>
                <div>
                  <ReviewStars style={styles.ReviewStars} s={this.state} currentTargetedReviews={this.state.currentTargetedReviews} visibleReview={this.state.currentTargetedReviews[this.state.visibleReview]} />
                  <WatsonBars style={styles.WatsonBars} s={this.state} currentTargetedReviews={this.state.currentTargetedReviews} visibleReview={this.state.visibleReview} />
                </div>
              </Grid>
              {/* <Grid style={{ float: 'left', width: "50%" }} item sm={6}>
              </Grid> */}
            </Grid>
          </Grid>

        </div>)
    );
  }
}
export default withStyles(styles)(Report);