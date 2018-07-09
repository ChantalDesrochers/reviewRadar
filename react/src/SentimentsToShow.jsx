import React, { Component } from "react";
import 'typeface-roboto'
import { withStyles } from '@material-ui/core/styles';
import SingleReview from './SingleReview.js';
import { Typography } from "@material-ui/core";
import VisibleReviewNavPanel from "./VisibleReviewNavPanel"
import './App.css';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

var linkStyle;
const styles = {
    reviewTextModifierVolumeFocusReview: { marginTop: '100px', Left: 50, textAlign: 'left' },
    reviewSummary: {fontSize:'1em'},
    reviewFull: {fontSize:'1.5em'},
    review: { textOverflow: 'ellipsis', overflow: 'hidden', maxHeight: '300px', textAlign: 'left', fontSize: '1.6em', display: 'block' },
    multipleReviewsText: { maxHeight: '300px', textAlign: 'left', fontSize: '1.6em', display: 'block' },

    multipleReviewsContainer: { marginTop: '50px' }
}
class SentimentsToShow extends Component {


    mouseController = (message) => {
        console.log('mouse', message)
        switch (message) {
            case 'enter-review':
                styles.reviewText = { overflow: 'auto', maxHeight: '300px', textAlign: 'center', fontSize: '1.6em' }
                this.forceUpdate();
                //       console.log('in enter review', styles);
                break;
            case 'exit-review':
                styles.reviewText = { overflow: 'hidden', maxHeight: '300px', textAlign: 'center', fontSize: '1.6em' }
                this.forceUpdate();
                //     console.log('in exit review', styles);
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
            //0,5 is what is going to be toggled by the arrows
            finalReviews = this.props.s.reviews.filter(review => review.label === this.props.s.displaySentimentType).slice(this.props.s.SentimentSummaryIndex-this.props.s.SummaryIndexMultiple , this.props.s.SentimentSummaryIndex).map(review => (
       
                    <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography style={styles.reviewSummary}>{review.summary}</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography style={styles.reviewFull}>
                                {review.description}
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
               
            ))
            return finalReviews
        }

        else if (this.props.s.displayModifier === "time") {
            let reviews = this.props.s.reviews
            let dAlteredArray = reviews.map(review =>
                ({ ...review, datePublished: new Date(review.datePublished) })
            )
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
                    <h2>{review.datePublished.toString().substring(0, 15)}</h2>
                    <p>{review.description}</p>
                </div>))
            return (
                <div style={{ marginTop: '100px' }}>
                    <h2>{reviews[0].datePublished.toString().substring(4, 7)} Reviews</h2>
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
