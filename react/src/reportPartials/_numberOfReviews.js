import React, { Component } from "react";
import {Line} from 'react-chartjs-2';

class NumberOfReviewsOverTime extends Component {
  constructor(props) {
    super(props);
  }


getReviewsPerMonth = (reviews) => {
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
     return {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
        {
          label: 'Number of Reviews Generated Monthly',
          fill: false,
          lineTension: 0.1,
          backgroundColor: '#28ABE3',
          borderColor: '#2292C1',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#2292C1',
          pointBackgroundColor: '#2292C1',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#2292C1',
          pointHoverBorderColor: '#2292C1',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: count
        }]
      }

}

  render() {
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
          fontSize: 20,
          color: 'black'
        }
      }
    }

 const chartTitles = {
  fontSize: 25,
  fontFamily: 'roboto',
  color: 'black',
  padding: 0,
  marginBottom: 20,
  textAlign: 'left'
}
        return (

            <div style={{marginTop: 130, marginBottom: 90}}>
             <p style={chartTitles}>When are your customers reviewing you the most</p>
              <Line data={this.getReviewsPerMonth(this.props.reviews)} options={chartyOptions}/>
            </div>
        );
    }

}
 export default NumberOfReviewsOverTime;