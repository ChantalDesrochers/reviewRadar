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
    {console.log('in keyword chart, being passed all concepts', this.props.organizedConcepts)}
    // {console.log('in keyword chart, being passed reviewtypetodisplay', this.props.reviewTypeToDisplayKW)}
    return (
      <div>
        { showTimeChart && <KeywordsOverTime organizedConcepts={this.props.organizedConcepts} monthConcepts={this.props.monthConcepts} clickHandlerForKeywordTimeChart={this.props.clickHandlerForKeywordTimeChart}/> }
        { showOverviewChart && <KeywordBarChart reviewTypeToDisplayKW={this.props.reviewTypeToDisplayKW} organizedConcepts={this.props.organizedConcepts} />}
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
