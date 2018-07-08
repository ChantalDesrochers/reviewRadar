import React, { Component } from "react";
import { HorizontalBar } from "react-chartjs-2";

class KeywordBarChart extends Component {
  constructor(props) {
    super(props);
  }

  getChartData = returnConcepts => {
    var colors = ['#6EEFC2', '#6EEFC2', '#6EEFC2', '#6EEFC2', '#6EEFC2', '#6EEFC2']
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

    const handleClick = elem => {

      if (elem[0]) {
        console.log('elem', elem)
        console.log('color', elem[0]['_model']['backgroundColor'])
        let chartPoints = elem;
        let clickedPointIndex = chartPoints[0]['_index']
        console.log('dataset index', chartPoints[0]._datasetIndex)
        // var colourProp = elem[0]['_chart']['config']['data']['datasets'][0]['backgroundColor'][clickedPointIndex]
        var colourProptest = elem[0]['_chart']['config']['data']['datasets'][0]['backgroundColor']

        console.log('colorbefore', colourProptest)
        // colourProptest = 'red'
        console.log('colorafter', colourProptest)
        console.log("clickedpoint", clickedPointIndex)
        const label = chartPoints[0]['_chart']['config']['data']['labels'][clickedPointIndex];
        this.props.reviewTypeToDisplayKW(label)
        console.log("chartPoints - label", chartPoints[0]['_chart']['config']['data']['labels'][clickedPointIndex])
        console.log("chartPoints - score", chartPoints[0]['_chart']['config']['data']['datasets'][0]['data'][clickedPointIndex])
      }
    }

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
      barThickness: 15,
      getElementAtEvent: function(evt, elements) {
          var datasetIndex;
          var dataset;
          var colors = ['#6EEFC2', '#6EEFC2', '#6EEFC2', '#6EEFC2', '#6EEFC2', '#6EEFC2']

          if (elements.length) {
            var index = elements[0]._index;
            datasetIndex = elements[0]._datasetIndex;
            alert('this click is working?')
            // Reset old state
            dataset = this.data.datasets[datasetIndex];
            dataset.backgroundColor = colors.slice();
            dataset.hoverBackgroundColor = colors.slice();

            dataset.backgroundColor[index] = 'red'; // click color
            dataset.hoverBackgroundColor[index] = 'red';
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




    return (
      <div className="bar-chart" style={{"height" : 450}}>

        <HorizontalBar data={this.getChartData(this.props.organizedConcepts)} getElementsAtEvent={(elem) => { handleClick(elem) }}    width={10}
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

export default KeywordBarChart;
