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
      margin: 30,
      background: '#DBA2A7',
      color: 'white'
    }

     const buttonStyleTwo = {
      background: '#DBA2A7',
      color: 'white'
    }

    return (
      <div>
        { showTimeChart && <SentimentOverTime clickHandlerForSentimentTimeChart={this.props.clickHandlerForSentimentTimeChart} changeSentimentDisplayModifier={this.props.changeSentimentDisplayModifier} s={this.props.s} reviews={reviews} /> }
        { showOverviewChart &&  <PieChart s={this.props.s} reviews={reviews} pickReviewTypeToDisplay={this.props.pickReviewTypeToDisplay}  />}
        <Button
          variant="outlined"
          data-message="overtime"
          onClick={() => this.handleChartChange('showTimeChart', 'time')}
          style={buttonStyle}
        >
          trends over time
        </Button>
        <Button
          variant="outlined"
          data-message="overall"
          onClick={() => this.handleChartChange('showOverviewChart', 'volume')}
          style={buttonStyleTwo}
        >
          High level Overview
        </Button>
      </div>
    )
    }
}

export default SentimentCharts;
