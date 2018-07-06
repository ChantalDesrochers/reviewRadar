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

  
  conceptAggreator = array => {
    const checkForExisting = match => element => {
      console.log('passed into match', match)
      console.log('passed into element', element)
      return element.content == match;
    };
    let allConcepts = [];
    array.forEach(function(review) {
      review.concepts.forEach(function(concept) {
        // console.log(allConcepts.findIndex(checkForExisting(concept.content)));
        console.log('before passing into existing', concept.content)
        let existingIndex = allConcepts.findIndex(checkForExisting(concept.content));
        if (existingIndex < 0) {
          allConcepts.push({
            content: concept.content,
            references: [review.id]
          });
        } else {
          allConcepts[existingIndex].references.push(review.id);
        }
      })
    });
    return allConcepts
  };


  handleChartChange = chartName => {
    const resetCharts = {
      showTimeChart: false,
      showOverviewChart: false
    }
    this.setState({...resetCharts, [chartName]: true})
  }

  render() {
    //const { reviews } = this.props
    const { showOverviewChart, showTimeChart } = this.state
    // {console.log('in keyword chart, being passed reviews', this.props.reviews)}
    // {console.log('in keyword chart, being passed reviewtypetodisplay', this.props.reviewTypeToDisplayKW)}
    return (
      <div>
        { showTimeChart && <KeywordsOverTime reviews={this.props.reviews}/> }
        { showOverviewChart && <KeywordBarChart reviewTypeToDisplayKW={this.props.reviewTypeToDisplayKW} reviews={this.conceptAggreator(this.props.reviews)} />}
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

export default KeywordCharts;
