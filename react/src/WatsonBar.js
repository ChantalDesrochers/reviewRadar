import React, { Component } from "react";
import Paper from '@material-ui/core/Paper'
import { Star, Favorite } from '@material-ui/icons'
class WatsonBar extends Component {


    parseSentimentData =(rating) =>{

          var rounded = rating.toFixed(1)
          if (rounded === 0) {
            return 3 
          } else if (rounded > 0 && rounded <= 0.5) {
            return 4
          } else if (rounded > 0.5) {
            return 5;
          } else if (rounded < 0 && rounded >= -0.5) {
            return 2;
          } else if (rounded < -0.5) {
            return 1;
          }
    }

   
    render() {
        const finalRating = this.parseSentimentData(this.props.watsonRating);
        return (
            <Paper>   {Array(parseInt(finalRating)).fill(<Favorite />)}</Paper>

        );
    }
}
export default WatsonBar