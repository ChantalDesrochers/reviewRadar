import React, { Component } from "react";
import 'typeface-roboto'
import Grid from '@material-ui/core/Grid'
import { Typography } from "@material-ui/core";
import Date from "./Date.js"
import NameAndSite from './NameAndSite.js'
import { withStyles } from '@material-ui/core/styles';
import VisibleReviewNavPanel from './VisibleReviewNavPanel'
const styles = {
    reviewText: { textOverflow: 'ellipsis', overflow: 'hidden', maxHeight: '300px', textAlign: 'center', fontSize: '1.6em', display: 'block' },
    reviewTextModifierVolumeFocusReview: { marginTop: '100px', Left: 50, textAlign: 'left' },
    reviewTextModifierVolumeFocusChart: { marginTop: '0' }
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
        if (this.props.s.displayModifier === "timebymonth") {
            const reviews = this.props.s.currentTargetedReviews
            let monthReviews = reviews.map(review => (
                <div>
                    <h2>{review.datePublished.toString().substring(0, 15)}</h2>
                    <p>{review.description}</p>
                </div>))
            return (
                <div>
                    <h2>{reviews[0].datePublished.toString().substring(4, 7)} Reviews</h2>
                    {monthReviews}
                </div>
            )
        } else if (this.props.s.displayModifier === 'time') {
            let recentReviews = this.props.dateParsingReviews()
            return (
                <div>
                    {recentReviews}
                </div>
            )
        }
        else if (this.props.s.displayModifier === "volume") {

            let review = this.props.s.currentTargetedReviews[this.props.s.visibleReview].description;
            let name = this.props.s.currentTargetedReviews[this.props.s.visibleReview].author;
            let date = this.props.s.currentTargetedReviews[this.props.s.visibleReview].datePublished;
            let site = this.props.s.currentTargetedReviews[this.props.s.visibleReview].origin;
            if (this.props.s.displayModifier === "volume") {
                if (this.props.s.dataFocus === "review") {

                    return <div style={styles.reviewTextModifierVolumeFocusReview} >
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
                }
                else if (this.props.s.dataFocus === "chart") {

                    return <div style={styles.reviewTextModifierVolumeFocusChart} >
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
                }
            }
        }
    }
    render() {
        return (
            <div style={{ padding: 0 }}>
                {this.prepareHtml()}
                <VisibleReviewNavPanel s={this.props.s} reviewSwitch={this.props.reviewSwitch} />
            </div>
        )
    }
}
export default withStyles(styles)(KeywordsToShow)
