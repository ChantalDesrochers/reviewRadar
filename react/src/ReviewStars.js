import React, { Component } from "react";
import Paper from '@material-ui/core/Paper'
import { Star } from '@material-ui/icons'
class ReviewStars extends Component {
   
    setStars = () =>{

 let reviews = this.props.currentTargetedReviews;
 console.log('all reviews', reviews);
 let index = this.props.visibleReview;
console.log(index)
let review = this.props.currentTargetedReviews[index];
   
  let finalNum = parseInt(review.rating);
  console.log('final Num', finalNum, typeof finalNum);
        return finalNum
    //   return this.props.currentTargetedReviews[this.props.visibleReview].rating
    }
    render() {
     
        return (
            <Paper>
              {Array(this.setStars()).fill(<Star  />)}
            </Paper>
        );
    }
}
export default ReviewStars

