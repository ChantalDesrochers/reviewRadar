import React, { Component } from "react";
import { HorizontalBar } from "react-chartjs-2";
import 'typeface-roboto'

class ExtendedKeywordBarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ['#4BA5CC', '#4BA5CC','#4BA5CC', '#4BA5CC', '#4BA5CC', '#4BA5CC', '#4BA5CC', '#4BA5CC','#4BA5CC', '#4BA5CC', '#4BA5CC', '#4BA5CC', '#4BA5CC', '#4BA5CC', '#4BA5CC'],
      borderColors: ['#2395C6', '#2395C6', '#2395C6', '#2395C6', '#2395C6', '#2395C6','#2395C6', '#2395C6', '#2395C6', '#2395C6', '#2395C6', '#2395C6','#2395C6', '#2395C6', '#2395C6']
    }
  }

  getChartData = returnConcepts => {
    var colors = this.state.colors
    var borderColors = this.state.borderColors
    var topFifteen = returnConcepts.slice(0, 15);
    var label = [];
    var data = [];
    topFifteen.forEach(function(concept) {
      data.push(concept.references.length);
      label.push(concept.content);
    });
    return {
      labels: label,
      datasets: [
        {
          label: 'Topic Frequency',
          backgroundColor: colors,
          borderColor: borderColors,
          borderWidth: 5,
          hoverBackgroundColor: '#68AECC',
          hoverBorderColor: '#2395C6',
          data: data
        }
      ],
      options: {
        scales: {
          xAxes: [
            {
              ticks: {
                min: 0
              }
            }
          ]
        }
      }
    };
  };

  render() {

const chartyOptions = {
        scales: {
          yAxes: [
          {
            ticks: {
              fontSize: 20
            }
          }]
        },
        legend: {
        labels: {
          fontSize: 20,
          fontWeight: 'bold',
          fontFamily: 'roboto'
        }
      },
      barThickness: 15,
      }

  const chartTitles = {
  fontSize: 25,
  fontFamily: 'roboto',
  color: 'black',
  padding: 0,
  margin: 0,
  textAlign: 'left'
}



    return (
      <div className="bar-chart" style={{'marginTop': 50}}>
      <p style={chartTitles}>Fifteen Most Mentioned Terms</p>
        <HorizontalBar
          data={this.getChartData(this.props.organizedConcepts)}
    options={chartyOptions}
    ref="myChart"/>
      </div>
    );
  }
}

export default ExtendedKeywordBarChart;
