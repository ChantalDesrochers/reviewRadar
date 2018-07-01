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
      fadeTracker: {sentiments:true, keywords: false}
      //reviews: []
    };
 console.log(this.state);
  }
  // componentDidMount(){
  // fetch('http://localhost:3001/1')
  // .then(results => { return results.json()  })
  // .then(results => {this.setState({reviews: results})
  // console.log('in report', this.state)}
  // );


  //  }
  
    LeftSideShow = (event) => {
      const topReviews = {
        title: 'Top Endorsements',
        content: this.state.reviews.slice(0, this.state.leftSide.reviewsToShow)
      }
      const bottomReviews = {
       title: 'Harshest Criticisms',
      content: this.state.reviews.slice(-(this.state.leftSide.reviewsToShow), this.state.reviews.length)
       }
        console.log('called left side show', this.state.leftSide.displaying);
        switch (this.state.leftSide.displaying) {
          case 'sentiment':
            // Is this the correct way to pass the info?
            // also the 'sentiments' and 'keywords' that are being passed are bools for fading, that needs to be fixed!
            return SentimentsToShow(this.state.leftSide.show, this.clickHandler, topReviews, bottomReviews, this.state.fadeTracker.sentiments)
            break;
          case 'keyword':
            return KeywordsToShow(this.state.fadeTracker.keywords);
            break;
        }
      }
      // some sort of functional with a conditional that decides between sentiment adn category
      //is needed here
  
clickHandler = (event) => {

       let  {reviewsToShow, show, displaying}  = this.state.leftSide
        let clickedItem = event.target.dataset.message;
        this.fadeHandler(clickedItem);
        console.log("in click handler:clicked item",  clickedItem)
        // if(clickedItem === leftSide.displaying)
        // {
        //   return
        // }
        switch (clickedItem) {
          case 'positiveReviews':
            this.setState({reviewsToShow:4})
            this.setState({reviewsToShow:4})
            this.setState({show:'positive' })
            return
          case 'negativeReviews':
            this.setState({reviewsToShow:4 })
            this.setState({show:'negative' })
            return
          case 'bottomRight':
            console.log('bottom right clicked');
            this.setState({displaying:'keyword' })
            return
          case 'showSentiment':
            this.setState({reviewsToShow:2 })
            this.setState({show:'both' })
            this.setState({...this.state.leftSide.show = 'sentiment' });
            this.setState({...this.state.leftSide.displaying = 'sentiment' });
            return
          case 'showKeyword':
         
            this.setState({...this.state.leftSide.displaying = 'keyword' });
         
            return
        }
       
      };
      //this tracks all fade states

fadeHandler = (clickedItem) => {
       console.log('Fade Handler, clicked item', clickedItem);
        switch(clickedItem){
          case 'showSentiment':
          this.setState({...this.state.fadeTracker.sentiments =  !this.state.fadeTracker.sentiments})
          this.setState({...this.state.fadeTracker.keywords = !this.state.fadeTracker.keywords})
          break;
          case 'showKeyword':
          this.setState({...this.state.fadeTracker.sentiments = !this.state.fadeTracker.sentimentsl})
          this.setState({...this.state.fadeTracker.keywords =  !this.state.fadeTracker.keywords})
          break;
        }
      };
  render() {

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


