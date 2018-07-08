import React, { Component } from "react";
import { HorizontalBar } from "react-chartjs-2";

class KeywordBarChart extends Component {
  constructor(props) {
    super(props);
  }

  getChartData = returnConcepts => {
    var topSeven = returnConcepts.slice(0, 6);
    var label = [];
    var data = [];
    topSeven.forEach(function(concept) {
      data.push(concept.references.length);
      label.push(concept.content);
    });
    return {
      labels: label,
      datasets: [
        {
          label: 'Keyword Frequency',
          backgroundColor: ['#6EEFC2', '#6EEFC2', 'blue', 'red', 'green', 'yellow'],
          borderColor: '#5FD8AE',
          borderWidth: 5,
          hoverBackgroundColor: '#60F2BF',
          hoverBorderColor: '#1FDA9A',
          data: data
        }
      ],
      options: {
        scales: {
          xAxes: [
            {
              ticks: {
                fontSize: 30
              }
            }
          ]
        }
      }
    }
  }


updateColour = (color) => {
  color = 'red'
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
        this.updateColour(colourProptest)
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
      barThickness: 15
    }



    return (
      <div className="bar-chart" style={{"height" : 450}}>

        <HorizontalBar data={this.getChartData(this.props.organizedConcepts)} getElementsAtEvent={(elem) => { handleClick(elem) }}    
        width={10}
        height={10}
  

  options={{
    maintainAspectRatio: false}}
    options={chartyOptions}
    ref="myChart"
    redraw/>
      </div>
    );
  }
}

export default KeywordBarChart;
