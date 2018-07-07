import React, { Component } from "react";

import KeywordCharts from '../KeywordCharts';
import SentimentCharts from '../SentimentCharts';
// import SentimentBarChartMonth from './_monthSentimentBar.js'



const ChartContainer = ({reviews, displaying, pickReviewTypeToDisplay, reviewTypeToDisplayKW, organizedConcepts, monthConcepts}) => (
  <div>
    { displaying === "sentiment" ? (
      <SentimentCharts pickReviewTypeToDisplay={pickReviewTypeToDisplay} reviews={reviews}/> ) : (<KeywordCharts organizedConcepts={organizedConcepts} monthConcepts={monthConcepts} reviewTypeToDisplayKW={reviewTypeToDisplayKW}/> ) }
  </div>
)


export default ChartContainer;
