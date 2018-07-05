import React, { Component } from "react";
import PieChart from './_pieChart'
import KeywordBarChart from './_barChartKWs'
import SentimentOverTime from './_sentimentOverTime'
import NumberOfReviewsOverTime from './_numberOfReviews.js'
import KeywordsOverTime from './_keywordFreqOverTime.js'
import KeywordPolar from './_keywordPolar.js'
import Button from '@material-ui/core/Button';
// import SentimentBarChartMonth from './_monthSentimentBar.js'

class ChartContainer extends Component {
 constructor(props) {
    super(props);
    this.state = {
      reviews: this.props.reviews,
      timeSentiment: false,
      overviewSentiment: true,
      timeKeyword: false,
      overviewKeyword: false,
      leftside: this.props.leftSideState
    }
  }

/// pass in keyword/sentiment state and add additional if statements for button clicks
clickHandler = (event) => {
  // console.log(event.target.innerHTML)
  if (event.target.innerHTML == 'See data over time' && this.state.leftside.displaying == "sentiment") {
    this.setState({...this.state.timeSentiment = true, ...this.state.overviewSentiment = false, ...this.state.timeKeyword = false, ...this.state.overviewKeyword = false})
    console.log(this.state.leftside.displaying)
    console.log("time sentiment", this.state.timeSentiment)
    console.log("event target", event.target.innerHTML)
  } else if (event.target.innerHTML == 'High level Overview' && this.state.leftside.displaying == "sentiment") {
    this.setState({...this.state.timeSentiment = false, ...this.state.overviewSentiment = true, ...this.state.timeKeyword = false, ...this.state.overviewKeyword = false})
    console.log(this.state.leftside.displaying)
    console.log("overview sentiment", this.state.overviewSentiment)
    console.log("event target", event.target.innerHTML)
  } else if (event.target.innerHTML == 'High level Overview' && this.state.leftside.displaying == "keyword") {
    this.setState({...this.state.timeKeyword = false, ...this.state.overviewKeyword = true, ...this.state.timeSentiment = false, ...this.state.overviewSentiment = false})
     console.log(this.state.leftside.displaying);
    console.log("overview keyword", this.state.overviewKeyword)
    console.log("event target", event.target.innerHTML)
  } else {
    this.setState({...this.state.timeKeyword = true, ...this.state.overviewKeyword = false, ...this.state.timeSentiment = false, ...this.state.overviewSentiment = false})
    console.log(this.state.leftside.displaying)
    console.log("timekeyword", this.state.timekeyword)
    console.log("event target", event.target.innerHTML)
  }
}

    render() {
      if(this.state.timeKeyword) {
        return ( <div>
          <KeywordsOverTime reviews={this.props.reviews}/>
                 {/*<Button variant="contained" data-message="overtime" onClick={() => this.props.clickHandler('keyword')}>*/}
                 <Button variant="contained" data-message="overtime" onClick={() => this.clickHandler}>
                    See data over time
              </Button>
               <Button variant="outlined" data-message="overall" onClick={this.clickHandler}>
                    High level Overview
              </Button>
              </div>
             );
      } else if (this.state.overviewKeyword) {
        return ( <div>
          <KeywordBarChart reviews={this.props.reviews} />
                 <Button variant="outlined" data-message="overtime" onClick={this.clickHandler}>
                    See data over time
              </Button>
               <Button variant="outlined" data-message="overall" onClick={this.clickHandler}>
                    High level Overview
              </Button>
              </div>
             );
      } else if (this.state.timeSentiment) {
         return ( <div>
          <SentimentOverTime reviews={this.props.reviews} />
                 <Button variant="outlined" data-message="overtime" onClick={this.clickHandler}>
                    See data over time
              </Button>
               <Button variant="outlined" data-message="overall" onClick={this.clickHandler}>
                    High level Overview
              </Button>
              </div>
             );
      } else if (this.state.overviewSentiment) {
        return (
        <div>
          <PieChart reviews={this.props.reviews} />
                 <Button variant="outlined" data-message="overtime" onClick={this.clickHandler}>
                    See data over time
              </Button>
               <Button variant="outlined" data-message="overall" onClick={this.clickHandler}>
                    High level Overview
              </Button>
              </div>
             );
      }
}

// return (
//            <div className="chart-container">

//              {/*<KeywordsOverTime reviews={this.props.reviews}/>*/}
//              {/*<SentimentBarChartMonth reviews={this.props.reviews} /> */}
//             {/* // <KeywordPolar/> */}
//            {/*  <KeywordBarChart reviews={this.props.reviews} /> */}
//              {/*<SentimentOverTime reviews={this.props.reviews} />*/}
//             <NumberOfReviewsOverTime reviews={this.props.reviews}/>
//             {<PieChart reviews={this.props.reviews} pickReviewTypeToDisplay={this.props.pickReviewTypeToDisplay} />}
//              {/*<Button variant="outlined" data-message="overtime" onClick={this.clickHandler}>*/}
//                      {/*See data over time*/}
//                {/*</Button>*/}
//                 {/*<Button variant="outlined" data-message="overall" onClick={this.clickHandler}>*/}
//                      {/*High level Overview*/}
//                {/*</Button>*/}


//         </div>
//         );
//       }






}

        // return (
        //    <div className="chart-container">

        //     <KeywordsOverTime reviews={this.props.reviews}/>
        //     {/*<SentimentBarChartMonth reviews={this.props.reviews} /> */}
        //    {/* // <KeywordPolar/> */}
        //   {/*  <KeywordBarChart reviews={this.props.reviews} /> */}
        //   {/*  <SentimentOverTime reviews={this.props.reviews} />*/}
        //   {/* <NumberOfReviewsOverTime reviews={this.props.reviews}/>*/}
        //     <PieChart reviews={this.props.reviews} pickReviewTypeToDisplay={this.props.pickReviewTypeToDisplay} />
        //        <Button variant="outlined" data-message="overtime" onClick={this.clickHandler}>
        //             See data over time
        //       </Button>
        //        <Button variant="outlined" data-message="overall" onClick={this.clickHandler}>
        //             High level Overview
        //       </Button>


        // </div>
        // );
//     }
// }

export default ChartContainer;