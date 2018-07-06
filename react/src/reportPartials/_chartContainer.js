import React, { Component } from "react";

import KeywordCharts from '../KeywordCharts';
import SentimentCharts from '../SentimentCharts';
// import SentimentBarChartMonth from './_monthSentimentBar.js'



const ChartContainer = ({reviews, displaying, pickReviewTypeToDisplay, reviewTypeToDisplayKW}) => (
  <div>
    { displaying === "sentiment" ? (
      <SentimentCharts pickReviewTypeToDisplay={pickReviewTypeToDisplay} reviews={reviews}/> ) : (<KeywordCharts reviews={reviews} reviewTypeToDisplayKW={reviewTypeToDisplayKW}/> ) }
  </div>
)


export default ChartContainer;