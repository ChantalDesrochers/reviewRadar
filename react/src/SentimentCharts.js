import React, {Component} from 'react'
import SentimentOverTime from './reportPartials/_sentimentOverTime'
import PieChart from './reportPartials/_pieChart'
import Button from '@material-ui/core/Button';

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
      width: "40%"

    }

    //  const buttonStyleTwo = {
    //   background: '#DBA2A7',
    //   color: 'black',
    //   margin: 10,
    //   width:
    // }

    const buttonStyles = {
      marginBottom: '100px',
      position:'relative',
      top: '-60px'
    }

    return (
      <div style={{textAlign:'center'}}>
        { (this.props.s.displayModifier === 'time' || this.props.s.displayModifier === 'timebymonth') && <SentimentOverTime clickHandlerForSentimentTimeChart={this.props.clickHandlerForSentimentTimeChart} changeSentimentDisplayModifier={this.props.changeSentimentDisplayModifier} s={this.props.s} reviews={reviews} /> }
        { (this.props.s.displayModifier === 'volume' || this.props.s.displayModifier === 'volumeBySentiment') &&  <PieChart s={this.props.s} reviews={reviews} pickReviewTypeToDisplay={this.props.pickReviewTypeToDisplay}  changeSentimentDisplayModifier={this.props.changeSentimentDisplayModifier} />}
        <div  style={buttonStyles}>
        <Button
          variant="outlined"
          data-message="overall"
          onClick={() => this.handleChartChange('showOverviewChart', 'volume')}
          style={buttonStyle}
        >
          High level Overview
        </Button>

        <Button
          variant="outlined"
          data-message="overtime"
          onClick={() => this.handleChartChange('showTimeChart', 'time')}
          style={buttonStyle}
        >
          trends over time
        </Button>
        </div>



      </div>
    )
    }
}

export default SentimentCharts;
