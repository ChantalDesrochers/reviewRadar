import React, {Component} from 'react'
import SentimentOverTime from './reportPartials/_sentimentOverTime'
import PieChart from './reportPartials/_pieChart'
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

class SentimentCharts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showTimeChart: false,
      showOverviewChart: true
    }
  }


  handleChartChange = (chartName, displayModifier) => {
    const resetCharts = {
      showTimeChart: false,
      showOverviewChart: false
    }
    this.setState({...resetCharts, [chartName]: true})
    this.props.changeSentimentDisplayModifier(displayModifier)
  }



  render() {
    const { reviews } = this.props
    const { showTimeChart, showOverviewChart } = this.state
    const buttonStyle = {
      background: '#DBA2A7',
      color: 'black',
      margin: 10,
      width: "40%",
      height:"50px"

    }

    //  const buttonStyleTwo = {
    //   background: '#DBA2A7',
    //   color: 'black',
    //   margin: 10,
    //   width:
    // }

    const buttonDiv = {
      marginBottom: '80px',
      position:'relative',
      top: '-40px',

      
    }

    return (
      <div style={{textAlign:'center'}}>
        { (this.props.s.displayModifier === 'time' || this.props.s.displayModifier === 'timebymonth') && <SentimentOverTime clickHandlerForSentimentTimeChart={this.props.clickHandlerForSentimentTimeChart} changeSentimentDisplayModifier={this.props.changeSentimentDisplayModifier} s={this.props.s} reviews={reviews} /> }
        { (this.props.s.displayModifier === 'volume' || this.props.s.displayModifier === 'volumeBySentiment') &&  <PieChart s={this.props.s} reviews={reviews} pickReviewTypeToDisplay={this.props.pickReviewTypeToDisplay}  changeSentimentDisplayModifier={this.props.changeSentimentDisplayModifier} />}
        <div  style={buttonDiv}>
        <Button
          variant="outlined"
          data-message="overall"
          onClick={() => this.handleChartChange('showOverviewChart', 'volume')}
          style={buttonStyle}
        >
       <Typography style={{fontSize:'1.3em'}} variant='title'>SENTIMENT TOTALS</Typography>
        </Button>

        <Button
          variant="outlined"
          data-message="overtime"
          onClick={() => this.handleChartChange('showTimeChart', 'time')}
          style={buttonStyle}
        >
         <Typography style={{fontSize:'1.3em'}} variant='title'>TRENDS OVER TIME</Typography>
        </Button>
        </div>



      </div>
    )
    }
}

export default SentimentCharts;
