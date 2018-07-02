import React, { Component } from "react";
import TextContainer from "./reportPartials/_textContainer";
import 'typeface-roboto'
import Fade from '@material-ui/core/Fade';


 const SentimentsToShow = (whichReviews, clickHandler, topReviews, bottomReviews, fadeBool) =>{
console.log('top', topReviews);
console.log('bottom', bottomReviews);
     switch (whichReviews){
       case 'both':
       return <Fade in={fadeBool}><div><TextContainer className="top-reviews" clickHandler ={clickHandler } reviews={topReviews} dataMessageTitle={topReviews.title} />
      {/* should we be using break tags? seems hacky */}
       <br>
       </br>
     <TextContainer className="bottom-reviews" reviews={bottomReviews} clickHandler={clickHandler} dataMessageTitle={topReviews.title}  aria-label="Fade"   />  </div></Fade>

       case 'positive':
       return  <TextContainer className="top-reviews" clickHandler ={clickHandler } reviews={topReviews} dataMessageTitle="positiveReviews" aria-label="Fade"  />
      
       case 'negative':
       return   <TextContainer className="bottom-reviews" reviews={bottomReviews} clickHandler={clickHandler} dataMessageTitle="negativeReviews"  aria-label="Fade"  />
     }
    }

    export default SentimentsToShow