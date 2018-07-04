import React, { Component } from "react";
import PieChart from './_pieChart'
import KeywordBarChart from './_barChartKWs'
import SentimentOverTime from './_sentimentOverTime'
import NumberOfReviewsOverTime from './_numberOfReviews.js'
import KeywordsOverTime from './_keywordFreqOverTime.js'
import KeywordPolar from './_keywordPolar.js'


class ChartContainer extends Component {
    render() {

        return (
            <div className="chart-container">
               <div className="chart-name"></div>
                {/*<KeywordBarChart reviews={this.props.reviews} /> */}
               {/* <SentimentOverTime reviews={this.props.reviews} /> */}
               {/* <NumberOfReviewsOverTime reviews={this.props.reviews}/> */}
                {/*<KeywordsOverTime />*/}
                <KeywordPolar />
               {/*<PieChart reviews={this.props.reviews} pickReviewTypeToDisplay={this.props.pickReviewTypeToDisplay} />*/}

        </div>
        );
    }
}

export default ChartContainer;