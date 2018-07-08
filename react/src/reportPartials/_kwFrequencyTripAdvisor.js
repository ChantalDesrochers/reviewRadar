import React, { Component } from "react";
import { HorizontalBar } from "react-chartjs-2";

class TripAdvisorKWChart extends Component {
  constructor(props) {
    super(props);
  }

  getChartData = returnConcepts => {
    var colors = ['#6EEFC2', '#6EEFC2', '#6EEFC2', '#6EEFC2', '#6EEFC2', '#6EEFC2']
    console.log('organized concepts', returnConcepts)
    var topSeven = returnConcepts.slice(0, 6);
    var label = [];
    var data = [];
    topSeven.forEach(function(concept) {
      data.push(concept.references.length);
      label.push(concept.content);
    });
    return {
      labels: label,
      datasets: [{
        label: 'Keyword Frequency',
        backgroundColor: colors,
        borderColor: '#5FD8AE',
        borderWidth: 5,
        hoverBackgroundColor: colors,
        hoverBorderColor: '#1FDA9A',
        data: data
      }],
      options: {
        scales: {
          xAxes: [{
            ticks: {
              fontSize: 30
            }
          }]

        }
      }
    }
  }


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
          fontSize: 20
        }
      },
      barThickness: 15
    }

    return (
      <div className="bar-chart" style={{"height" : 450}}>

        <HorizontalBar data={this.getChartData(this.props.organizedConcepts)} width={10}
  height={10}
  options={{
    maintainAspectRatio: false}}
    options={chartyOptions}
    ref="myChart"
    />
      </div>
    );
  }
}

export default TripAdvisorKWChart;
