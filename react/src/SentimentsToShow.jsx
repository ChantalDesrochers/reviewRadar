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
    //should we remove forced updates?
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

        else if (this.props.s.displayModifier === "time") {
            let reviews = this.props.s.reviews
            let dAlteredArray = reviews.map(review =>
                ({ ...review, datePublished: new Date(review.datePublished) })
            )
            console.log(dAlteredArray)
            const sortedDate = dAlteredArray.sort(function (a, b) {
                return b.datePublished - a.datePublished
            })
            let recentReviews = sortedDate.slice(0, 5)
            recentReviews = recentReviews.map(review => (
                <div>
                    <h2>{review.datePublished.toString().substring(0, 15)}</h2>
                    <p>{review.description}</p>
                </div>))
            return (
                <div style={{ marginTop: '100px' }}>
                    <h2>Five Most Recent Reviews</h2>
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
