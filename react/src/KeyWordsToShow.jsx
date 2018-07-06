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
class KeywordsToShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            indexOfReviewCurrentlyDisplayed: 1
        };  
    }
    onComponentMount(){
      console.log('in keyword to show');
        this.prepareHtml(null, this.props.reviewsToShow);

    }
    //this is what the buttons call in order to go through the reviews
    changeDisplayedReviews = (direction) => {
        let lastReviewIndex = this.props.currentTargetReviews.length;
        let index = this.state.indexOfReviewCurrentlyDisplayed
        console.log('indexof', index)
        if (direction === 'forward' && index !== lastReviewIndex) {
        this.setState({indexOfReviewCurrentlyDisplayed: index + 1 })
        }
        else if(direction === 'forward' && index === lastReviewIndex){
            console.log('no other reviews to see');
        }
        else if (direction === 'back' && index !== 1 ) {
            this.setState({indexOfReviewCurrentlyDisplayed:index - 1 })
        }
        else if (direction === 'back' && index === 1){
            console.log('yo you at zero');
            //this should make the back button disappear
        }

    }
  
    prepareHtml = (fadeBool, reviewsToShow) => {

        if(reviewsToShow.length === 0){
       //     this is going to be passed to report as a n argument
       console.log('this . props', this.props)
            let  r = this.props.organizedConcepts[0].content;
             this.props.clickHandlerForKeyWordBarChart (r);
         
        }
        else
        console.log('review to display', reviewsToShow.slice(this.state.indexOfReviewCurrentlyDisplayed - 1, this.state.indexOfReviewCurrentlyDisplayed));
        let reviewToReturn = (
            <div styles={{ padding: 0 }}>
                <Grid container spacing={16}>
                    <Grid item sm={12}>
                        <Typography style={{ textAlign: 'center', padding: 50 }}> {reviewsToShow.slice(this.state.indexOfReviewCurrentlyDisplayed - 1, this.state.indexOfReviewCurrentlyDisplayed)}
                        </Typography>
                    </Grid>

                    <Grid item sm={5}>
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
            </div>
        )    
        return reviewToReturn
    }
    render() {
        return (

            <div style={{ padding: 0 }}>
                {this.prepareHtml(this.props.fadeBool, this.props.currentTargetReviews)}
            </div>

        )

    }
}
export default KeywordsToShow
