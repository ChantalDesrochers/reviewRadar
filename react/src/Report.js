import React, { Component } from "react";
import Grid from '@material-ui/core/Grid'
import TextContainer from "./reportPartials/_textContainer";
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper'
import Ratings from "./ratings.js"
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
import Fade from '@material-ui/core/Fade';
// remove hardcoded reviews after database is online

const styles = {
RightTopSide: {height:'69%'},
RightBottomSide: {height:'35%', marginTop:8},
RightTopPaper: {height:'100%'},
RightBottomPaper: {height:'100%'},

AppBar: { backgroundImage: `url(${AppBarTexture})`, backgroundRepeat: 'repeat', backgroundColor: '#B3E5FC' },
MainTitle: { color: 'black', margin: 'auto' },
menuButton: { color: "red", marginLeft: -12, marginRight: 20, root: { flexGrow: 1 }, flex: { flex: 1 } },
MainContainer:{height:'100%', marginTop:8},
  // RightContainer: {marginTop:0},
ReviewPaper: { height:'100%', backgroundColor: '#F0F4C3', backgroundImage: `url(${PaperTexture})`, backgroundRepeat: 'repeat', padding: 20,  fontFamily: 'Bauhaus' },
LeftSide:  {height:'100%'},
Top: {height:'86vh'}
  // ChartPaper: { height: 'calc(100%)', backgroundImage: `url(${PaperTexture})`, backgroundRepeat: 'repeat', backgroundColor: '#B3E5FC' },
  // NavPaper: { height: 'calc(100%)',  backgroundImage: `url(${PaperTexture})`, backgroundRepeat: 'repeat', backgroundColor: '#B3E5FC' },

}
class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: Ratings,
      leftSide:{displaying:'sentiment', reviewsToShow: 2, show: 'both'},
      checked: true,
    }
  }
  // componentDidMount(){
  // fetch('http://localhost:3001/1')
  // .then(results => { return results.json()  })
  // .then(results => {this.setState({reviews: results})
  // console.log('in report', this.state)}
  // );


  //  }

  render() {
    const { checked, reviews, leftSide } = this.state;

    const topReviews = {
      title: 'Top Endorsements',
      content: reviews.slice(0, leftSide.reviewsToShow)
    }
    const bottomReviews = {
      title: 'Harshest Criticisms',
      content: reviews.slice(-(leftSide.reviewsToShow), reviews.length)
    }

    const LeftSideShow = () => {
      switch (leftSide.displaying){
        case 'sentiment':
        return SentimentsToShow(leftSide.show, clickHandler, topReviews, bottomReviews)
        break;
        case 'keyword':
        return KeywordsToShow();
        break;
      }
    }
    // some sort of functional with a conditional that decides between sentiment adn category
    //is needed here

    const clickHandler = (event) => {
      switch(event.target.dataset.message){
        case 'positiveReviews':
        this.setState({...leftSide.reviewsToShow = 4})
        this.setState({...leftSide.show= 'positive'})
        return
        case 'negativeReviews':
        this.setState({...leftSide.reviewsToShow = 4})
        this.setState({...leftSide.show= 'negative'})
        return
        case 'bottomRight':
        console.log('bottom right clicked');
        this.setState({...leftSide.displaying = 'keyword'})
        return
      }
    };

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

              <Paper style={styles.ReviewPaper} data-message="left" onClick={clickHandler}>
              {/* There must be a cleaner way, using props or something.. */}
              {/* {SentimentsToShow(leftSide.show, clickHandler, topReviews, bottomReviews)} */}
              {/* {KeywordsToShow() */}
              {LeftSideShow()}
              </Paper>
          </Grid>
        {/* Right*/}
          <Grid style={styles.RightSide} item sm={4}>
          {/* Chart */}
              <Grid style={styles.RightTopSide} item sm={12}>
                <Paper style={styles.RightBottomPaper} data-message="topRight" onClick={clickHandler} >
                  <ChartContainer reviews={this.state.reviews}/>
                </Paper>
              </Grid>
         {/* Nav */}
              <Grid style={styles.RightBottomSide} item sm={12}>
                <Paper style={styles.RightBottomPaper} data-message="bottomRight" onClick={clickHandler}  >
                  {/*<ChartContainer reviews={this.state.reviews} />*/}
                </Paper>
              </Grid>

            </Grid>
        </Grid>
      </div>
    );
  }
}
export default withStyles(styles)(Report);


