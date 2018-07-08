import React, { Component } from "react";
import 'typeface-roboto'
import { withStyles } from '@material-ui/core/styles';
import SingleReview from './SingleReview.js';
import { Typography } from "@material-ui/core";
import VisibleReviewNavPanel from "./VisibleReviewNavPanel"

const styles = {
    reviewTextModifierVolumeFocusReview: { marginTop: '200px' },
    review: { textOverflow: 'ellipsis', overflow: 'hidden', maxHeight: '300px', textAlign: 'center', fontSize: '1.6em', display: 'block' },
    multipleReviewsText: { textOverflow: 'ellipsis', overflow: 'hidden', maxHeight: '300px', textAlign: 'center', fontSize: '1.6em', display: 'block' },
    multipleReviewsContainer: { marginTop: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }
}
class SentimentsToShow extends Component {
    mouseController = (message) => {
        switch (message) {
            case 'enter-review':
                styles.review = { textOverflow: 'ellipsis', overflow: 'auto', maxHeight: '300px', textAlign: 'center', fontSize: '1.6em' }
                this.forceUpdate();
                break;
            case 'exit-review':
                styles.review = { textOverflow: 'ellipsis', overflow: 'hidden', maxHeight: '300px', textAlign: 'center', fontSize: '1.6em' }
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
                    <Typography style={styles.multipleReviewsText}>
                        {review.description}
                    </Typography>
                </div>

            ))
            return finalReviews
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
