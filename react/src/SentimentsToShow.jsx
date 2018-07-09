import React, { Component } from "react";
import 'typeface-roboto'
import { withStyles } from '@material-ui/core/styles';
import SingleReview from './SingleReview.js';
import { Typography } from "@material-ui/core";
import VisibleReviewNavPanel from "./VisibleReviewNavPanel"

const styles = {
    reviewTextModifierVolumeFocusReview: { marginTop: '100px', Left: 50, textAlign: 'left'},

    reviewTextModifierVolumeBySentimentFocusReview: { marginTop: '20px', Left: 50, textAlign: 'center', fontSize: '1.5em'},

    review: { textOverflow: 'ellipsis', overflow: 'hidden', maxHeight: '300px', textAlign: 'left', fontSize: '1.6em', display: 'block' },
    multipleReviewsText: {  maxHeight: '300px', textAlign: 'left', fontSize: '1.6em', display: 'block' },
    multipleReviewsContainer: { marginTop:'50px'}
}
class SentimentsToShow extends Component {
    mouseController = (message) => {
        switch (message) {
            case 'enter-review':
                styles.review = { textOverflow: 'ellipsis', overflow: 'auto', maxHeight: '300px', textAlign: 'left', fontSize: '1.6em' }
                this.forceUpdate();
                break;
            case 'exit-review':
                styles.review = { textOverflow: 'ellipsis', overflow: 'hidden', maxHeight: '300px', textAlign: 'left', fontSize: '1.6em' }
                this.forceUpdate();
                break;
        }
    }
    prepareHtml = (fadeBool) => {


        if (this.props.s.displayModifier === "volume") {
            if (this.props.s.dataFocus === "review") {
                return <div style={styles.reviewTextModifierVolumeFocusReview}><SingleReview style={styles.review} s={this.props.s} /></div>
            }
            else if (this.props.s.dataFocus === "chart") {
                return <div><SingleReview s={this.props.s} /></div>
            }
        }

        else if (this.props.s.displayModifier === "volumeBySentiment") {
            let finalReviews = [];
            finalReviews = this.props.s.reviews.filter(review => review.label === this.props.s.displaySentimentType).slice(0, 5).map(review => (
                <div style={styles.multipleReviewsContainer}>
                    <Typography style={styles.reviewTextModifierVolumeBySentimentFocusReview}>
                        {review.summary}
                    </Typography>
                </div>
            ))
            return finalReviews
        }

        else if (this.props.s.displayModifier === "time") {
            let recentReviews = this.props.dateParsingReviews()
            return (
                <div style={{ marginTop: '100px' }}>
                    {recentReviews}
                </div>
            )
        }
        else if (this.props.s.displayModifier === "timebymonth") {
            const reviews = this.props.s.currentTargetedReviews
            let monthReviews = reviews.map(review => (
                <div>
                <h2>{review.datePublished.toString().substring(0,15)}</h2>
                <p>{review.description}</p>
                </div>))
               return (
                <div style={{marginTop:'100px'}}>
                <h2>{reviews[0].datePublished.toString().substring(4,7)} Reviews</h2>
                {monthReviews}
                </div>
                )
            }
    }
    render() {
        return (
            <div>
                <div>
                    {this.prepareHtml()}
                    <VisibleReviewNavPanel s={this.props.s} reviewSwitch={this.props.reviewSwitch} />
                </div>

            </div>
        )
    }
}
export default withStyles(styles)(SentimentsToShow)
