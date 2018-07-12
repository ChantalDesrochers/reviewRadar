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
import SwapButton from './SwapButton';
import ChartContainer from "./reportPartials/_chartContainer";
import TopNavPanels from "./TopNavPanels.js";
import WatsonBar from './WatsonBar.js';
import VisibleReviewNavPanel from './VisibleReviewNavPanel.js';
import ReviewStars from "./ReviewStars";
import ChartsToShow from "./ChartsToShow.js";
import DisplayTitle from "./DisplayTitle"
import Fade from '@material-ui/core/Fade';



const styles = {
  AppBar: { backgroundColor: '#69bee3', height: '80px', boxShadow: 'none', borderRadius: '5px' },
  MainTitle: { color: 'black', margin: 'auto' },
  menuButton: { color: "red", marginLeft: -12, marginRight: 20, root: { flexGrow: 1 }, flex: { flex: 1 } },
  MainContainer: { height: '100%', marginTop: 8 },
  LargePanel: { position: 'relative', height: '50%', marginTop: 8, fontFamily: 'Bauhaus', backgroundColor: 'white' },
  // Top: { height: '89vh' },
  RightContainer: { paddingRight: '45px', height: '88vh' },
  TopNavPanel: { float: 'left', padding: 20 },
  TopNavPanels: { textAlign: 'center', height: '140px', marginLeft: '-125px' },

  ReviewWatson: { textAlign: 'center', marginTop: '-28%' },
  WatsonBars: { bottom: 50 },
  ReviewStars: { bottom: 100 },
  ChartOnLeftSide: {},
  ChartOnRightSide: { height: '100%' },
  ReviewNavButtonsOnLeftSide: {},
  ReviewNavButtonsOnRightSide: {},
  PaperForLeftReview: { height: '551px' },
  WatsonContainer: { position: 'relative', top: '-2px', right: '-7px' }


}

