import React, { Component } from "react";

import KeywordCharts from '../KeywordCharts';
import SentimentCharts from '../SentimentCharts';
// import SentimentBarChartMonth from './_monthSentimentBar.js'





const ChartContainer = ({s, dataFocus, reviews, displaying, pickReviewTypeToDisplay, reviewTypeToDisplayKW, changeSentimentDisplayModifier, clickHandlerForSentimentTimeChart, organizedConcepts, monthConcepts}) => (
  <div>
    { displaying === "sentiment" ? (
      <SentimentCharts s={s} dataFocus={dataFocus} pickReviewTypeToDisplay={pickReviewTypeToDisplay} reviews={reviews} changeSentimentDisplayModifier={changeSentimentDisplayModifier} clickHandlerForSentimentTimeChart={clickHandlerForSentimentTimeChart}/> ) : (<KeywordCharts s={s} reviews={reviews} organizedConcepts={organizedConcepts} monthConcepts={monthConcepts} reviewTypeToDisplayKW={reviewTypeToDisplayKW}/> ) }

  </div>
)


export default ChartContainer;
