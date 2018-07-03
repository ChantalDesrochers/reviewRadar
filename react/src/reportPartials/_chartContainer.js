import React, { Component } from "react";
import PieChart from './_pieChart'
import KeywordBarChart from './_barChartKWs'
import SentimentOverTime from './_sentimentOverTime'

class ChartContainer extends Component {
    render() {

        return (
            <div className="chart-container">
               <div className="chart-name"></div>
                {/*<KeywordBarChart reviews={this.props.reviews} /> */}
                { <SentimentOverTime reviews={this.props.reviews} /> }
               {/*<PieChart reviews={this.props.reviews} pickReviewTypeToDisplay={this.props.pickReviewTypeToDisplay} />*/}

        </div>
        );
    }
}

export default ChartContainer;