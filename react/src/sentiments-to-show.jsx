import React, { Component } from "react";
import TextContainer from "./reportPartials/_textContainer";
import 'typeface-roboto'
import Fade from '@material-ui/core/Fade';


const SentimentsToShow = (whichReviews, clickHandler, topReviews, bottomReviews, fadeBool) => {

  switch (whichReviews) {
   
   
   
    case 'both':
      return <Fade in={fadeBool} timeout={500}>
        <div >
          <div style={{padding: 30}}><TextContainer className="top-reviews" clickHandler={clickHandler} reviews={topReviews} dataMessageTitle={topReviews.title} /></div>
          <div style={{padding: 30}}> <TextContainer className="bottom-reviews" reviews={bottomReviews} clickHandler={clickHandler} dataMessageTitle={bottomReviews.title} aria-label="Fade" />  </div> </div></Fade>
    
    
    
    case 'positive':
      return <div style={{padding: 30}}><TextContainer className="top-reviews" clickHandler={clickHandler} reviews={topReviews} dataMessageTitle={topReviews.title} aria-label="Fade" /></div>
    case 'negative':
      return <div style={{padding: 30}}><TextContainer className="bottom-reviews" reviews={bottomReviews} clickHandler={clickHandler} dataMessageTitle={bottomReviews.title} aria-label="Fade" /></div>
  }
}
export default SentimentsToShow