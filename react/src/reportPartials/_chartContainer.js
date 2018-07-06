import React, { Component } from "react";

import KeywordCharts from '../KeywordCharts';
import SentimentCharts from '../SentimentCharts';
// import SentimentBarChartMonth from './_monthSentimentBar.js'


<<<<<<< HEAD
const ChartContainer = ({reviews, displaying, pickReviewTypeToDisplay, clickHandlerForKeyWordBarChart}) => (
  
  <div>
    { displaying === "sentiment" ? (
      <SentimentCharts 
      pickReviewTypeToDisplay={pickReviewTypeToDisplay} 
      reviews={reviews}/> ) : (<KeywordCharts  clickHandlerForKeyWordBarChart={clickHandlerForKeyWordBarChart} reviews={reviews}/> ) }
=======

const ChartContainer = ({reviews, displaying, pickReviewTypeToDisplay, reviewTypeToDisplayKW}) => (
  <div>
    { displaying === "sentiment" ? (
      <SentimentCharts pickReviewTypeToDisplay={pickReviewTypeToDisplay} reviews={reviews}/> ) : (<KeywordCharts reviews={reviews} reviewTypeToDisplayKW={reviewTypeToDisplayKW}/> ) }
>>>>>>> ebdb0e67901c1c4c8a36c5b95b2f0d040dd975f9
  </div>
)


export default ChartContainer;