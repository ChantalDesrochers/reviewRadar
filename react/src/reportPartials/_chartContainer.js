import React, { Component } from "react";
import PieChart from './_pieChart'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
class ChartContainer extends Component {
    render() {

        return (
            <div className="chart-container">
               <div className="chart-name"></div>
               <PieChart reviews={this.props.reviews} pickReviewTypeToDisplay={this.props.pickReviewTypeToDisplay} />
               <Button variant="contained" data-message="reset" >
                  <Typography> Reset </Typography>
                </Button>
        </div>
        );
    }
}

export default ChartContainer;