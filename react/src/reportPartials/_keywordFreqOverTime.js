import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import { withStyles } from '@material-ui/core/styles';
import 'typeface-roboto'
// import ReturnConcepts from "./organizedConcepts.js";
// import InputReviews from "./completedData.js";
// import MonthConceptFrequency from "./monthReturnConcepts.js";

class KeywordsOverTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // reviews: this.props.reviews,
      // concepts: ReturnConcepts,
      // conceptsTime: MonthConceptFrequency
    };
  }

  kwPerMonth = (organizedConcepts, monthConcepts) => {
    var topFive = organizedConcepts.slice(0, 5);
    const labels = topFive.map(x => x.content);
    let aoa = [];
    let indexer = 0;
    labels.forEach(function(label) {
      // for each label
      let pushData = [];
      pushData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // creates an array for year
      for (var month in monthConcepts) {
        // for each month in the year object
        monthConcepts[month].forEach(function(concept) {
          //for each concept in the month
          if (label == concept.content) {
            pushData[indexer] = concept.references.length;
          }
        });
        if (indexer < 12) {
          indexer += 1;
        }
      }
      aoa.push(pushData);
      indexer = 0;
    });
    return {
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      datasets: [
        {
          label: labels[0],
          fill: false,
          lineTension: 0.1,
          backgroundColor: '#78C2E2', //label
          borderColor: '#28ABE3',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#28ABE3',
          pointBackgroundColor: '#28ABE3',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#2083AD',
          pointHoverBorderColor: '#2083AD',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: aoa[0]
        },
        {
          label: labels[1],
          fill: false,
          lineTension: 0.1,
          backgroundColor: '#6AD8B2',
          borderColor: '#1FDA9A',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#1FDA9A',
          pointBackgroundColor: '#1FDA9A',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#12875E',
          pointHoverBorderColor: '#12875E',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: aoa[1]
        },
        {
          label: labels[2],
          fill: false,
          lineTension: 0.1,
          backgroundColor: '#E8C34A',
          borderColor: '#E8B71A',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#E8B71A',
          pointBackgroundColor: '#E8B71A',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#AD8913',
          pointHoverBorderColor: '#AD8913',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: aoa[2]
        },
        {
          label: labels[3],
          fill: false,
          lineTension: 0.1,
          backgroundColor: '#DB5964',
          borderColor: '#DB3340',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#DB3340',
          pointBackgroundColor: '#DB3340',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#8E202A',
          pointHoverBorderColor: '#8E202A',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: aoa[3]
        },
        {
          label: labels[4],
          fill: false,
          lineTension: 0.1,
          backgroundColor: '#F7F0DE',
          borderColor: '#F7DEA0',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#F7DEA0',
          pointBackgroundColor: '#F7DEA0',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#D6C08B',
          pointHoverBorderColor: '#D6C08B',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: aoa[4]
        }
      ]
    };
  };
  // this.setState({ ...this.state.data.datasets[0].label = labels[0], ...this.state.data.datasets[1].label = labels[1], ...this.state.data.datasets[2].label = labels[2], ...this.state.data.datasets[3].label = labels[3], ...this.state.data.datasets[4].label = labels[4], ...this.state.data.datasets[0].data = aoa[0], ...this.state.data.datasets[1].data = aoa[1], ...this.state.data.datasets[2].data = aoa[2], ...this.state.data.datasets[3].data = aoa[3], ...this.state.data.datasets[4].data = aoa[4]})

  render() {
    const handleClick = elem => {
      if (elem[0]) {
        console.log(elem)
        let chartPoints = elem;
        let clickedPointIndex = chartPoints[0]["_index"];
        const label =
          chartPoints[0]["_chart"]["config"]["data"]["labels"][
            clickedPointIndex
          ];
          const month = chartPoints[0]['_chart']['config']['data']['labels'][clickedPointIndex];
         console.log(month)
         this.props.clickHandlerForKeywordTimeChart(month)
        // console.log("chartPoints - label", chartPoints[0]['_chart']['config']['data']['labels'][clickedPointIndex])
      }
    };

const chartyOptions = {
        scales: {
          xAxes: [
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
      }
    }

    const chartTitles = {
  fontSize: 30,
  fontFamily: 'arial',
  padding: 0,
  margin: 0
}

    return (
      <div className="kwFreqOverTimeChart" style={{"height" : 450}}>
      <h3 style={chartTitles}>Topics mentioned over time</h3>
      <Line
          data={this.kwPerMonth(this.props.organizedConcepts, this.props.monthConcepts)} getElementsAtEvent={(elem)=>{handleClick(elem)}} width={10}
          height={7}
          options={{
            maintainAspectRatio: false}}
            options={chartyOptions}/>
      </div>
    );
  }
}


export default KeywordsOverTime;
