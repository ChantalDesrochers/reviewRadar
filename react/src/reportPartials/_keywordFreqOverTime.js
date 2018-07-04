import React, { Component } from "react";
import { Line } from 'react-chartjs-2';
import ReturnConcepts from "./returnConcepts.js";
import InputReviews from './conceptData.js'

class KeywordsOverTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: InputReviews,
      concepts: ReturnConcepts,
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
        {
          label: 'tha',
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
        }
        ]
      }
    }
  }


  componentDidMount() {
    var sortedArray = this.state.concepts.sort(function(a, b) {
    return b.references.length - a.references.length
  });
      var topTen = sortedArray.slice(0,10)
      console.log('top ten', topTen);

      console.log('this.state.reviews', this.state.reviews);

      for (let i = 0; i < topTen; i++) {
        // for each elment in topTen (eg. food)
        // loop through references in food
        // review = lodash _.find element in this.state.reviews where review.id = reference[i]
        // loop through counts. if key of count[i] is equal to review.datePublished.month, count[i]++

        const counts = {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0,
          6: 0,
          7: 0,
          8: 0,
          9: 0,
          10: 0,
          11: 0,
          12: 0,
        }

        // array = [0, 12, 2 ...]

        // set state
      }

      // sortedArray.forEach(function(review){
      //   var month = review.datePublished.split('-')[1];
      //   if (month === '01') {
      //     var january.review.con


      //   }

      // })

      // getKWFreq()
      console.log('test')
      // var topTen = sortedArray.slice(0, 9)
      // console.log(topTen)
        // var label = []
        // var data = []
        // topSeven.forEach(function(concept) {
        //   data.push(concept.references.length)
        //   label.push(concept.content)
        // });
        // this.setState({ ...this.state.data.labels = label, ...this.state.data.datasets[0].data = data})
        // }
      // getKWFreq()
        // getChartData()
    // }
  }

  render() {
    console.log('tesst')
      const handleClick = elem => {
        if (elem[0]) {
          console.log(elem)
          let chartPoints = elem;
          let clickedPointIndex = chartPoints[0]['_index']
          const label = chartPoints[0]['_chart']['config']['data']['labels'][clickedPointIndex];
          const score = chartPoints[0]['_chart']['config']['data']['datasets'][0]['data'][clickedPointIndex];
          console.log("chartPoints - label", chartPoints[0]['_chart']['config']['data']['labels'][clickedPointIndex])
          console.log("chartPoints - score", chartPoints[0]['_chart']['config']['data']['datasets'][0]['data'][clickedPointIndex])
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










