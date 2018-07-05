import React, { Component } from "react";
import TextContainer from "./reportPartials/_textContainer";
import 'typeface-roboto'
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import { IconButton, LabelOutline, ThreeDRotation, Accessible, ArrowForward, PlayArrow, Navigation, Tonality } from '@material-ui/icons'
import { Typography } from "@material-ui/core";
import Paper from '@material-ui/core/Paper'
import ReviewStars from "./ReviewStars.js";
import WatsonBars from "./WatsonBar.js";
import Date from "./Date.js"
import NameAndSite from './NameAndSite.js'
import ReviewNavigationPanel from './ReviewNavigationPanel'
import { withStyles } from '@material-ui/core/styles';

const styles = {
    reviewText: { textOverflow: 'ellipsis', overflow: 'hidden', maxHeight: '300px', textAlign: 'center', fontSize: '1.6em', display: 'block' }
}

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

    mouseController = (message) => {
        switch (message) {
            case 'enter-review':
                styles.reviewText = { textOverflow: 'ellipsis', overflow: 'auto', maxHeight: '300px', textAlign: 'center', fontSize: '1.6em' }
                this.forceUpdate();
                console.log('in enter review', styles);
                break;
            case 'exit-review':
                styles.reviewText = { textOverflow: 'ellipsis', overflow: 'hidden', maxHeight: '300px', textAlign: 'center', fontSize: '1.6em' }
                this.forceUpdate();
                console.log('in exit review', styles);
                break;
        }
    }
    prepareHtml = (fadeBool, reviewsToShow) => {

    //    let {author, datePublished, rating, description} = this.props.completedData[index];
        const index = this.state.indexOfReviewCurrentlyDisplayed;
        const review = this.props.completedData[index].description;
        const rating = this.props.completedData[index].rating;
        const date = this.props.completedData[index].datePublished;
        const name = this.props.completedData[index].author;
        const site = "Yelp";
        const watsonSentiment = this.props.completedData[index].score;
        let reviewToReturn = (
            <div>
                <div className={'full-cue-card-review'}  >
                    <Grid container spacing={16} style={{ backgroundColor: "white" }} >
                        <Grid item sm={12} style={{ float: 'left', width: "50%" }}>
                            <Paper maxHeight={100}>
                                <Grid style={{ float: 'left', width: "50%" }} item sm={6}>
                                    <ReviewStars rating={rating} />
                                </Grid>
                                <Grid style={{ float: 'left', width: "50%" }} item sm={6}>
                                    <Date date={date} />
                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid item sm={12} >
                            <div style={{ margin: 'auto' }}>
                                <Grid style={{ float: 'left', width: "50%" }} item sm={6}>
                                    <WatsonBars watsonRating={watsonSentiment} />
                                </Grid>
                                <Grid style={{ float: 'left', width: "50%" }} item sm={6}>
                                    <NameAndSite name={name} site={site} />
                                </Grid>
                            </div>
                        </Grid>
                        <Grid item sm={12}  >
                            <Typography onMouseOver={() => this.mouseController('enter-review')} onMouseLeave={() => this.mouseController('exit-review')} style={styles.reviewText}>
                                {review}
                            </Typography>
                        </Grid>
                    </Grid>
                </div>
                <div>
                    <Grid className="buttons" container style={{ marginLeft: '35%', position: 'absolute', top: 450 }}>
                        <Grid item sm={12}>
                        </Grid>
                        <Grid item sm={1}>
                            <div style={{ textAlign: 'center' }}>
                                <Button variant="contained" size="small" onClick={() => this.changeDisplayedReviews('back')} >
                                    <LabelOutline className="icon-flipped" />
                                </Button>
                            </div>
                        </Grid>
                        <Grid item sm={2}>
                            <div style={{ textAlign: 'center' }}>
                                <Button variant="contained" size="small" onClick={() => this.changeDisplayedReviews('forward')} >
                                    <LabelOutline />
                                </Button>
                            </div>
                        </Grid>
                        <Grid item sm={4}>

                        </Grid>

                    </Grid>
                </div>
            </div >
        )
        return reviewToReturn
    }

    render() {
        return (
            <div style={{ padding: 0, height: '100%' }}>
                {/* {this.prepareHtml(this.props.fadeBool, this.props.currentTargetReviews)} */}
                {this.prepareHtml()}
            </div>
        )
    }
}
export default withStyles(styles)(SentimentsToShow)
