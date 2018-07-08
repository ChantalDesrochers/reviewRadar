import React, { Component } from "react";

import KeywordCharts from '../KeywordCharts';
import SentimentCharts from '../SentimentCharts';
// import SentimentBarChartMonth from './_monthSentimentBar.js'



// const ChartContainer = ({s, dataFocus, reviews, displaying, pickReviewTypeToDisplay, reviewTypeToDisplayKW, changeSentimentDisplayModifier, clickHandlerForSentimentTimeChart, organizedConcepts, monthConcepts}) => (
class ChartContainer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
  return (
  <div>
    {console.log('inside charts container', this.props)}
    { this.props.displaying === "sentiment" ? (
      <SentimentCharts s={this.props.s} dataFocus={this.props.dataFocus} pickReviewTypeToDisplay={this.props.pickReviewTypeToDisplay} reviews={this.props.reviews} changeSentimentDisplayModifier={this.props.changeSentimentDisplayModifier} clickHandlerForSentimentTimeChart={this.props.clickHandlerForSentimentTimeChart}/> ) : (<KeywordCharts s={this.props.s} reviews={this.props.reviews} organizedConcepts={this.props.organizedConcepts} monthConcepts={this.props.monthConcepts} reviewTypeToDisplayKW={this.props.reviewTypeToDisplayKW}/> ) }
  </div>
  )
  }
}

export default ChartContainer;
