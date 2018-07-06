import React, { Component } from "react";

import KeywordCharts from '../KeywordCharts';
import SentimentCharts from '../SentimentCharts';
// import SentimentBarChartMonth from './_monthSentimentBar.js'


const ChartContainer = ({reviews, displaying, pickReviewTypeToDisplay, clickHandlerForKeyWordBarChart}) => (
  
  <div>
    { displaying === "sentiment" ? (
      <SentimentCharts 
      pickReviewTypeToDisplay={pickReviewTypeToDisplay} 
      reviews={reviews}/> ) : (<KeywordCharts  clickHandlerForKeyWordBarChart={clickHandlerForKeyWordBarChart} reviews={reviews}/> ) }
  </div>
)


export default ChartContainer;