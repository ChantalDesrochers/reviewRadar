import React, { Component } from "react";
import 'typeface-roboto'
import { withStyles } from '@material-ui/core/styles';
import SingleReview from './SingleReview.js';
import { Typography } from "@material-ui/core";
import VisibleReviewNavPanel from "./VisibleReviewNavPanel"

const styles = {
    reviewText: { textOverflow: 'ellipsis', overflow: 'hidden', maxHeight: '300px', textAlign: 'center', fontSize: '1.6em', display: 'block' },
    multipleReviewsText: { textOverflow: 'ellipsis', overflow: 'hidden', maxHeight: '300px', textAlign: 'center', fontSize: '1.6em', display: 'block' },
    multipleReviewsContainer: { marginTop: 25, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }
}
class SentimentsToShow extends Component {
    mouseController = (message) => {
        switch (message) {
            case 'enter-review':
                styles.reviewText = { textOverflow: 'ellipsis', overflow: 'auto', maxHeight: '300px', textAlign: 'center', fontSize: '1.6em' }
                this.forceUpdate();
                break;
            case 'exit-review':
                styles.reviewText = { textOverflow: 'ellipsis', overflow: 'hidden', maxHeight: '300px', textAlign: 'center', fontSize: '1.6em' }
                this.forceUpdate();
                break;
        }
    }
    prepareHtml = (fadeBool) => {
        if (this.props.s.displayModifier === "volume") {
            return <SingleReview s={this.props.s} />
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
                <div style={{ backgroundColor: ' #f7eac8', padding: 0, marginTop: '150px' }}>
                    {this.prepareHtml()}
                   
                </div>
               
            </div>
        )
    }
}
export default withStyles(styles)(SentimentsToShow)
