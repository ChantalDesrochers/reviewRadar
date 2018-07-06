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

  handleChartChange = chartName => {
    const resetCharts = {
      showTimeChart: false,
      showOverviewChart: false
    }
    this.setState({...resetCharts, [chartName]: true})
  }

  render() {
    const { reviews } = this.props
    const { showTimeChart, showOverviewChart } = this.state
    console.log('state in sentinent charts', this.state)
    return (
      <div>
        { showTimeChart && <SentimentOverTime reviews={reviews} /> }
        { showOverviewChart &&  <PieChart  reviews={reviews} pickReviewTypeToDisplay={this.props.pickReviewTypeToDisplay}  />}
        <Button
          variant="contained"
          data-message="overtime"
          onClick={() => this.handleChartChange('showTimeChart')}
        >
          See data over time
        </Button>
        <Button
          variant="outlined"
          data-message="overall"
          onClick={() => this.handleChartChange('showOverviewChart')}
        >
          High level Overview
        </Button>
      </div>
    )
    }
}

export default SentimentCharts;