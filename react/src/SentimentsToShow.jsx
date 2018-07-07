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
import SingleReview from './SingleReview.js';
import AllOfSentimentType from './AllOfSentimentType.js';

const styles = {
    reviewText: { textOverflow: 'ellipsis', overflow: 'hidden', maxHeight: '300px', textAlign: 'center', fontSize: '1.6em', display: 'block' }
}

class SentimentsToShow extends Component {
    // onComponentMount() {
    //     this.prepareHtml(null, this.props.completedData);
    //     this.state.indexOfReviewCurrentlyDisplayed = this.props.completedData / 2;

    // }

    // changeDisplayedReviews = (direction) => {
    //     console.log('in change displayed reviews direction is,', direction);
    //    this.props.reviewSwitch(direction); 
    // }

    mouseController = (message) => {
        switch (message) {
            case 'enter-review':
                styles.reviewText = { textOverflow: 'ellipsis', overflow: 'auto', maxHeight: '300px', textAlign: 'center', fontSize: '1.6em' }
                this.forceUpdate();
                //       console.log('in enter review', styles);
                break;
            case 'exit-review':
                styles.reviewText = { textOverflow: 'ellipsis', overflow: 'hidden', maxHeight: '300px', textAlign: 'center', fontSize: '1.6em' }
                this.forceUpdate();
                //     console.log('in exit review', styles);
                break;
        }
    }
    prepareHtml = (fadeBool, reviewsToShow) => {
        console.log('displayModifier', this.props.s.displayModifier);

        if (this.props.s.displayModifier === "volume") {
            console.log('modifier is set to volume')
            return <SingleReview s={this.props.s} />
        }
        else if (this.props.s.displayModifier === "volumeBySentiment") {
            
            let sentiment = this.props.s.displaySentimentType;
            console.log('in specific sentiment, which is', sentiment)
            let finalReviews = [];

            console.log('completedData',  this.props.s.completedData);
            //this gets the id numbers that show where the target concept(clickedItem) appears
            var watsonLabel = this.props.s.completedData.find(x => x.label === this.props.s.displaySentimentType)
            console.log('the reviews to display', watsonLabel.length);
            //this makes an array called finalArrays that contains the text of the targeted reviewa
            // for (var i = 0; i < watsonLabel.length; i++) {
            //     // finalReviews.push(this.findObjectByKey(this.state.completedData, 'id', references[i]).description);
            //     finalReviews.push(this.findObjectByKey(this.state.completedData, 'id', references[i]));
            //     return <AllOfSentimentType />
            // }
        }
    }
        render() {
            return (
                <div style={{ padding: 0, height: '100%' }}>

                    {this.prepareHtml()}
                </div>
            )
        }
    }
    export default withStyles(styles)(SentimentsToShow)
