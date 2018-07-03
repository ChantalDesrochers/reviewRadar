import React, { Component } from "react";

import { Pie } from "react-chartjs-2";
import { defaults } from "react-chartjs-2";

class PieChart extends Component {
  constructor(props) {
    console.log("calling pie chart");
    super(props);
    this.state = {
      reviews: [],
      chartdata: {
        labels: [
          "Very Positive",
          "Positive",
          "Neutral",
          "Negative",
          "Very Negative"
        ],
        datasets: [
          {
            data: [],
            backgroundColor: [
              "#9B59B6",
              "#2980B9",
              "#16A085",
              "#C0392B",
              "#99A3A4"
            ],
            hoverBackgroundColor: [
              "#9B59B6",
              "#2980B9",
              "#16A085",
              "#C0392B",
              "#99A3A4"
            ]
          }
        ]
      }
    };
  }

  // componentDidMount() {
  componentWillReceiveProps(nextprops) {
    if (this.state.reviews != nextprops.reviews) {
      this.setState({ ...(this.state.reviews = nextprops.reviews) });
    }
    console.log("next props", nextprops);
    console.log("state of pie chart", this.state);
    // console.log("fired from piechart");
    var gettingChartData = () => {
      let dataScores = [];
      const reviews = this.state.reviews;
      var veryPositive = 0;
      var positive = 0;
      var neutral = 0;
      var negative = 0;
      var veryNegative = 0;
      reviews.forEach(function(review) {
        var rounded = parseFloat(review.score.toFixed(1));
        switch (rounded) {
          case 0:
            neutral += 1;
            break;
          case 0.1:
          case 0.2:
          case 0.3:
          case 0.4:
          case 0.6:
            positive += 1;
            break;
          case 0.7:
          case 0.8:
          case 0.9:
          case 1:
            veryPositive += 1;
          case -0.5:
          case -0.4:
          case -0.3:
          case -0.2:
          case -0.1:
            negative += 1;
            break;
          case -1:
          case -0.9:
          case -0.8:
          case -0.7:
          case -0.6:
            veryNegative += 1;
            break;
        }
        dataScores = [veryPositive, positive, neutral, negative, veryNegative];
      });
      this.setState({
        ...(this.state.chartdata.datasets[0].data = dataScores)
      });
    };
    gettingChartData();
  }

  render() {
    const handleClicktwo = elem => {
      if (elem[0]) {
        console.log(elem);
        let chartPoints = elem;
        let clickedPointIndex = chartPoints[0]["_index"];
        const label =
          chartPoints[0]["_chart"]["config"]["data"]["labels"][
            clickedPointIndex
          ];
        const score =
          chartPoints[0]["_chart"]["config"]["data"]["datasets"][0]["data"][
            clickedPointIndex
          ];
        this.props.pickReviewTypeToDisplay(label);
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

    return (
      <div className="pie-chart">
        <h1 style={{ marginTop: 0 }}>Overall Sentiment</h1>
        <Pie
          data={this.state.chartdata}
          getElementsAtEvent={elem => {
            handleClicktwo(elem);
          }}
          ref="myChart"
        />
      </div>
    );
  }
}

export default PieChart;
