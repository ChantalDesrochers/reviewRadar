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
import Scrollchor from 'react-scrollchor';
import Button from '@material-ui/core/Button';


class ChartsToShow extends Component {
   constructor(props) {
    super(props);
  }

   render() {
const styles ={
  Subtitles: {textAlign: 'center', color: 'black'},
  Title: {paddingBottom: 20, color: 'black', marginTop: 60},
  button: {marginTop: '55px', marginRight: '15px', marginBottom: '105px', background: '#E8CB6F', display: 'inline', width: '330px', height: '150px', color: 'black', textDecoration: 'none' }
}

       return (


           <div style={{ paddingLeft: 100, marginTop:'50px', marginLeft: '110px', marginRight: '60px' }}>

           <Grid container spacing={24}>
           <Grid item md={12} >
               <Typography id="top" style={styles.Title} variant="display3">Visualize Your Reviews</Typography>
                <div style={{marginTop: '10px', marginBottom: '30px'}}className="navbar-fixed-top">
              <Button style={styles.button} variant="contained"><Scrollchor style={{textDecoration: 'none', color: 'black', fontSize: '25px'}} to="#topics" className="nav-link">What People Are Saying</Scrollchor></Button>
              <Button style={styles.button} variant="contained"><Scrollchor style={{textDecoration: 'none', color: 'black', fontSize: '25px'}} to="#time" className="nav-link">How Things Are Trending</Scrollchor></Button>
              <Button style={styles.button} variant="contained"><Scrollchor style={{textDecoration: 'none', color: 'black', fontSize: '25px'}} to="site" className="nav-link">Comparing Different Review Sites</Scrollchor></Button>
              </div>
            </Grid>

            <Grid  item md={12} id="topics" >
              <Typography style={styles.Subtitles} variant="display2"><i>What People Are Saying</i></Typography>
               <ExtendedKeywordBarChart organizedConcepts={this.props.s.organizedConcepts}/>
               <Typography variant="body2"><Scrollchor style={{color: 'black'}} to="#top" className="nav-link">Back to Top</Scrollchor></Typography>
               <KeywordPolar s={this.props.s} />
                <Typography variant="body2"><Scrollchor style={{color: 'black', position: 'relative', top: '-112px', marginRight: '-72px'}} to="#top" className="nav-link">Back to Top</Scrollchor></Typography>
            </Grid>


            <Grid item md={12} id="time">
              <Typography style={styles.Subtitles} variant="display2"><i>How Things Are Trending</i></Typography>
              <SentimentBarChartMonth reviews={this.props.s.reviews}/>
               <Typography variant="body2"><Scrollchor style={{color: 'black', position: 'relative', top: '-51px'}} to="#top" className="nav-link">Back to Top</Scrollchor></Typography>
               <NumberOfReviewsOverTime reviews={this.props.s.reviews} />
                <Typography variant="body2"><Scrollchor style={{color: 'black', position: 'relative', top: '-80px'}} to="#top" className="nav-link">Back to Top</Scrollchor></Typography>
            </Grid>

            <Grid item md={12} id="site">
            <Typography style={styles.Subtitles} variant="display2"><i>Comparing Different Review Sites</i></Typography>
            </Grid>
            <Grid item md={6}>
                <PieSentimentTripAdvisor reviews={this.props.s.reviews} style={{margin:'50px'}}/>
                {/* <Typography variant="body2"><Scrollchor style={{color: 'black', position: 'relative', top: '47px'}} to="#top" className="nav-link">Back to Top</Scrollchor></Typography>*/}
            </Grid>
            <Grid item md={6}>
                 <PieSentimentYelp reviews={this.props.s.reviews} style={{margin:'50px', width: '50px'}}/>
                  {/*<Typography variant="body2"><Scrollchor style={{color: 'black', position: 'relative', top: '47px'}} to="#top" className="nav-link">Back to Top</Scrollchor></Typography>*/}
            </Grid>
            <Grid item md={12} >
                <SentimentOverSiteDivide reviews={this.props.s.reviews} style={{marginTop: '50%%'}}/>
                 <Typography variant="body2"><Scrollchor style={{color: 'black', position: 'relative', top: '-122px'}} to="#top" className="nav-link">Back to Top</Scrollchor></Typography>
            {/*    <PieChart s={this.props.s} reviews={this.props.s.reviews} style={{margin:'50px'}}/>*/}
            </Grid>

            </Grid>
           </div>
       )
   }
}


export default ChartsToShow;