import React, { Component } from "react";
import Paper from '@material-ui/core/Paper'
import { Star } from '@material-ui/icons'
import Typography from "@material-ui/core/Typography";

class ReviewStars extends Component {
    prepareHtml = () => {

        if (this.props.s.displayModifier !== 'time') {
          var remains = 5 - this.props.currentTargetedReviews[this.props.s.visibleReview].rating
          return <div style={{textAlign: 'left', paddingLeft: 30}}>  {Array(parseInt(this.props.s.currentTargetedReviews[this.props.s.visibleReview].rating)).fill(<Star style={{height:'40', width:'40', color:'#28ABE3'}} />)}
          {Array(remains).fill(<Star style={{height:'40', width:'40', color:'grey'}} />)}</div>
        }

      }

    render() {
        return (
            <div style={{position: 'relative', top: '-40px', paddingBottom: '3px'}}>
              <Typography variant="headline" style={{textAlign: 'left', paddingLeft: '30px'}}>Review Rating</Typography>
              {this.prepareHtml()}
            </div>
        );
    }
}
export default ReviewStars

