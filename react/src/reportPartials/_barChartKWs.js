import React, { Component } from "react";
import { HorizontalBar } from "react-chartjs-2";
import 'typeface-roboto'
import { Typography } from "@material-ui/core";

class KeywordBarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ['#6EEFC2', '#6EEFC2', '#6EEFC2', '#6EEFC2', '#6EEFC2', '#6EEFC2', '#6EEFC2', '#6EEFC2', '#6EEFC2', '#6EEFC2'],
      borderColors: ['#5FD8AE', '#5FD8AE', '#5FD8AE', '#5FD8AE', '#5FD8AE', '#5FD8AE', '#5FD8AE', '#5FD8AE', '#5FD8AE,']
    }
  }

  getChartData = returnConcepts => {
    var colors = this.state.colors
    var borderColors = this.state.borderColors
    var topTen = returnConcepts.slice(0, 10);
    var label = [];
    var data = [];
    topTen.forEach(function (concept) {
      data.push(concept.references.length);
      label.push(concept.content);
    });
    return {
      labels: label,
      datasets: [{
        label: 'Concept Frequency',
        backgroundColor: colors,
        borderColor: borderColors,
        borderWidth: 1,
        hoverBackgroundColor: colors,
        hoverBorderColor: '#28abe3',
        data: data
      }],
      options: {
        scales: {
          xAxes: [{
            ticks: {
              min: 0
            }
          }]
        }
      }
    };
  };

  render() {
    const handleClick = elem => {
      if (elem[0]) {
        console.log(elem);
        let chartPoints = elem;
        let clickedPointIndex = chartPoints[0]["_index"];
        console.log('clickedPointIndex is', clickedPointIndex)

        var colourProptest = elem[0]['_chart']['config']['data']['datasets'][0]['backgroundColor'][clickedPointIndex]
        // console.log('colorbefore', colourProptest)
        // *** fix state set
        // *** fix color choices
        // *** fix top keyword frequency color
        this.state.colors = ['#6EEFC2', '#6EEFC2', '#6EEFC2', '#6EEFC2', '#6EEFC2', '#6EEFC2', '#6EEFC2', '#6EEFC2', '#6EEFC2', '#6EEFC2']
        this.state.borderColors = ['#5FD8AE', '#5FD8AE', '#5FD8AE', '#5FD8AE', '#5FD8AE', '#5FD8AE', '#5FD8AE', '#5FD8AE', '#5FD8AE,']
        this.state.colors[clickedPointIndex] = '#28abe3'
        this.state.borderColors[clickedPointIndex] = '#28abe3'
        const label =
          chartPoints[0]["_chart"]["config"]["data"]["labels"][
            clickedPointIndex
          ];
        this.props.reviewTypeToDisplayKW(label);
        const score =
          chartPoints[0]["_chart"]["config"]["data"]["datasets"][0]["data"][
            clickedPointIndex
          ];
        console.log(
          "chartPoints - label",
          chartPoints[0]["_chart"]["config"]["data"]["labels"][
            clickedPointIndex
          ]
        );
        console.log(
          "chartPoints - score",
          chartPoints[0]["_chart"]["config"]["data"]["datasets"][0]["data"][
            clickedPointIndex
          ]
        );
      }
    };

    const chartyOptions = {
      scales: {
        yAxes: [{
          ticks: {
            fontSize: 25
          }
        }]
      },
      legend: {
        labels: {
          fontSize: 25,
          fontWeight: 'bold'
        }
      },
      barThickness: 15,
      onElementsClick: function (evt, elements) {
        var datasetIndex;
        var dataset;
        var colors = ['#6EEFC2', '#6EEFC2', '#6EEFC2', '#6EEFC2', '#6EEFC2', '#6EEFC2', '#6EEFC2', '#6EEFC2', '#6EEFC2', '#6EEFC2']
        var borderColors = ['#5FD8AE', '#5FD8AE', '#5FD8AE', '#5FD8AE', '#5FD8AE', '#5FD8AE', '#5FD8AE', '#5FD8AE', '#5FD8AE,']
        if (elements.length) {
          var index = elements[0]._index;
          datasetIndex = elements[0]._datasetIndex;
          alert('this click is working y?')
          // Reset old state
          dataset = this.data.datasets[datasetIndex];
          dataset.backgroundColor = colors.slice();
          dataset.hoverBackgroundColor = colors.slice();

          dataset.backgroundColor[index] = '#28abe3'; // click color
          dataset.hoverBackgroundColor[index] = '#28abe3';
        } else {
          // remove hover styles
          for (datasetIndex = 0; datasetIndex < this.data.datasets.length; ++datasetIndex) {
            dataset = this.data.datasets[datasetIndex];
            dataset.backgroundColor = colors.slice();
            dataset.hoverBackgroundColor = colors.slice();
          }
        }

        this.update();
      }
    }

    const chartTitles = {
      Right: {
        fontSize: 30,
        padding: 20,
        margin: 0,
        color: 'black'},
      Left: {
        fontSize: 40,
        marginLeft: '-5%',
        color: 'black',
        marginTop: '11px'
      }
    }
    

    if (this.props.s.dataFocus === 'review') {
      return <div className="bar-chart" style={{marginTop:'10px'}}>
      <Typography  variant='display3'  style={chartTitles.Right}>Most commonly mentioned terms</Typography>
        <div style={{width:'90%'}}>
        <HorizontalBar
          data={this.getChartData(this.props.organizedConcepts)}
          getElementsAtEvent={(elem) => { handleClick(elem) }}    
          width={6}
          height={4}
          options={{
          maintainAspectRatio: false}}
          options={chartyOptions}
          ref="myChart"/>
        </div>
      </div>
    } else if (this.props.s.dataFocus === 'chart') {
      return <div className="bar-chart" style={{marginLeft:'100px'}}>
      <Typography variant='title' style={chartTitles.Left}>Most commonly mentioned terms</Typography>
        <div style={{width:'90%'}}>
        <HorizontalBar
          data={this.getChartData(this.props.organizedConcepts)}
          getElementsAtEvent={(elem) => { handleClick(elem) }}    
          width={6}
          height={4}
          options={{
          maintainAspectRatio: false}}
          options={chartyOptions}
          ref="myChart"/>
        </div>
      </div>
    }
  }
}

export default KeywordBarChart;
