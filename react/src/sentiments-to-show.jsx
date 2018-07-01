import React, { Component } from "react";
import TextContainer from "./reportPartials/_textContainer";
import 'typeface-roboto'



 const SentimentsToShow = (whichReviews, clickHandler, topReviews, bottomReviews) =>{
      console.log('in reviews to show', whichReviews )
     switch (whichReviews){
       
       case 'both':
       console.log('both');
       return (<div><TextContainer className="top-reviews" clickHandler ={clickHandler } reviews={topReviews} dataMessageTitle="positiveReviews" aria-label="Fade"   />
       <br></br>
     <TextContainer className="bottom-reviews" reviews={bottomReviews} clickHandler={clickHandler} dataMessageTitle="negativeReviews"  aria-label="Fade"   /></div> )

       case 'positive':
       console.log('positive');
       return <TextContainer className="top-reviews" clickHandler ={clickHandler } reviews={topReviews} dataMessageTitle="positiveReviews" aria-label="Fade"  /> 
      
       case 'negative':
       console.log('negative');
       return  <TextContainer className="bottom-reviews" reviews={bottomReviews} clickHandler={clickHandler} dataMessageTitle="negativeReviews"  aria-label="Fade"  />
     }
    }

    export default SentimentsToShow