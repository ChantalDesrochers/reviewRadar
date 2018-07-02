import React, { Component } from "react";
import PieChart from './_pieChart'

class ChartContainer extends Component {
    render() {

        return (
            <div className="chart-container">
               <div className="chart-name"></div>
               <PieChart reviews={this.props.reviews} pickReviewTypeToDisplay={this.props.pickReviewTypeToDisplay} />

        </div>
        );
    }
}

export default ChartContainer;