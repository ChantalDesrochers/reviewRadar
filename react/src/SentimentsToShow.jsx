import React, { Component } from "react";
import TextContainer from "./reportPartials/_textContainer";
import 'typeface-roboto'
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import { IconButton, AccessAlarm, ThreeDRotation, Accessible, ArrowForward, PlayArrow, Navigation, Tonality } from '@material-ui/icons'
import { Typography } from "@material-ui/core";
import Paper from '@material-ui/core/Paper'
import ReviewStars from "./ReviewStars.js";
import WatsonBars from "./WatsonBar.js";
import Date from "./Date.js"
import NameAndSite from './NameAndSite.js'
class SentimentsToShow extends Component {
    constructor(props) {
        console.log('in sentiments constructor');
        super(props);
        this.state = {
            indexOfReviewCurrentlyDisplayed: 1
        };
    }
    onComponentMount() {
        console.log('in sentiment component mount');
        this.prepareHtml(null, this.props.completedData);
        this.state.indexOfReviewCurrentlyDisplayed = this.props.completedData / 2;

    }

    changeDisplayedReviews = (direction) => {
        let lastReviewIndex = this.props.currentTargetReviews.length;
        let index = this.state.indexOfReviewCurrentlyDisplayed
        console.log('indexof', index)
        if (direction === 'forward' && index !== lastReviewIndex) {
            this.setState({ indexOfReviewCurrentlyDisplayed: index + 1 })
        }
        else if (direction === 'forward' && index === lastReviewIndex) {
            console.log('no other reviews to see');
        }
        else if (direction === 'back' && index !== 1) {
            this.setState({ indexOfReviewCurrentlyDisplayed: index - 1 })
        }
        else if (direction === 'back' && index === 1) {
            console.log('yo you at zero');
        }
        console.log('index', index);
    }

    prepareHtml = (fadeBool, reviewsToShow) => {
        const index = this.state.indexOfReviewCurrentlyDisplayed;
        const review = this.props.completedData[index].description;
        const rating = this.props.completedData[index].rating;
        const date = this.props.completedData[index].datePublished;
        const name = this.props.completedData[index].author;
        const site = "Yelp";
        const watsonSentiment = this.props.completedData[index].score;
        ;
        let reviewToReturn = (
            <div style={{padding:3}}>
                <Grid container spacing={16} className={'demo'}>
                    <Grid item sm={12} style={{ float: 'left', width: "50%"}}>
                        <div >
                            <Grid style={{ float: 'left', width: "50%" }} item sm={6}>
                                <ReviewStars rating={rating} />
                            </Grid>

                            <Grid style={{ float: 'left', width: "50%"}} item sm={6}>
                                <Date  date={date} />
                            </Grid>
                        </div>
                    </Grid>

                    <Grid item sm={12}>
                        <div style={{ margin: 'auto' }}>
                            <Grid style={{ float: 'left', width: "50%" }} item sm={6}>
                                <WatsonBars watsonRating={watsonSentiment} />
                            </Grid>
                            <Grid style={{ float: 'left', width: "50%" }} item sm={6}>
                             <NameAndSite name={name} site={site}/>
                            </Grid>
                        </div>
                    </Grid>
                        <Grid className="top-text-container2" item sm={12}>
                            <Typography style={{ textAlign: 'center', padding: 50 }}> {review}</Typography>
                        </Grid>

                    </Grid>

                    <Grid className="buttons" container>
                        <Grid item sm={12}>
                        </Grid>

                        <Grid item sm={1}>
                            <div style={{ textAlign: 'center' }}>
                                <Button variant="contained" size="small" onClick={() => this.changeDisplayedReviews('back')} >
                                    <PlayArrow className="icon-flipped" />
                                </Button>
                            </div>
                        </Grid>


                        <Grid item sm={2}>
                            <div style={{ textAlign: 'center' }}>
                                <Button variant="contained" size="small" onClick={() => this.changeDisplayedReviews('forward')} >
                                    <PlayArrow />
                                </Button>
                            </div>
                        </Grid>
                        <Grid item sm={4}>
                        </Grid>
                    </Grid>

            </div >
                )
                return reviewToReturn
        
            }
        
    render() {
        return (
        
            <div style={{ padding: 0, height:'100%' }}>
                    {/* {this.prepareHtml(this.props.fadeBool, this.props.currentTargetReviews)} */}
                    {this.prepareHtml()}
                </div>

                )
            }
        }
        export default SentimentsToShow
        
        
        
        
// const SentimentsToShow = (whichReviews, clickHandler, topReviews, bottomReviews, fadeBool) => {
//   console.log('which reviews', whichReviews);
//   switch (whichReviews) {



//     case 'both':
//       return <Fade in={fadeBool} timeout={{enter:500, exit:0}}>
//   <p className="top-reviews" clickHandler={clickHandler} reviews={topReviews} dataMessageTitle={topReviews.title} />



//     </Fade>



//     case 'positive':
//       return <div style={{padding: 30}}><TextContainer className="top-reviews" clickHandler={clickHandler} reviews={topReviews} dataMessageTitle={topReviews.title} aria-label="Fade" /></div>
//     case 'negative':
//       return <div style={{padding: 30}}><TextContainer className="bottom-reviews" reviews={bottomReviews} clickHandler={clickHandler} dataMessageTitle={bottomReviews.title} aria-label="Fade" /></div>
//   }
// }