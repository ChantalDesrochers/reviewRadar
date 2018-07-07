import React, { Component } from "react";
import 'typeface-roboto'
import { withStyles } from '@material-ui/core/styles';
import SingleReview from './SingleReview.js';


const styles = {
    reviewText: { textOverflow: 'ellipsis', overflow: 'hidden', maxHeight: '300px', textAlign: 'center', fontSize: '1.6em', display: 'block' }
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
