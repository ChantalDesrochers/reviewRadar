import React, { Component } from "react";
import 'typeface-roboto'
import { withStyles } from '@material-ui/core/styles';
import KeywordPolar from './reportPartials/_keywordPolar'
import PieChart from './reportPartials/_pieChart'
import NumberOfReviewsOverTime from './reportPartials/_numberOfReviews'
import SentimentBarChartMonth from './reportPartials/_monthSentimentBar'
import PieSentimentYelp from './reportPartials/_sentimentYelp'

class ChartsToShow extends Component {
    render() {
        console.log('hello')
        console.log('reviews', this.props.s.reviews)
        return (
            <div style={{ padding: 0, marginTop:'50px'}}>
            <SentimentBarChartMonth reviews={this.props.s.reviews}/>
             <KeywordPolar style={{margin:'100px'}} />
             <NumberOfReviewsOverTime reviews={this.props.s.reviews} />
             <PieChart reviews={this.props.s.reviews} style={{margin:'50px'}}/>
             <PieSentimentYelp reviews={this.props.s.reviews} style={{margin:'50px'}}/>
            </div>
        )
    }
}

export default ChartsToShow;
