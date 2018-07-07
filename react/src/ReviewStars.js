import React, { Component } from "react";
import Paper from '@material-ui/core/Paper'
import { Star } from '@material-ui/icons'
class ReviewStars extends Component {

    render() {
        return (
            <Paper>
                {Array(parseInt(this.props.visibleReview.rating)).fill(<Star />)}
            </Paper>
        );
    }
}
export default ReviewStars

