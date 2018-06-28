import React, { Component } from "react";

class positivityChart extends Component {
  render() {
    let total = 0;
    this.props.reviews.forEach(function(review) {
      total += review.overall;
    });
    return (
      <div className="positivity">
        <h2>positivityChart</h2>
        <div className="chart">
        *chart placeholder*
        </div>
        average positivity: {total / this.props.reviews.length}
        <br />average negativity: {1 - total / this.props.reviews.length}
      </div>
    );
  }
}

export default positivityChart;
