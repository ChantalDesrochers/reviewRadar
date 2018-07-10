import React, { Component } from "react";
import Paper from '@material-ui/core/Paper'
import { Star } from '@material-ui/icons'
import { Typography } from "@material-ui/core";
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
        console.log('site is', this.props.site)
        return (                                                                            
            <Typography variant="subheading" style={{fontSize:'1.4rem', lineHeight:'29px', color:'#009fe3'}} >{this.props.name}  <span style={{ color:'black'}}>on </span>  <i style={ this.props.site === 'Yelp' ? {color: '#e8b100'} : {color: '#db3340'}}>{this.props.site}</i></Typography>

        );
    }
}
export default NameAndSite