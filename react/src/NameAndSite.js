import React, { Component } from "react";
import Paper from '@material-ui/core/Paper'
import { Star } from '@material-ui/icons'
class NameAndSite extends Component {


    makeBoxes = () => {
    const amountOfBars = this.parseSentimentData(this.state.rating)
    console.log('amount of bars', amountOfBars);
    let htmlToReturn = "";
    for(var i=0; i<amountOfBars;i++){
        //should be <Star/>
        htmlToReturn += 'Q'
    }
    return htmlToReturn
    }

    render() {
        return (
            <div style={{fontSize:'1.2rem', lineHeight:'29px'}} >{this.props.name} on Yelp</div>

        );
    }
}
export default NameAndSite