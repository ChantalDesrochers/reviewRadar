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
      time: false,
      overview: true
    }
  }


clickHandler = (event) => {
  console.log(event.target.innerHTML)
  if (event.target.innerHTML == 'See data over time') {
    this.setState({time: true, overview: false})
  } else if (event.target.innerHTML == 'High level Overview') {
    this.setState({time: false, overview: true})
  }
  }

    render() {
//       if(this.state.time) {
//         return ( <div>
//           <KeywordsOverTime reviews={this.props.reviews}/>
//                  <Button variant="outlined" data-message="overtime" onClick={this.clickHandler}>
//                     See data over time
//               </Button>
//                <Button variant="outlined" data-message="overall" onClick={this.clickHandler}>
//                     High level Overview
//               </Button>
//               </div>
//              );
//       } else {
//         return ( <div>
//           <KeywordBarChart reviews={this.props.reviews} />
//                  <Button variant="outlined" data-message="overtime" onClick={this.clickHandler}>
//                     See data over time
//               </Button>
//                <Button variant="outlined" data-message="overall" onClick={this.clickHandler}>
//                     High level Overview
//               </Button>
//               </div>
//              );
//       }
// }

return (
           <div className="chart-container">

             {/*<KeywordsOverTime reviews={this.props.reviews}/>*/}
             {/*<SentimentBarChartMonth reviews={this.props.reviews} /> */}
            {/* // <KeywordPolar/> */}
           {/*  <KeywordBarChart reviews={this.props.reviews} /> */}
             {/*<SentimentOverTime reviews={this.props.reviews} />*/}
            <NumberOfReviewsOverTime reviews={this.props.reviews}/>
            {/*<PieChart reviews={this.props.reviews} pickReviewTypeToDisplay={this.props.pickReviewTypeToDisplay} />*/}
             {/*<Button variant="outlined" data-message="overtime" onClick={this.clickHandler}>*/}
                     {/*See data over time*/}
               {/*</Button>*/}
                {/*<Button variant="outlined" data-message="overall" onClick={this.clickHandler}>*/}
                     {/*High level Overview*/}
               {/*</Button>*/}


        </div>
        );
      }






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