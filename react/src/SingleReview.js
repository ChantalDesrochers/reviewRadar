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


class SingleReview extends Component {

  
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

        //    let {author, datePublished, rating, description} = this.props.completedData[index];
        const index = this.props.s.visibleReview;
        const review = this.props.s.completedData[index].description;
        const rating = this.props.s.completedData[index].rating;
        const date = this.props.s.completedData[index].datePublished;
        const name = this.props.s.completedData[index].author;
        const site = "Yelp";
        // const watsonSentiment = this.s.props.completedData[index].score;

        return (
            <div>
                <div className={'full-cue-card-review'}  >
                    <Grid container spacing={0}>
                        <Grid item sm={6} style={{ float: 'left', width: "50%" }}>
                            <Grid style={{ float: 'left', width: "50%" }} item sm={6}>
                                <NameAndSite name={name} site={site} />
                            </Grid>
                        </Grid>
                        <Grid item sm={6} >
                            <Grid style={{ float: 'left', width: "50%" }} item sm={6}>
                                <Date date={date} />
                            </Grid>
                        </Grid>
                        <Grid item sm={12}  >
                            <Typography onMouseOver={() => this.mouseController('enter-review')} onMouseLeave={() => this.mouseController('exit-review')} style={styles.reviewText}>
                                {review}
                            </Typography>
                        </Grid>
                    </Grid>
                </div>
            </div >
        );
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
export default withStyles(styles)(SingleReview)
