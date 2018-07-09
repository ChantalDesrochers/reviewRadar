import React, { Component } from "react";

import KeywordCharts from '../KeywordCharts';
import SentimentCharts from '../SentimentCharts';
// import SentimentBarChartMonth from './_monthSentimentBar.js'


const ChartContainer = ({s, changeKeywordDisplayModifier, clickHandlerForKeywordTimeChart, reviews, displaying, pickReviewTypeToDisplay,  clickHandlerForSentimentTimeChart, changeSentimentDisplayModifier, reviewTypeToDisplayKW, organizedConcepts, monthConcepts}) => (
  <div>
    { displaying === "sentiment" ? (
      <SentimentCharts s={s}  clickHandlerForSentimentTimeChart={clickHandlerForSentimentTimeChart} changeSentimentDisplayModifier={changeSentimentDisplayModifier} pickReviewTypeToDisplay={pickReviewTypeToDisplay} reviews={reviews}/> ) :
       (<KeywordCharts changeKeywordDisplayModifier={changeKeywordDisplayModifier} clickHandlerForKeywordTimeChart={clickHandlerForKeywordTimeChart} organizedConcepts={organizedConcepts} monthConcepts={monthConcepts} s={s}  reviewTypeToDisplayKW={reviewTypeToDisplayKW}/> ) }
  </div>
)


export default ChartContainer;
