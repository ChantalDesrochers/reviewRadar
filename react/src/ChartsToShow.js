import React, { Component } from "react";
import 'typeface-roboto'
import { withStyles } from '@material-ui/core/styles';
import KeywordPolar from './reportPartials/_keywordPolar'
import PieChart from './reportPartials/_pieChart'
import NumberOfReviewsOverTime from './reportPartials/_numberOfReviews'
import SentimentBarChartMonth from './reportPartials/_monthSentimentBar'
import PieSentimentYelp from './reportPartials/_sentimentYelp'
import PieSentimentTripAdvisor from './reportPartials/_sentimentTripAdvisor'
import SentimentOverSiteDivide from './reportPartials/_sentimentOverTimeSiteDivide'
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import "typeface-roboto";
import ExtendedKeywordBarChart from './reportPartials/_extendedKWBar.js'


class ChartsToShow extends Component {
   constructor(props) {
    super(props);
  }

   render() {
const styles ={
  Subtitles: {textAlign: 'left'},
  Title: {paddingBottom: 50}
}

       return (
           <div style={{ paddingLeft: 100, marginTop:'50px', marginLeft: '50px'}}>
           <Grid container spacing={24}>
             <Grid item md={12} >
               <Typography style={styles.Title} variant="display3">Visualize Your Reviews</Typography>
            </Grid>

            <Grid  item md={12} >
              <Typography style={styles.Subtitles} variant="display2"><i>What your users are talking about</i></Typography>
               <ExtendedKeywordBarChart organizedConcepts={this.props.s.organizedConcepts}/>
               <KeywordPolar s={this.props.s} />
            </Grid>


            <Grid item md={12} >
              <Typography style={styles.Subtitles} variant="display2"><i>Trends over time</i></Typography>
               <NumberOfReviewsOverTime reviews={this.props.s.reviews} />
               <SentimentBarChartMonth reviews={this.props.s.reviews}/>
            </Grid>

            <Grid item md={12} >
            <Typography variant="display3">Comparing the review sites</Typography>
            </Grid>
            <Grid item md={6}>
                <PieSentimentTripAdvisor reviews={this.props.s.reviews} style={{margin:'50px'}}/>
            </Grid>
            <Grid item md={6}>
                 <PieSentimentYelp reviews={this.props.s.reviews} style={{margin:'50px', width: '50px'}}/>
            </Grid>
            <Grid item md={12} >
                <SentimentOverSiteDivide reviews={this.props.s.reviews}/>
                <PieChart s={this.props.s} reviews={this.props.s.reviews} style={{margin:'50px'}}/>
            </Grid>

            </Grid>
           </div>
       )
   }
}


export default ChartsToShow;