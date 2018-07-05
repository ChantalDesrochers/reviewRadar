import React, { Component } from "react";
import Paper from '@material-ui/core/Paper'
import { Star } from '@material-ui/icons'
class ReviewStars extends Component {


    constructor(props) {
        super(props);
        this.state = {
            rating:this.props.rating
        };
    }
    render() {
        return (
            <Paper>
              {Array(parseInt(this.props.rating)).fill(<Star  />)}
            </Paper>
        );
    }
}
export default ReviewStars

