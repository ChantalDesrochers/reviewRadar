import React, { Component } from "react";
import { Line } from 'react-chartjs-2';
import ReturnConcepts from "./returnConcepts.js";
import InputReviews from './conceptData.js'
import MonthConceptFrequency from './monthReturnConcepts.js'


class KeywordsOverTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: this.props.reviews,
      concepts: ReturnConcepts,
      conceptsTime: MonthConceptFrequency,
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
        {
          label: '',
          fill: false,
          lineTension: 0.1,
          backgroundColor: '#F37162',
          borderColor: '#E53A27',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#F37162',
          pointBackgroundColor: '#F37162',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: []        },
        {
          label: '',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: []
        },
         {
          label: '',
          fill: false,
          lineTension: 0.1,
          backgroundColor: '#C39BD3',
          borderColor: '#7D3C98',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: []
        },
        {
          label: '',
          fill: false,
          lineTension: 0.1,
          backgroundColor: '#C39BD3',
          borderColor: '#7D3C98',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: []
        },
        { label: '',
          fill: false,
          lineTension: 0.1,
          backgroundColor: '#C39BD3',
          borderColor: '#7D3C98',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: []
        }
        ]
      }
    }
  }


  componentDidMount() {
    var sortedArray = this.state.concepts.sort(function(a, b) {
    return b.references.length - a.references.length
  });
      var topFive = sortedArray.slice(0,5)
      console.log(topFive)

  const labels = topFive.map(x => x.content);
  console.log(labels)

  // console.log(this.state.conceptsTime)
const keywordsPerMonth = {}
var kwOverTime = this.state.conceptsTime;
console.log(kwOverTime)
let aoa = []
let indexer = 0
const kwPerMonth = () => {
  labels.forEach(function(label) { // for each label
    let pushData = []
    pushData = [0,0,0,0,0,0,0,0,0,0,0,0] // creates an array for year
    for (var month in kwOverTime) {  // for each month in the year object
      kwOverTime[month].forEach(function(concept) { //for each concept in the month
        if (label == concept.content) {
          pushData[indexer] = concept.references.length
        }
    })
    if (indexer < 12) {
      indexer += 1
    }
    console.log('level 2')
  }
  console.log('level 3 - pushing', pushData)
  aoa.push(pushData)
  indexer = 0
  })
}

kwPerMonth()
this.setState({ ...this.state.data.datasets[0].label = labels[0], ...this.state.data.datasets[1].label = labels[1], ...this.state.data.datasets[2].label = labels[2], ...this.state.data.datasets[3].label = labels[3], ...this.state.data.datasets[4].label = labels[4], ...this.state.data.datasets[0].data = aoa[0], ...this.state.data.datasets[1].data = aoa[1], ...this.state.data.datasets[2].data = aoa[2], ...this.state.data.datasets[3].data = aoa[3], ...this.state.data.datasets[4].data = aoa[4]})
      }

  render() {

    const handleClick = elem => {
      if (elem[0]) {
        console.log(elem)
        let chartPoints = elem;
        let clickedPointIndex = chartPoints[0]['_index']
        const label = chartPoints[0]['_chart']['config']['data']['labels'][clickedPointIndex];
        console.log("chartPoints - label", chartPoints[0]['_chart']['config']['data']['labels'][clickedPointIndex])
      }
    }


        return (
            <div className="pie-chart">
              <Line data={this.state.data} getElementsAtEvent={(elem)=>{handleClick(elem)}}/>
            </div>
        );
     }
  }

 export default KeywordsOverTime;
