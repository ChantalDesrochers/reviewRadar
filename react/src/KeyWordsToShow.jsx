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
    }

    prepareHtml = (fadeBool, reviewsToShow) => {

        console.log('all the reviews', reviewsToShow);
        console.log('revierw to display', reviewsToShow.slice(3, 4) );
        let reviewToReturn =  (
            <div styles={{ padding: 0 }}>
                <Grid container spacing={16}>
                    <Grid item sm={12}>
                        <Typography style={{ textAlign: 'center', padding: 50 }}> {reviewsToShow.slice(3, 4)} </Typography>
                    </Grid>

                    <Grid item sm={5}>
                    </Grid>

                    <Grid item sm={1}>
                        <div style={{ textAlign: 'center' }}>
                            <Button variant="contained" size="small">
                                <PlayArrow className="icon-flipped" />

                            </Button>
                        </div>
                    </Grid>



                    <Grid item sm={2}>
                        <div style={{ textAlign: 'center' }}>
                            <Button variant="contained" size="small">
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
