import React, { Component } from "react";
import 'typeface-roboto'
import { withStyles } from '@material-ui/core/styles';
import SingleReview from './SingleReview.js';


const styles = {
    reviewText: { textOverflow: 'ellipsis', overflow: 'hidden', maxHeight: '300px', textAlign: 'center', fontSize: '1.6em', display: 'block' }
}
class SentimentsToShow extends Component {
    //should we remove forced updates?
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
    prepareHtml = (fadeBool, reviewsToShow) => {
        console.log('displayModifier', this.props.s.displayModifier);

        if (this.props.s.displayModifier === "volume") {
            console.log('modifier is set to volume')
            return <SingleReview s={this.props.s} />
        }
        else if (this.props.s.displayModifier === "volumeBySentiment") {

            let finalReviews = [];
            finalReviews = this.props.s.reviews.filter(review => review.label === this.props.s.displaySentimentType).map(review => (
                <div style={{height:'500px'}}>
                <p> {review.description} </p>
                </div>
              ))
            return  finalReviews

        } else if (this.props.s.displayModifier === "time") {
            let reviews = this.props.s.reviews
            let dAlteredArray = reviews.map(review =>
            ({...review, datePublished: new Date(review.datePublished)})
           )
           const sortedDate = dAlteredArray.sort(function (a, b) {
           return b.datePublished - a.datePublished
      })
           console.log("sorted", sortedDate)
           let recentReviews = sortedDate.slice(0,5)
           recentReviews = recentReviews.map(review => (
            <div>
            <h2>{review.datePublished.toString().substring(0,14)}</h2>
            <p>{review.description}</p>
            </div>))
           return (
            <div style={{marginTop:'100px'}}>
            <h2>Five Most Recent Reviews</h2>
            {recentReviews}
            </div>
            )
    } else if (this.props.s.displayModifier === "timebymonth") {
        const reviews = this.props.s.currentTargetedReviews
        let monthReviews = reviews.map(review => (
            <div>
            <h2>{review.datePublished.toString().substring(0,14)}</h2>
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
            <div style={{ padding: 0, marginTop:'50px'}}>
                {this.prepareHtml()}
            </div>
        )
    }
}

export default withStyles(styles)(SentimentsToShow)
