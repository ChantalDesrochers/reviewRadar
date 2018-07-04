import React, { Component } from "react";
import TextContainer from "./reportPartials/_textContainer";
import 'typeface-roboto'
import Fade from '@material-ui/core/Fade';

const KeywordsToShow = (fadeBool, reviewsToShow, completedData) => {
//   var items = list.slice(0, size).map(i => {
//     return <myview item={i} key={i.id} />
// }
// console.log('organized', organizedConcepts)
// console.log('complete', completedData)
//console.log('reviews to show', reviewsToShow);
 let reviewsToReturn = reviewsToShow.slice(0,1).map( review => (

<p>  {review} </p>

 ))








return <Fade in={fadeBool} timeout={{enter:500, exit:0}}><h1 style={{marginTop:0}}>{reviewsToReturn}</h1></Fade>
}



export default KeywordsToShow
