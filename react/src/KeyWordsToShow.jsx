import React, { Component } from "react";
import 'typeface-roboto'
import Grid from '@material-ui/core/Grid'
import { Typography } from "@material-ui/core";
import Date from "./Date.js"
import NameAndSite from './NameAndSite.js'
import { withStyles } from '@material-ui/core/styles';
import VisibleReviewNavPanel  from './VisibleReviewNavPanel'
const styles = {
    reviewText: { textOverflow: 'ellipsis', overflow: 'hidden', maxHeight: '300px', textAlign: 'center', fontSize: '1.6em', display: 'block' }
}

class KeywordsToShow extends Component {
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
    prepareHtml = () => {
        console.log('state is ', this.props.s);
        let review = this.props.s.currentTargetedReviews[this.props.s.visibleReview].description;
        let name = this.props.s.currentTargetedReviews[this.props.s.visibleReview].author;
        let date  =  this.props.s.currentTargetedReviews[this.props.s.visibleReview].datePublished;
        const site = "Yelp";
        console.log('review', review);
        let reviewToReturn = (
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
        )
        return reviewToReturn
    }
    render() {
        return (
            <div style={{ padding: 0 }}>
                {this.prepareHtml()}
            </div>
        )
    }
}
export default withStyles(styles)(KeywordsToShow)
