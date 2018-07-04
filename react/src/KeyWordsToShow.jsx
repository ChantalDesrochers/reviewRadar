import React, { Component } from "react";
import TextContainer from "./reportPartials/_textContainer";
import 'typeface-roboto'
import Fade from '@material-ui/core/Fade';
import { Typography } from "@material-ui/core";
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';
import { IconButton, AccessAlarm, ThreeDRotation, Accessible, ArrowForward, PlayArrow, Navigation, Tonality } from '@material-ui/icons'

class KeywordsToShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            indexOfReviewCurrentlyDisplayed: 1
        };
    }

    changeDisplayedReviews = (direction) => {
        console.log('direction', direction);
      
        let index = this.state.indexOfReviewCurrentlyDisplayed
        console.log('indexof', index)
        if (direction === 'forward') {
        this.setState({indexOfReviewCurrentlyDisplayed:index + 1 })
        }
        else {
            this.setState({indexOfReviewCurrentlyDisplayed:index - 1 })
        }

    }

    prepareHtml = (fadeBool, reviewsToShow) => {

        console.log('all the reviews', reviewsToShow);
        console.log('revierw to display', reviewsToShow.slice(this.state.indexOfReviewCurrentlyDisplayed - 1, this.state.indexOfReviewCurrentlyDisplayed));
        let reviewToReturn = (
            <div styles={{ padding: 0 }}>
                <Grid container spacing={16}>
                    <Grid item sm={12}>
                        <Typography style={{ textAlign: 'center', padding: 50 }}> {reviewsToShow.slice(this.state.indexOfReviewCurrentlyDisplayed - 1, this.state.indexOfReviewCurrentlyDisplayed)};
        let reviewToReturn = (} </Typography>
                    </Grid>

                    <Grid item sm={5}>
                    </Grid>

                    <Grid item sm={1}>
                        <div style={{ textAlign: 'center' }}>
                            <Button variant="contained" size="small" onClick={() => this.changeDisplayedReviews('forward')} >
                                <PlayArrow className="icon-flipped" />

                            </Button>
                        </div>
                    </Grid>


                    <Grid item sm={2}>
                        <div style={{ textAlign: 'center' }}>
                            <Button variant="contained" size="small" onClick={() => this.changeDisplayedReviews('back')} >
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
