import React, { Component } from "react";
import Paper from '@material-ui/core/Paper'
import { Star } from '@material-ui/icons'
class ReviewStars extends Component {
    prepareHtml = () => {

        if (this.props.s.displayModifier !== 'time') {
    
          return <div>  {Array(parseInt(this.props.s.currentTargetedReviews[this.props.s.visibleReview].rating)).fill(<Star style={{height:'40', width:'40', color:'green'}} />)}</div>
        }
    
      }

    render() {
        return (
            <div>
              {this.prepareHtml()}
            </div>
        );
    }
}
export default ReviewStars

