import React, { Component } from 'react'
import { Typography } from "@material-ui/core";
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

    if (displayModifier === 'volume') {
      //   this.setState({currentTargetedReviews: this.state.initialState})
      this.props.reviewTypeToDisplayKW(this.props.s.organizedConcepts[0].content)
    }
    this.setState({ ...resetCharts, [chartName]: true })
    this.props.changeKeywordDisplayModifier(displayModifier)
  }


  render() {
    //const { organizedConcepts } = this.props
    const { showOverviewChart, showTimeChart } = this.state
    const buttonStyles = {
      background: '#DBA2A7',
      color: 'black',
      margin: 10,
      width: "40%",
      height: "50px"

    }

    let buttonDiv = {}

    if (this.props.s.dataFocus === 'review') {
      buttonDiv = {
        marginBottom: '80px',
        position: 'relative',
        top: '80px',
      }
    } else if (this.props.s.dataFocus === 'chart') {
      buttonDiv = {
        // marginBottom: '80px',
        position: 'relative',
        top: '18px',
      }
    }
    return (
      <div style={{ textAlign: 'center' }}>
        {(this.props.s.displayModifier === 'time' || this.props.s.displayModifier === 'timebymonth') && <KeywordsOverTime s={this.props.s} clickHandlerForKeywordTimeChart={this.props.clickHandlerForKeywordTimeChart} organizedConcepts={this.props.organizedConcepts} monthConcepts={this.props.monthConcepts} changeKeywordDisplayModifier={this.props.changeKeywordDisplayModifier} />}
        {this.props.s.displayModifier === 'volume' && <KeywordBarChart s={this.props.s} reviewTypeToDisplayKW={this.props.reviewTypeToDisplayKW} organizedConcepts={this.props.organizedConcepts} changeKeywordDisplayModifier={this.props.changeKeywordDisplayModifier} />}
        <div style={buttonDiv}>
          <Button
            variant="outlined"
            data-message="overall"
            onClick={() => this.handleChartChange('showOverviewChart', 'volume')}
            style={buttonStyles}
          >
            <Typography style={{ fontSize: '1.3em' }} variant='title'> High level Overview</Typography>
          </Button>
          <Button
            variant="outlined"
            data-message="overtime"
            onClick={() => this.handleChartChange('showTimeChart', 'time')}
            style={buttonStyles}
          >
            <Typography style={{ fontSize: '1.3em' }} variant='title'>Trends Over Time</Typography>
          </Button>
        </div>
      </div>
    )
  }
}

export default KeywordCharts;
