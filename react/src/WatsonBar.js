import React, { Component } from "react";
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles';
import { Star, Favorite, Flare, Dehaze, FiberManualRecord } from '@material-ui/icons'
import Typography from "@material-ui/core/Typography";

class WatsonBar extends Component {

  parseHtml = (finalRating) => {
    console.log('state in watson', this.props.s)
    if (this.props.s.displayModifier !== 'time') {
      console.log('final rating', finalRating)
      // return <div>{Array(parseInt(finalRating)).fill(<Favorite style={{ height: '40', width: '40', color: 'blue' }} />)}</div>
    // return <div>{Array(parseInt(finalRating)).fill(<Flare style={{ height: '40', width: '40', color: 'blue' }} />)}</div>
    if (finalRating < 2) {
      console.log('1')
      var remain = 10 - finalRating;
      return <div style={{textAlign: 'left', paddingLeft: 30}}>
      {Array(parseInt(finalRating)).fill(
      <FiberManualRecord style={{ height: '40', width: '40', color: '#9E242E', textAlign: 'left' }} />)}
       {Array(remain).fill(
      <FiberManualRecord style={{ height: '40', width: '40', color: 'grey', textAlign: 'left' }} />)}
       </div>
    } else if (finalRating >=2 && finalRating < 4) {
      console.log('2')
      var remain = 10 - finalRating;
      return <div style={{textAlign: 'left', paddingLeft: 30}}>
      {Array(parseInt(finalRating)).fill(
      <FiberManualRecord style={{ height: '40', width: '40', color: '#E87D19', textAlign: 'left' }} />)}
       {Array(remain).fill(
      <FiberManualRecord style={{ height: '40', width: '40', color: 'grey', textAlign: 'left' }} />)}
       </div>
    } else if (finalRating === 4 || finalRating === 5) {
      console.log('3')
       var remain = 10 - finalRating;
      return <div style={{textAlign: 'left', paddingLeft: 30}}>
      {Array(parseInt(finalRating)).fill(
      <FiberManualRecord style={{ height: '40', width: '40', color: '#E8CF19', textAlign: 'left' }} />)}
       {Array(remain).fill(
      <FiberManualRecord style={{ height: '40', width: '40', color: 'grey', textAlign: 'left' }} />)}
       </div>
    } else if (finalRating >5 && finalRating <=8) {
      var remain = 10 - finalRating;
      return <div style={{textAlign: 'left', paddingLeft: 30}}>
      {Array(parseInt(finalRating)).fill(
      <FiberManualRecord style={{ height: '40', width: '40', color: '#8ED81E', textAlign: 'left' }} />)}
       {Array(remain).fill(
      <FiberManualRecord style={{ height: '40', width: '40', color: 'grey', textAlign: 'left' }} />)}
       </div>
     } else if (finalRating > 8) {
      var remain = 10 - finalRating;
      return <div style={{textAlign: 'left', paddingLeft: 30}}>
      {Array(parseInt(finalRating)).fill(
      <FiberManualRecord style={{ height: '40', width: '40', color: '#1FDA9A', textAlign: 'left' }} />)}
       {Array(remain).fill(
      <FiberManualRecord style={{ height: '40', width: '40', color: 'grey', textAlign: 'left' }} />)}
       </div>
      }
    }
}

  parseSentimentData = arg => {
    console.log(this.props.s)
    let rating = arg
    // let rating = this.props.currentTargetedReviews[this.props.visibleReview].score
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
    } else if (rounded >0.8 && rounded <= 1) {
      return 10
    }
  }

  render() {
    let finalRating
    if (this.props.currentTargetedReviews.length){
      finalRating = this.parseSentimentData(this.props.currentTargetedReviews[this.props.visibleReview].score);
    }
    return (
      this.props.s.displayModifier === 'volume' ?
      (<div style={{position: 'relative', top: '-40px', paddingBottom: '10px'}} >
      <Typography variant="headline" style={{textAlign: 'left', paddingLeft: '30px'}}>Watson Rating</Typography>
      <div>{this.parseHtml(finalRating)}</div>
      </div>) : <div/>
    );
  }
}
export default WatsonBar