class Report extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataFocus: 'review',
      displaying: 'sentiment',
      displayModifier: 'volume',
      displaySentimentType: '',
      displayTitle: 'Your Top Review - toggle right to go from most positive to least',
      companyName: 'Planta',
      fadeTracker: { sentimentFadeBool: true, keywordFadeBool: false },
      currentWatsonRating: 0,
      visibleReview: 175,
      leftShowing: 'text',
      keywordChartTarget: '',

      // live server data
      loading: true,
      reviews: [], // all reviews
      organizedConcepts: [], // reviews parsed into concepts
      monthConcepts: [], // reviews parsed into monthly concept data
      keywordArray: [],
      currentTargetedReviews: [],
      SentimentSummaryIndex: 5,
      SummaryIndexMultiple: 5,
      CurrentMonth: '',

      FadeLeftSideSingle: true,
      FadeRightSideSingle: true,
      FadeInTime: 5000,
      FadeOutTime: 5000

    };
  }

  componentDidMount() {
    fetch('http://localhost:3001/1')
      .then(results => { return results.json() })
      .then(results => {
        this.setState({ loading: false, reviews: results.reviews, currentTargetedReviews: results.reviews, organizedConcepts: results.organizedConcepts, monthConcepts: results.monthConcepts, companyName: results.name })
        this.state.keywordArray = this.state.organizedConcepts;
      });
  }

  dateParsingReviews = () => {
    let reviews = this.state.reviews
    let dAlteredArray = reviews.map(review =>
      ({ ...review, datePublished: new Date(review.datePublished) })
    )
    const sortedDate = dAlteredArray.sort(function (a, b) {
      return b.datePublished - a.datePublished
    })
    let recentReviews = sortedDate.slice(0, 5)
    recentReviews = recentReviews.map(review => (
      <div>
        <h2>{review.datePublished.toString().substring(0, 15)}</h2>
        <p>{review.description}</p>
      </div>))
    return recentReviews
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

  //not in use but needed for future reference
  toggleFade = () => {
    const newState = { ...this.state }
    console.log('toggle fade called');
    newState.fadeTracker.sentimentFadeBool = !this.state.fadeTracker.sentimentFadeBool;
    newState.fadeTracker.keywordFadeBool = !this.state.fadeTracker.keywordFadeBool;
    this.setState(newState)
  };

  LeftSideShow = (event) => {
    const { displaying, reviews, leftSide, fadeTracker } = this.state;
    if (this.state.dataFocus === 'review') {
      switch (displaying) {
        case 'sentiment':
          return <Fade in={true} timeout={{ enter: this.props.FadeInTime, exit: this.props.FadeOutTime }}><div style={{ padding: 0, margin: 0 }}>
            <DisplayTitle style={{ height: '100px' }} s={this.state} />
            <SentimentsToShow s={this.state} dateParsingReviews={this.dateParsingReviews} reviewSwitch={this.reviewSwitch} />
            <VisibleReviewNavPanel style={styles.ReviewNavButtonsOnLeftSide} s={this.state} reviewSwitch={this.reviewSwitch} clickHandlerForSentimentSummary={this.clickHandlerForSentimentSummary} />
          </div></Fade>
          break;
        case 'keyword':
          return <Fade in={true} timeout={{ enter: this.props.FadeInTime, exit: this.props.FadeOutTime }}><div style={{ padding: 0, margin: 0 }}>
            <DisplayTitle style={{ height: '100px' }} s={this.state} />
            <Paper style={styles.PaperForLeftReview}>
              <KeywordsToShow s={this.state} dateParsingReviews={this.dateParsingReviews} reviewSwitch={this.reviewSwitch} />
            </Paper>
            <VisibleReviewNavPanel s={this.state} reviewSwitch={this.reviewSwitch} clickHandlerForSentimentSummary={this.clickHandlerForSentimentSummary} />
          </div></Fade>
          break;
        //is this the problem, there is no chart?
        // case 'chart':
        //   <Link to="/charts"></Link>
        //   break;
      }

    }
    else if (this.state.dataFocus === 'chart') {
      return  <div style={styles.ChartOnLeftSide}>


        <ChartContainer displaying={this.state.displaying} reviews={this.state.reviews}
          pickReviewTypeToDisplay={this.swapReviewsOnAllSentimentChartClick}
          reviewTypeToDisplayKW={this.clickHandlerForKeyWordBarChart}
          organizedConcepts={this.state.organizedConcepts}
          monthConcepts={this.state.monthConcepts}
          changeSentimentDisplayModifier={this.changeSentimentDisplayModifier}
          clickHandlerForSentimentTimeChart={this.clickHandlerForSentimentTimeChart}
          clickHandlerForKeywordTimeChart={this.clickHandlerForKeywordTimeChart}
          changeKeywordDisplayModifier={this.changeKeywordDisplayModifier}
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
          return <Fade in={true} timeout={{ enter: this.props.FadeInTime, exit: this.props.FadeOutTime }}><div>  <DisplayTitle style={{ height: '100px' }} s={this.state} /><Paper><SentimentsToShow s={this.state} dateParsingReviews={this.dateParsingReviews} reviewSwitch={this.reviewSwitch} />
            <VisibleReviewNavPanel style={styles.ReviewNavButtonsOnLeftSide} s={this.state} reviewSwitch={this.reviewSwitch} clickHandlerForSentimentSummary={this.clickHandlerForSentimentSummary} />
          </Paper></div></Fade>
          break;
        case 'keyword':
          return <Fade in={true} timeout={{ enter: this.props.FadeInTime, exit: this.props.FadeOutTime }}><div><DisplayTitle style={{ height: '100px' }} s={this.state} /> <KeywordsToShow s={this.state} dateParsingReviews={this.dateParsingReviews} reviewSwitch={this.reviewSwitch} />
         <VisibleReviewNavPanel style={styles.ReviewNavButtonsOnLeftSide} s={this.state} reviewSwitch={this.reviewSwitch} clickHandlerForSentimentSummary={this.clickHandlerForSentimentSummary} />
          </div></Fade>
          break;
      }
    }
    else if (this.state.dataFocus === 'review') {

      return <div style={styles.ChartOnRightSide}>

        <Paper style={{ height: '100%' }} >
          <ChartContainer className="Level4" displaying={this.state.displaying} reviews={this.state.reviews}
            pickReviewTypeToDisplay={this.swapReviewsOnAllSentimentChartClick}
            reviewTypeToDisplayKW={this.clickHandlerForKeyWordBarChart}
            organizedConcepts={this.state.organizedConcepts}
            monthConcepts={this.state.monthConcepts}
            changeSentimentDisplayModifier={this.changeSentimentDisplayModifier}
            changeKeywordDisplayModifier={this.changeKeywordDisplayModifier}
            clickHandlerForSentimentTimeChart={this.clickHandlerForSentimentTimeChart}
            clickHandlerForKeywordTimeChart={this.clickHandlerForKeywordTimeChart}
            s={this.state}
          />
        </Paper>
      </div>
    }
  }

  swapReviewsOnAllSentimentChartClick = (focus) => {
    focus = focus.toLowerCase()
    this.setState((prevState) => {
      let newState = { ...prevState, displayModifier: 'volumeBySentiment', displaySentimentType: focus }
      return newState;
    })
  }

  changeSentimentDisplayModifier = (displayModifier) => {
    this.setState((prevState) => {
      let newState = {
        ...prevState,
        displayModifier: displayModifier,
        visibleReview: 0,
      }
      return newState;
    })
  }

  changeKeywordDisplayModifier = (displayModifier) => {
    this.setState((prevState) => {
      let newState = {
        ...prevState,
        displayModifier: displayModifier,
        visibleReview: 0,
      }
      return newState;
    })
  }

  //up down arrow
  clickHandlerForSentimentSummary = (direction) => {
    console.log('i am in click handler for sentiment summary', direction);
    if (direction === 'up') {
      this.setState((prevState) => {
        let newState = { ...prevState, SentimentSummaryIndex: this.state.SentimentSummaryIndex + this.state.SummaryIndexMultiple }
        return newState;
      })
    }

    else if (direction === 'down' && this.state.SentimentSummaryIndex > this.state.SummaryIndexMultiple) {
      this.setState((prevState) => {
        let newState = { ...prevState, SentimentSummaryIndex: this.state.SentimentSummaryIndex - this.state.SummaryIndexMultiple }
        return newState;
      })
    }
  }

  clickHandlerForSentimentTimeChart = (clickedMonth, clickedLabel) => {
    let month = clickedMonth.substring(0, 3)
    let dAlteredArray = this.state.reviews.map(review =>
      ({ ...review, datePublished: new Date(review.datePublished) })
    )
    let monthReviews = dAlteredArray.filter(review => review.datePublished.toString().includes(month))
    this.setState((prevState) => {
      let newState = { ...prevState, currentTargetedReviews: monthReviews, displayModifier: 'timebymonth', displaying: 'sentiment', CurrentMonth: clickedMonth }
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
      let newState = { ...prevState, currentTargetedReviews: finalReviews, keywordChartTarget: clickedItem }
      return newState;
    })
  }

  clickHandlerForKeywordTimeChart = (clickedMonth, clickedLabel) => {
    console.log('clicked month on keyword time chart', clickedMonth)
    console.log('clicked label on keyword time chart', clickedLabel)
    let month = clickedMonth.substring(0, 3)
    let dAlteredArray = this.state.reviews.map(review =>
      ({ ...review, datePublished: new Date(review.datePublished) })
    )
    const checkForExisting = match => element => {
      // console.log('check match', match)
      // console.log('check element', element)
      return element == match;
    };

    let monthReviews = dAlteredArray.filter(review => review.datePublished.toString().includes(month))
    // console.log('month reiews', monthReviews[0]);
    // let finalReviews = monthReviews.filter(review => review.concepts.includes('bun'));
    // console.log(finalReviews);
    let finalReviews = []
    monthReviews.forEach(function(review) {
      review.concepts.forEach(function(concept) {
        let existingIndex = checkForExisting(concept.content)(clickedLabel)
        if (existingIndex === true) {
          finalReviews.push(review);
        }
      });
    });

    console.log(finalReviews)

    this.setState((prevState) => {
      let newState = { ...prevState, currentTargetedReviews: finalReviews, displayModifier: 'timebymonth', displaying: 'keyword', CurrentMonth: clickedMonth, keywordChartTarget: clickedLabel }
      return newState;
    })
  }

  //arrow key handler
  reviewSwitch = (changeBy) => {

    if (changeBy === 'forward') {
      if (this.state.visibleReview !== this.state.currentTargetedReviews.length - 1) {
        this.setState((prevState) => {
          let newState = { ...prevState, visibleReview: prevState.visibleReview + 1 }
          return newState;
        })
      }
    }
    else if (changeBy === 'backward') {
      if (this.state.visibleReview > 0) {
        this.setState((prevState) => {
          let newState = { ...prevState, visibleReview: prevState.visibleReview - 1 }
          return newState;
        })
      }
    }
  }




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
    // const newState = { ...this.state }
    switch (clickedItem) {
      case 'sentiment':
        // newState.displaying = 'sentiment';
        this.setState((prevState) => {
          let newState = { ...prevState, displayModifier: 'volume', displaying: 'sentiment', currentTargetedReviews: this.state.reviews, visibleReview: 0, }
          return newState;
        })
        break;
      case 'keyword':
        // newState.displaying = 'keyword';
        this.setState((prevState) => {
          let newState = { ...prevState, displayModifier: 'volume', displaying: 'keyword', keywordChartTarget: this.state.organizedConcepts[0].content, visibleReview: 0 }
          // this.toggleFade();
          this.clickHandlerForKeyWordBarChart(this.state.organizedConcepts[0].content);
          return newState
        });
        break;
      case 'charts':
        // added chart state handle

        this.setState((prevState) => {
          let newState = { ...prevState, displayModifier: '', displaying: 'allcharts', dataFocus: 'review' }
          return newState
        });
        break;
    }
  }




  render() {
    const watsonIndex = this.state.visibleReview;
    return (
      this.state.loading ? (<div> Loading </div>) : (
        <div style={styles.Top}>
          {/* TOP BANNER BAR */}
          <AppBar position="static" style={styles.AppBar}>
            <Typography variant="display3" style={styles.MainTitle}>{this.state.companyName}</Typography>
          </AppBar>
          {this.state.displaying === 'allcharts' ? (
            <div style={styles.TopNavPanels}>
              <TopNavPanels s={this.state} topNavClickHandler={this.topNavClickHandler} />
              <ChartsToShow s={this.state} /> </div>) : (
              <div>

                {/* <AppBar className='******************' position="absolute" style={{top:'94px', opacity:0.4, backgroundColor:'green', height: '15px', zIndex:1, display:'block'}}>
          </AppBar>
          <AppBar className='@@@@@@@@@@@@@@@@' position="absolute" style={{top:'614px', opacity:0.4, backgroundColor:'blue', height: '15px', zIndex:1, display:'block'}}>
          </AppBar>
          <AppBar className='!!!!!!!!!!!!!!!!!' position="absolute" style={{top:'948px', opacity:0.4, backgroundColor:'red', height: '15px', zIndex:1, display:'block'}}>
          </AppBar> */}

                {/* LEFT SIDE */}
                <Grid container style={styles.MainContainer} spacing={8}>
                  <Grid item sm={8} >
                    <div style={styles.TopNavPanels}>
                      <TopNavPanels s={this.state} topNavClickHandler={this.topNavClickHandler} />
                    </div>
                    <Grid style={styles.LeftContainer} style={{ marginTop: -25 }} item sm={12}>
                      <div id="large-panel" style={styles.LargePanel} data-message="left" onClick={this.topNavClickHandler}>
                        <div style={{ paddingLeft: '50px', paddingRight: '50px', paddingTop: '20px', backgroundColor: "white" }} >
                          {this.LeftSideShow()}
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                  {/* SWAP BUTTON */}
                  <div style={{ position: 'absolute', top: '13%', marginLeft: '64%', left: '-60px' }}>
                    <SwapButton swapDisplaySides={this.swapDisplaySides} />
                  </div>
                  {/* RIGHT SIDE */}
                  <Grid item sm={4} style={styles.RightContainer} >
                    <Grid item sm={12} className="level1" style={{ height: '100%' }}  >
                      <div onClick={this.topNavClickHandler} style={{ height: '100%' }} className="level2" >
                        {this.RightSideShow()}
                      </div>
                      <Grid item sm={12} style={styles.WatsonContainer} >
                        <div style={styles.ReviewWatson}>
                          <ReviewStars s={this.state} style={styles.ReviewStars} currentTargetedReviews={this.state.currentTargetedReviews} visibleReview={this.state.currentTargetedReviews[this.state.visibleReview]} />
                          <WatsonBar s={this.state} style={styles.WatsonBars} currentTargetedReviews={this.state.currentTargetedReviews} visibleReview={this.state.visibleReview} />
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </div>)
          }


        </div>)
    );
  }
}
export default withStyles(styles)(Report);
