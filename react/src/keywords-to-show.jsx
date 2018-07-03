import React, { Component } from "react";
import TextContainer from "./reportPartials/_textContainer";
import 'typeface-roboto'
import Fade from '@material-ui/core/Fade';


const KeywordsToShow = (fadeBool) => {
  return <Fade in={fadeBool } timeout={400}><h1 style={{marginTop:0}}>imma little keyword short and stout!</h1></Fade>
}

export default KeywordsToShow
