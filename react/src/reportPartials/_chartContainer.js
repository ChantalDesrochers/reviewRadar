import React, { Component } from "react";

import KeywordCharts from '../KeywordCharts';
import SentimentCharts from '../SentimentCharts';
// import SentimentBarChartMonth from './_monthSentimentBar.js'





const ChartContainer = ({reviews, displaying, pickReviewTypeToDisplay, reviewTypeToDisplayKW, changeSentimentDisplayModifier, clickHandlerForSentimentTimeChart, organizedConcepts, monthConcepts, clickHandlerForKeywordTimeChart}) => (
  <div>
    { displaying === "sentiment" ? (
      <SentimentCharts pickReviewTypeToDisplay={pickReviewTypeToDisplay} reviews={reviews} changeSentimentDisplayModifier={changeSentimentDisplayModifier} clickHandlerForSentimentTimeChart={clickHandlerForSentimentTimeChart}/> ) : (<KeywordCharts reviews={reviews} organizedConcepts={organizedConcepts} monthConcepts={monthConcepts} reviewTypeToDisplayKW={reviewTypeToDisplayKW} clickHandlerForKeywordTimeChart={clickHandlerForKeywordTimeChart}/> ) }

  </div>
)


export default ChartContainer;
