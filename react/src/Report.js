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
import ReviewsToShow from './reviews-to-show';
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
      checked: true
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
    const { checked } = this.state;
    const { reviews } = this.state;
    const whichReviews = this.state.leftSide.show;
    const topReviews = {
      title: 'Top Endorsements',
      content: reviews.slice(0, this.state.leftSide.reviewsToShow)
    }
    const bottomReviews = {
      title: 'Harshest Criticisms',
      content: reviews.slice(-(this.state.leftSide.reviewsToShow), reviews.length)
    }

    const clickHandler = (event) => {
      switch(event.target.dataset.message){
        case 'positiveReviews':
        console.log('positive clicked');
        this.setState({...this.state.leftSide.reviewsToShow = 4})
        this.setState({...this.state.leftSide.show= 'positive'})
        return
        case 'negativeReviews':
        console.log('negative clicked');
        this.setState({...this.state.leftSide.reviewsToShow = 4})
        this.setState({...this.state.leftSide.show= 'negative'})
        return
      }
    };
   
    // const reviewsToShow = () =>{
    //   console.log('in reviews to show')
    //  switch (this.state.leftSide.show){
       
    //   case 'both':
    //    return (<div><TextContainer className="top-reviews" clickHandler ={clickHandler } reviews={topReviews} dataMessageTitle="positiveReviews" aria-label="Fade"   />
    //    <br></br>
    //  <TextContainer className="bottom-reviews" reviews={bottomReviews} clickHandler={clickHandler} dataMessageTitle="negativeReviews"  aria-label="Fade"   /></div> )

    // case 'positive':
    //    return <TextContainer className="top-reviews" clickHandler ={clickHandler } reviews={topReviews} dataMessageTitle="positiveReviews" aria-label="Fade"  /> 
      
    //    case 'negative':
    //    return  <TextContainer className="bottom-reviews" reviews={bottomReviews} clickHandler={clickHandler} dataMessageTitle="negativeReviews"  aria-label="Fade"  />
    //  }
    // }

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
              {ReviewsToShow(this.state.leftSide.show, clickHandler, topReviews, bottomReviews)}
              </Paper>  
          </Grid>
        {/* Right*/}
          <Grid style={styles.RightSide} item sm={4}>             
          {/* Chart */}
              <Grid style={styles.RightTopSide} item sm={12}>
                <Paper style={styles.RightBottomPaper} data-message="topRight" onClick={clickHandler} >
                  <ChartContainer />
                </Paper>
              </Grid>
         {/* Nav */}
              <Grid style={styles.RightBottomSide} item sm={12}>
                <Paper style={styles.RightBottomPaper} data-message="bottomRight" onClick={clickHandler}  >
                  <ChartContainer />
                </Paper>
              </Grid>

            </Grid>
        </Grid>
      </div>
    );
  }
}
export default withStyles(styles)(Report);


