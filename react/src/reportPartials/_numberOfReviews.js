import React, { Component } from "react";
import {Line} from 'react-chartjs-2';

class NumberOfReviewsOverTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: this.props.reviews,
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
        {
          label: 'Number of Reviews Generated Monthly',
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
          data: []
        }]
      }
    }
  }

componentWillReceiveProps(nextprops) {
  if (this.state.reviews != nextprops.reviews) {
    this.setState({ ...(this.state.reviews = nextprops.reviews) });
  }

    var getReviewsPerMonth = () => {
      var reviews = this.state.reviews
      var january = {
        count: 0
      }
      var february = {
        count: 0
      }
      var march = {
        count: 0
      }
      var april = {
        count: 0
      }
      var may = {
        count: 0
      }
      var june = {
        count: 0
      }
      var july = {
        count: 0
      }
      var august = {
        count: 0
      }
      var september = {
        count: 0
      }
      var october = {
        count: 0
      }
      var november = {
        count: 0
      }
      var december = {
        count: 0
      }
      reviews.forEach(function(review) {
        var month = review.datePublished.split('-')[1]
        if (month === "01") {
          january.count += 1
        }
        if (month === "02") {
          february.count += 1
        }
        if (month === "03") {
          march.count += 1
        }
        if (month === "04") {
          april.count += 1
        }
        if (month === "05") {
          may.count += 1
        }
        if (month === "06") {
          june.count += 1
        }
        if (month === "07") {
          july.count += 1
        }
        if (month === "08") {
          august.count += 1
        }
        if (month === "09") {
          september.count += 1
        }
        if (month === "10") {
          october.count += 1
        }
        if (month === "11") {
          november.count += 1
        }
        if (month === "12") {
          december.count += 1
        }

      })
      var count = [january.count, february.count, march.count, april.count, may.count, june.count, july.count, august.count, september.count, october.count, november.count, december.count];
      this.setState({...this.state.data.datasets[0].data = count})

    }

getReviewsPerMonth()

}

  render() {
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
            <div >
              <Line data={this.state.data} getElementsAtEvent={(elem)=>{handleClick(elem)}}/>
            </div>
        );
    }

}
 export default NumberOfReviewsOverTime;