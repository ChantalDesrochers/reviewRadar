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
import Paper from '@material-ui/core/Paper'
var linkStyle;
const styles = {
    PaperForLeftReview: { height: '551px' },
    
    PaperForRightReview: { height: '450px', marginTop:'75px' },
    reviewTextModifierVolumeFocusReview: { marginTop: '100px', padding: 15 },
    reviewSummary: { fontSize: '1.5em', margin: '5px 0px' },
    reviewSummaryForSentiment: { fontSize: '1em',  marginLeft:'250px'},
    reviewFull: { fontSize: '1.5em' },
    // reviewFullContainer: {overflowY: 'auto', maxHeight: '10em'},
    review: { textOverflow: 'ellipsis', overflow: 'hidden', maxHeight: '300px', textAlign: 'left', fontSize: '1.6em', display: 'block' },
    multipleReviewsText: { maxHeight: '300px', textAlign: 'left', fontSize: '1.6em', display: 'block' },

    multipleReviewsContainer: { marginTop: '50px' }
}
class SentimentsToShow extends Component {
    state = {
        expanded: null,
        expandedTime: null
    };

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };
    handleChange2 = panel => (event, expandedTime) => {
        this.setState({
            expandedTime: expandedTime ? panel : false,
        });
    };
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
        console.log('in sent prepare whats the modifier', this.props.s.displayModifier)
        if (this.props.s.displayModifier === "volume") {
            if (this.props.s.dataFocus === "review") {

                return <Paper style={styles.PaperForLeftReview}><div style={styles.reviewTextModifierVolumeFocusReview}><SingleReview style={styles.review} s={this.props.s} /></div></Paper>
            }
            else if (this.props.s.dataFocus === "chart") {
                return  <Paper style={styles.PaperForRightReview}><div><SingleReview s={this.props.s} /></div></Paper>
            }
        }

        else if (this.props.s.displayModifier === "volumeBySentiment") {
            let finalReviews = [];

            finalReviews = this.props.s.reviews.filter(review => review.label === this.props.s.displaySentimentType).slice(this.props.s.SentimentSummaryIndex - this.props.s.SummaryIndexMultiple, this.props.s.SentimentSummaryIndex).map((review, i) => (
                <ExpansionPanel expanded={this.state.expanded === `panel${i}`} onChange={this.handleChange(`panel${i}`)}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography style={styles.reviewSummary}>{review.summary}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails style={styles.reviewFullContainer}>
                        <Typography style={styles.reviewFull}>
                            {review.description}
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            ))
            return <div style={{ marginTop: '95px' }}>{finalReviews}</div>
        }

        else if (this.props.s.displayModifier === "time") {
            console.log('in time');
            let reviews = this.props.s.reviews

            let dAlteredArray = reviews.map(review =>
                ({ ...review, datePublished: new Date(review.datePublished) })
            )
            const sortedDate = dAlteredArray.sort(function (a, b) {
                return b.datePublished - a.datePublished
            })
            let recentReviews = sortedDate.slice(0, 5)
            console.log('recent Reviews', recentReviews);
            let htmlToReturn = [];
            var options = {  year: 'numeric', month: 'long', day: 'numeric' };
            htmlToReturn = recentReviews.map((review, i) => (

                <ExpansionPanel expanded={this.state.expanded === `panel${(i+10)}`} onChange={this.handleChange(`panel${(i+10)}`)}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    {console.log(review.datePublished)}
                        <Typography style={styles.reviewSummary}>{review.datePublished.toLocaleDateString('en-us', options)} - {review.summary} </Typography>
                      {/* <Typography variant="body" style={styles.reviewSummaryForSentiment}>{review.summary}</Typography> */}
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails style={styles.reviewFullContainer}>
                        <Typography style={styles.reviewFull}>
                            {review.description}
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            )
            )
            // console.log('html to return', htmlToReturn);
            return <div style={{ marginTop: '95px' }}>{htmlToReturn}</div>
        }
        else if (this.props.s.displayModifier === "timebymonth") {
            let reviews = this.props.s.currentTargetedReviews

            let dAlteredArray = reviews.map(review =>
                ({ ...review, datePublished: new Date(review.datePublished) })
            )
            const sortedDate = dAlteredArray.sort(function (a, b) {
                return b.datePublished - a.datePublished
            }).slice(0,5)

            let htmlToReturn = [];
            var options = { year: 'numeric', month: 'long', day: 'numeric' };
            htmlToReturn = sortedDate.map((review, i) => (
                <ExpansionPanel expanded={this.state.expanded === `panel${(i+20)}`} onChange={this.handleChange(`panel${(i+20)}`)}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography style={styles.reviewSummary}>{review.datePublished.toLocaleDateString('en-us', options)} - {review.summary} </Typography>
                      {/* <Typography variant="body" style={styles.reviewSummaryForSentiment}>{review.summary}</Typography> */}
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails style={styles.reviewFullContainer}>
                        <Typography style={styles.reviewFull}>
                            {review.description}
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            )
            )
            // console.log('html to return', htmlToReturn);
            return <div style={{ marginTop: '95px' }}>{htmlToReturn}</div>
            
            
            
            // let monthReviews = reviews.map(review => (
            //     <div>
            //         <h2>{review.datePublished.toString().substring(0, 15)}</h2>
            //         <p>{review.description}</p>
            //     </div>))
            // return (
            //     <div>
            //         <h2>{reviews[0].datePublished.toString().substring(4, 7)} Reviews</h2>
            //         {monthReviews}
            //     </div>
            // )
        }
    }
    render() {
        return (
            <div>
                <div>
                    {this.prepareHtml()}

                </div>

            </div>
        )
    }
}
export default withStyles(styles)(SentimentsToShow)
