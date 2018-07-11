import React, { Component } from "react";
import Paper from '@material-ui/core/Paper'
import { Star, Favorite, Flare, Dehaze, Blur_on } from '@material-ui/icons'

class WatsonBar extends Component {


  parseHtml = (finalRating) => {
    console.log('state in watson', this.props.s)
    if (this.props.s.displayModifier !== 'time') {
      console.log('final rating', finalRating)
      // return <div>{Array(parseInt(finalRating)).fill(<Favorite style={{ height: '40', width: '40', color: 'blue' }} />)}</div>
    // return <div>{Array(parseInt(finalRating)).fill(<Flare style={{ height: '40', width: '40', color: 'blue' }} />)}</div>
    if (finalRating >= 5) {
    return <div>{Array(parseInt(finalRating)).fill(<Dehaze style={{ height: '40', width: '40', color: 'green' }} />)}</div>
    // return <div>{Array(parseInt(finalRating)).fill(<Blur_on style={{ height: '40', width: '40', color: 'blue' }} />)}</div>
    } else if (finalRating < 5) {
    return <div>{Array(parseInt(finalRating)).fill(<Dehaze style={{ height: '40', width: '40', color: 'red' }} />)}</div>
    }
  }
}
  parseSentimentData = () => {
    console.log(this.props.s)
    let rating = this.props.currentTargetedReviews[this.props.visibleReview].score
    var rounded = rating.toFixed(1)
    console.log(rounded)
    if (rounded <= -0.8) {
      return 1
    } else if (rounded > -0.8 && rounded <= -0.6) {
      return 2
    } else if (rounded > -0.6 && rounded <= -0.4) {
      return 3;
    } else if (rounded > -0.4 && rounded <= -0.2) {
      return 4;
    } else if (rounded > -0.2 && rounded <= 0) {
      return 5;
    } else if (rounded >0 && rounded <= 0.2) {
      return 6
    } else if (rounded >0.2 && rounded <= 0.4) {
      return 7
    } else if (rounded >0.4 && rounded <= 0.6) {
      return 8
    } else if (rounded >0.6 && rounded <= 0.8) {
      return 9
    } else if (rounded >0.9 && rounded <= 1) {
      return 10
    }
    // var rounded = rating.toFixed(1)
    // if (rounded === 0) {
    //   return 3
    // } else if (rounded > 0 && rounded <= 0.5) {
    //   return 4
    // } else if (rounded > 0.5) {
    //   return 5;
    // } else if (rounded < 0 && rounded >= -0.5) {
    //   return 2;
    // } else if (rounded < -0.5) {
    //   return 1;
    // }
  }


  render() {
    const finalRating = this.parseSentimentData(this.props.watsonRating);
    return (
      <div>{this.parseHtml(finalRating)}</div>

    );
  }
}
export default WatsonBar