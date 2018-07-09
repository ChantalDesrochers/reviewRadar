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

  handleChartChange = (chartName, displayModifier) => {
    const resetCharts = {
      showTimeChart: false,
      showOverviewChart: false
    }

    if (displayModifier === 'volume'){
    //   this.setState({currentTargetedReviews: this.state.initialState})
      this.props.reviewTypeToDisplayKW(this.props.s.organizedConcepts[0].content)
    }
    this.setState({...resetCharts, [chartName]: true})
    this.props.changeKeywordDisplayModifier(displayModifier)
  }


  render() {
    //const { organizedConcepts } = this.props
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
      <div className='keywordChartContainer' style={{textAlign:'center'}}>
        {/* { showTimeChart && <KeywordsOverTime clickHandlerForKeywordTimeChart={this.props.clickHandlerForKeywordTimeChart} organizedConcepts={this.props.organizedConcepts} monthConcepts={this.props.monthConcepts}/> } */}
        { (this.props.s.displayModifier === 'time' || this.props.s.displayModifier === 'timebymonth') && <KeywordsOverTime clickHandlerForKeywordTimeChart={this.props.clickHandlerForKeywordTimeChart} organizedConcepts={this.props.organizedConcepts} monthConcepts={this.props.monthConcepts} changeKeywordDisplayModifier={this.props.changeKeywordDisplayModifier}/> }
        {/* { showOverviewChart && <KeywordBarChart reviewTypeToDisplayKW={this.props.reviewTypeToDisplayKW} organizedConcepts={this.props.organizedConcepts} />} */}
        { this.props.s.displayModifier === 'volume' && <KeywordBarChart reviewTypeToDisplayKW={this.props.reviewTypeToDisplayKW} organizedConcepts={this.props.organizedConcepts} changeKeywordDisplayModifier={this.props.changeKeywordDisplayModifier}/>}

        <Button
          variant="contained"
          data-message="overall"
          onClick={() => this.handleChartChange('showOverviewChart', 'volume')}
          style={buttonStyleTwo}
        >
          High level Overview
        </Button>
        <Button
          variant="contained"
          data-message="overtime"
          onClick={() => this.handleChartChange('showTimeChart', 'time')}
          style={buttonStyle}
        >
          trends over time
        </Button>
      </div>
    )
  }
}

export default KeywordCharts;
