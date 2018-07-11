import React, { Component } from "react";
import 'typeface-roboto'
import Grid from '@material-ui/core/Grid'
import { Typography } from "@material-ui/core";
import DateC from "./Date.js"
import NameAndSite from './NameAndSite.js'
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Paper from '@material-ui/core/Paper'
import VisibleReviewNavPanel from './VisibleReviewNavPanel'
const styles = {
    reviewText: { overflow: 'hidden', maxHeight: '300px', textAlign: 'left', fontSize: '2.1em', display: 'block', variant: 'body', paddingTop: 25, paddingLeft: 50, paddingRight: 50 },
    reviewTextModifierVolumeFocusReview: { padding: 15, marginTop: '100px', Left: 50, textAlign: 'left' },
    reviewKeywordTextModifierVolumeFocusChart:{ marginTop: '75px'},
    reviewSummary: { fontSize: '1.5em', margin: '5px 0px' },
    reviewFull: { fontSize: '1.5em' },
    reviewTextModifierVolumeFocusChart: { marginTop: '0' },
    dateLeftSingle: { padding: 10, float: 'right' },
    PaperForLeftReview: { height: '551px' },
}
class KeywordsToShow extends Component {
    state = {
        expanded: null,
        expandedTime: null,
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
        switch (message) {
            case 'enter-review':
                styles.reviewText = { overflow: 'auto', maxHeight: '300px', textAlign: 'left', fontSize: '2.1em', paddingTop: 25, paddingLeft: 50, paddingRight: 50 }
                this.forceUpdate();
                //       console.log('in enter review', styles);
                break;
            case 'exit-review':
                styles.reviewText = { overflow: 'hidden', maxHeight: '300px', textAlign: 'left', fontSize: '2.1em', display: 'block', variant: 'body', paddingTop: 25, paddingLeft: 50, paddingRight: 50 },
                    this.forceUpdate();
                //     console.log('in exit review', styles);
                break;
        }
    }
    prepareHtml = () => {
      
        if (this.props.s.displayModifier === "timebymonth") {
            //we need the month
            let htmlToReturn = [];
            var options = { year: 'numeric', month: 'long', day: 'numeric' };
            const reviews = this.props.s.currentTargetedReviews

            let dAlteredArray = reviews.map(review =>
                ({ ...review, datePublished: new Date(review.datePublished) })
            )
            const sortedDate = dAlteredArray.sort(function (a, b) {
                return b.datePublished - a.datePublished
            }).slice(0,5)
            let finalReviews = [];
            finalReviews = sortedDate.map((review, i) => (
                <ExpansionPanel expanded={this.state.expanded === `panel${(i+30)}`} onChange={this.handleChange(`panel${(i+30)}`)}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography style={styles.reviewSummary}>{review.datePublished.toLocaleDateString('en-us', options)} - {review.summary}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails style={styles.reviewFullContainer}>
                        <Typography style={styles.reviewFull}>
                            {review.description}
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            ))
        return (
            <div style={{ marginTop: '95px' }}>{finalReviews}</div>
        )
    } else if(this.props.s.displayModifier === 'time') {

    let reviews = this.props.s.reviews

    let dAlteredArray = reviews.map(review =>
        ({ ...review, datePublished: new Date(review.datePublished) })
    )
    const sortedDate = dAlteredArray.sort(function (a, b) {
        return b.datePublished - a.datePublished
    })
    let recentReviews = sortedDate.slice(0, 5)

    let htmlToReturn = [];
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    htmlToReturn = recentReviews.map((review, i) => (

        <ExpansionPanel expanded={this.state.expanded === `panel${(i+40)}`} onChange={this.handleChange(`panel${(i+40)}`)}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography style={styles.reviewSummary}>{review.datePublished.toLocaleDateString('en-us', options)} - {review.summary}</Typography>
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

        else if (this.props.s.displayModifier === "volume") {

    let review = this.props.s.currentTargetedReviews[this.props.s.visibleReview].description;
    let name = this.props.s.currentTargetedReviews[this.props.s.visibleReview].author;
    let date = this.props.s.currentTargetedReviews[this.props.s.visibleReview].datePublished;
    let site = this.props.s.currentTargetedReviews[this.props.s.visibleReview].origin;
    if (this.props.s.displayModifier === "volume") {
        if (this.props.s.dataFocus === "review") {

            return <div style={styles.reviewTextModifierVolumeFocusReview} >
                <Grid container spacing={0}>
                    <Grid item sm={12} style={{ float: 'left', width: "50%" }}>
                        <Grid style={{ float: 'left', width: "50%", paddingTop: '15px', paddingLeft: '25px' }} item sm={6}>
                            <NameAndSite name={name} site={site} />
                        </Grid>
                    </Grid>
                    <Grid item sm={12} >
                        <Grid style={{ width: "50%", float: 'left', width: "50%", paddingLeft: '25px' }} item sm={6}>
                            <DateC style={styles.dateLeftSingle} date={date} />
                        </Grid>
                    </Grid>
                    <Grid item sm={12}  >
                
                        <Typography variant='body' onMouseOver={() => this.mouseController('enter-review')} onMouseLeave={() => this.mouseController('exit-review')} style={styles.reviewText}>
                         {review}
                        </Typography>
                     
                    </Grid>
                </Grid>
            </div>
        }
        else if (this.props.s.dataFocus === "chart") {

            return <div style={styles.reviewKeywordTextModifierVolumeFocusChart}>
            <Paper className="paper to grow" style={{height:'450px'}}>
                <Grid container spacing={0}>
                    <Grid item sm={12} style={{ float: 'left', width: "50%" }}>
                    <Grid style={{ float: 'left', width: "50%",  paddingTop:'15px', paddingLeft:'25px' }} item sm={6}>
                            <NameAndSite name={name} site={site} />
                        </Grid>
                    </Grid>
                    <Grid item sm={12} >
                        <Grid style={{ float: 'left', width: "50%",  paddingTop:'0', paddingLeft:'25px' }} item sm={6}>
                            <DateC style={{padding:0, float: 'right'}}date={date} />
                        </Grid>
                    </Grid>
                    <Grid item sm={12}  >
                        <Typography variant='body'  onMouseOver={() => this.mouseController('enter-review')} onMouseLeave={() => this.mouseController('exit-review')} style={styles.reviewText}>
                           {review}
                        </Typography>
                    </Grid>
                </Grid>
                </Paper>
            </div>
        }
    }
}
    }
render() {
    return (
        <div style={{ padding: 0, height: '100%' }}>
            {this.prepareHtml()}
        </div>
    )
}
}
export default withStyles(styles)(KeywordsToShow)
