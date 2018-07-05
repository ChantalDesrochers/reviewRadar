import React, { Component } from "react";

import KeywordCharts from '../KeywordCharts';
import SentimentCharts from '../SentimentCharts';
// import SentimentBarChartMonth from './_monthSentimentBar.js'



const ChartContainer = ({reviews, displaying, pickReviewTypeToDisplay}) => (
  <div>
    { displaying === "sentiment" ? (
      <SentimentCharts pickReviewTypeToDisplay={pickReviewTypeToDisplay} reviews={reviews}/> ) : (<KeywordCharts reviews={reviews}/> ) }
  </div>
)


export default ChartContainer;