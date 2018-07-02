import React, { Component } from "react";
import Grid from '@material-ui/core/Grid'
import TextContainer from "./reportPartials/_textContainer";
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper'

import ChartContainer from "./reportPartials/_chartContainer";
import 'typeface-roboto'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PaperTexture from './textured-paper.png';
import AppBarTexture from './app-bar-image.png';

import SentimentsToShow from './sentiments-to-show';
import KeywordsToShow from './keywords-to-show';
import Ratings from "./ratings.js"
import BottomRightNav from './BottomRightNav.js';
import Fade from '@material-ui/core/Fade';
// remove hardcoded reviews after database is online

const styles = {
  RightTopSide: { height: '69%' },
  RightBottomSide: { height: '35%', marginTop: 8 },
  RightTopPaper: { height: '100%' },
  RightBottomPaper: { height: '100%' },

  AppBar: { backgroundImage: `url(${AppBarTexture})`, backgroundRepeat: 'repeat', backgroundColor: '#B3E5FC' },
  MainTitle: { color: 'black', margin: 'auto' },
  menuButton: { color: "red", marginLeft: -12, marginRight: 20, root: { flexGrow: 1 }, flex: { flex: 1 } },
  MainContainer: { height: '100%', marginTop: 8 },
  // RightContainer: {marginTop:0},
  ReviewPaper: { height: '100%', backgroundColor: '#F0F4C3', backgroundImage: `url(${PaperTexture})`, backgroundRepeat: 'repeat', padding: 20, fontFamily: 'Bauhaus' },
  LeftSide: { height: '100%' },
  Top: { height: '86vh' }
  // ChartPaper: { height: 'calc(100%)', backgroundImage: `url(${PaperTexture})`, backgroundRepeat: 'repeat', backgroundColor: '#B3E5FC' },
  // NavPaper: { height: 'calc(100%)',  backgroundImage: `url(${PaperTexture})`, backgroundRepeat: 'repeat', backgroundColor: '#B3E5FC' },

}
class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: Ratings,
      leftSide: { displaying: 'sentiment', reviewsToShow: 2, show: 'both' },
      fadeTracker: { sentiments: true,  keywords: false}
      //reviews: []
    };

 // this.start()
  }
  // componentDidMount(){
  // fetch('http://localhost:3001/1')
  // .then(results => { return results.json()  })
  // .then(results => {this.setState({reviews: results})
  // console.log('in report', this.state)}
  // );


  //  }
//  start = () => {
// this.toggleFade();
//     this.setState({ ...this.state.leftSide.reviewsToShow = 2 })
//     this.setState({ ...this.state.leftSide.show = 'both' });
//     this.setState({ ...this.state.leftSide.displaying = 'sentiment' });
//     this.showState('start state')
//   }

  showState = (message) => {
    console.log(message, this.state);
  }


  LeftSideShow = (event) => {
    const { reviews, leftSide, fadeTracker } = this.state;
    const topReviews = {
      title: 'Top Endorsements',
      content: reviews.slice(0, leftSide.reviewsToShow)
    }
    const bottomReviews = {
      title: 'Harshest Criticisms',
      content: reviews.slice(-(leftSide.reviewsToShow), reviews.length)
    }



    switch (leftSide.displaying) {
      case 'sentiment':
        // 'sentiments' and 'keywords' variables that are being passed are bools for fading, that needs to be fixed! names changed!
        return SentimentsToShow(leftSide.show, this.clickHandler, topReviews, bottomReviews, fadeTracker.sentiments)
        break;
      case 'keyword':
        return KeywordsToShow(fadeTracker.keywords);
        break;
    }

  }

  // handleChange = event => {
  //   const { checked1, checked2 } = this.state;
  //   if (event.target.name === "switch1" && checked1) return;
  //   if (event.target.name === "switch2" && checked2) return;
  //   this.toggleFade();
  // };

  toggleFade = () => {
    // this.setState(state => ({ checked1: !state.checked1 }));
    // this.setState(state => ({ checked2: !state.checked2 }));
    this.setState({ ...this.state.fadeTracker.sentiments = !this.state.fadeTracker.sentiments, ...this.state.fadeTracker.keywords= !this.state.fadeTracker.keywords })
  };
  

  clickHandler = (event) => {
    this.showState('start of clickHandler')
    let clickedItem = event.target.dataset.message;

    console.log("clicked item", clickedItem, "leftSide.show", this.state.leftSide.displaying)

    //  the fade handling in sentiment and keyword works but is wonky,, needs elegance
    // this.toggleFade()
    switch (clickedItem) {
      case 'positiveReviews':
        this.setState({ ...this.state.leftSide.reviewsToShow = 4 })
        this.setState({ ...this.state.leftSide.show = 'positive' })
        return
      case 'negativeReviews':
        this.setState({ ...this.state.leftSide.reviewsToShow = 4 })
        this.setState({ ...this.state.leftSide.show = 'negative' })
        return


      case 'sentiment':
        if (this.state.leftSide.displaying === clickedItem && this.state.fadeTracker.sentiments ) return
        console.log('calling show sentiment');
        this.setState({ ...this.state.leftSide.reviewsToShow = 2,  ...this.state.leftSide.show = 'both',...this.state.leftSide.displaying = 'sentiment' }, () => {
          this.toggleFade();
        });
       // this.setState({ ...this.state.leftSide.reviewsToShow = 2,  ...this.state.leftSide.show = 'both', })
         return
        
      //  else (console.log('already in correct state' + "clicked item", clickedItem, "leftSide.show", this.state.leftSide.displaying))
      //   return 
      case 'keyword':
        if (this.state.leftSide.displaying === clickedItem && this.state.fadeTracker.keywords) return 
        console.log('calling show keyword');
          this.setState({ ...this.state.leftSide.displaying = 'keyword' }, () => {
            this.toggleFade();
          });
         
        
        // else (console.log('already in correct state', "clicked item", clickedItem, "leftSide.show", this.state.leftSide.displaying))
        return
    }

  };

  render() {
    console.log('in render', this.state);
    return (
      <div style={styles.Top}>

        <AppBar position="static" style={styles.AppBar}>
          <Toolbar>
            <IconButton style={styles.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="display3" style={styles.MainTitle}>Komfort and Kim</Typography>
          </Toolbar>
        </AppBar>

        {/* Container Below Top Bar */}
        <Grid container style={styles.MainContainer} spacing={8}>
          {/* Reviews */}  {/* Left*/}
          <Grid style={styles.LeftSide} item sm={8}>
            <Paper style={styles.ReviewPaper} data-message="left" onClick={this.clickHandler}>
              {this.LeftSideShow()}
            </Paper>
          </Grid>
          {/* Right*/}
          <Grid style={styles.RightSide} item sm={4}>
            {/* Chart */}
            <Grid style={styles.RightTopSide} item sm={12}>
              <Paper style={styles.RightBottomPaper} data-message="topRight" onClick={this.clickHandler} >
                <ChartContainer />
              </Paper>
            </Grid>
            {/* Nav */}
            <Grid style={styles.RightBottomSide} item sm={12}>
              {/* Example of how to make the panels clickable */}
              {/* <Paper style={styles.RightBottomPaper} data-message="bottomRight" onClick={clickHandler}  > */}
              <Paper style={styles.RightBottomPaper} >
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


