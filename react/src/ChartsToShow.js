import React, { Component } from "react";
import 'typeface-roboto'
import { withStyles } from '@material-ui/core/styles';
// import KeywordPolar from './reportPartials/_keywordPolar'
import PieChart from './reportPartials/_pieChart'
<<<<<<< HEAD
// import NumberOfReviewsOverTime from './reportPartials/_numberOfReviews'
// import SentimentBarChartMonth from './reportPartials/_monthSentimentBar'
// import PieSentimentYelp from './reportPartials/_sentimentYelp'
// import PieSentimentTripAdvisor from './reportPartials/_sentimentTripAdvisor'

class ChartsToShow extends Component {
   render() {
       console.log('hello')
       console.log('reviews', this.props.s.reviews)
       return (
           <div style={{ padding: 0, marginTop:'50px'}}>
           <p> hello im in chart land</p>
           {/* <SentimentBarChartMonth reviews={this.props.s.reviews}/> */}
            {/* <KeywordPolar style={{margin:'100px'}} /> */}
            {/* <NumberOfReviewsOverTime reviews={this.props.s.reviews} />
            <PieChart reviews={this.props.s.reviews} style={{margin:'50px'}}/>
            <PieSentimentYelp reviews={this.props.s.reviews} style={{margin:'50px', width: '50px'}}/>
            <PieSentimentTripAdvisor reviews={this.props.s.reviews} style={{margin:'50px'}}/> */}
           </div>
       )
   }
}

export default ChartsToShow;
=======
import NumberOfReviewsOverTime from './reportPartials/_numberOfReviews'
import SentimentBarChartMonth from './reportPartials/_monthSentimentBar'
import PieSentimentYelp from './reportPartials/_sentimentYelp'
import PieSentimentTripAdvisor from './reportPartials/_sentimentTripAdvisor'
// import TripAdvisorKWChart from './reportPartials/_kwFrequencyTripAdvisor'

class ChartsToShow extends Component {
    render() {
        console.log('hello')
        console.log('reviews', this.props.s.reviews)
        return (
            <div style={{ padding: 0, marginTop:'50px'}}>
            {/*<TripAdvisorKWChart organizedConcepts={this.props.s.organizedConcepts}/>*/}
            <SentimentBarChartMonth reviews={this.props.s.reviews}/>
             <KeywordPolar style={{margin:'100px'}} />
             <NumberOfReviewsOverTime reviews={this.props.s.reviews} />
             <PieChart s={this.props.s} reviews={this.props.s.reviews} style={{margin:'50px'}}/>
             <PieSentimentYelp reviews={this.props.s.reviews} style={{margin:'50px', width: '50px'}}/>
             <PieSentimentTripAdvisor reviews={this.props.s.reviews} style={{margin:'50px'}}/>

            </div>
        )
    }
}

export default ChartsToShow;
>>>>>>> d9eeacff309db55073e046e8916d60620c3c9af6
