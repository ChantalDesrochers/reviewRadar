import React, { Component } from "react";
import Paper from '@material-ui/core/Paper'
import { Star, Favorite } from '@material-ui/icons'
class WatsonBar extends Component {


  parseHtml = (finalRating) => {
    console.log('state in watson', this.props.s)
    if (this.props.s.displayModifier !== 'time') {

      return <div>{Array(parseInt(finalRating)).fill(<Favorite style={{ height: '40', width: '40', color: 'blue' }} />)}</div>
    }

  }
  parseSentimentData = () => {
    let rating = this.props.currentTargetedReviews[this.props.visibleReview].score

    var rounded = rating.toFixed(1)
    if (rounded === 0) {
      return 3
    } else if (rounded > 0 && rounded <= 0.5) {
      return 4
    } else if (rounded > 0.5) {
      return 5;
    } else if (rounded < 0 && rounded >= -0.5) {
      return 2;
    } else if (rounded < -0.5) {
      return 1;
    }
  }


  render() {
    const finalRating = this.parseSentimentData(this.props.watsonRating);
    return (
      <div>{this.parseHtml(finalRating)}</div>

    );
  }
}
export default WatsonBar