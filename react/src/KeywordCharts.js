import React, {Component} from 'react'

import KeywordBarChart from './reportPartials/_barChartKWs'
import KeywordsOverTime from './reportPartials/_keywordFreqOverTime'
import Button from '@material-ui/core/Button';


class KeywordCharts extends Component {
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


//toggle feature
//add icons to buttons?

    const { reviews } = this.props
    const { showOverviewChart, showTimeChart } = this.state
    const buttonStyle = {
      margin: 30,
      background: '#E8B71A',
      color: 'white'
    }

     const buttonStyleTwo = {
      background: '#E8D28B',
      color: 'black'
    }
    return (
      <div>
        { showTimeChart && <KeywordsOverTime reviews={reviews}/> }
        { showOverviewChart && <KeywordBarChart reviewTypeToDisplayKW={this.props.reviewTypeToDisplayKW} reviews={reviews} />}
        <Button
          variant="contained"
          data-message="overtime"
          onClick={() => this.handleChartChange('showTimeChart')}
          style={buttonStyle}
        >
          trends over time
        </Button>
        <Button
          variant="contained"
          data-message="overall"
          onClick={() => this.handleChartChange('showOverviewChart')}
          style={buttonStyleTwo}
        >
          High level Overview
        </Button>
      </div>
    )
  }
}

export default KeywordCharts;