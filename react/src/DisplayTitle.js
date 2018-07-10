import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';


const styles ={

}
class DisplayTitle extends Component {

    prepareHtml =() => {
        console.log('in displaxy title state', this.props.s)
        if(this.props.s.displaying === 'keyword' && this.props.s.displayModifier === 'volume') {
           return( <Typography variant="title" style={{fontSize:'1.4em', paddingBottom:'1em'}}> Reviews about <b style={{fontSize:'2em'}}>{this.props.s.keywordChartTarget}</b> </Typography> )

        } else if (this.props.s.displaySentimentType == 'positive' && this.props.s.displayModifier == 'volumeBySentiment') {
        return (
            <Typography variant="title" style={{fontSize:'1.4em', paddingBottom:'1em'}}>Toggle through your positive reviews!</Typography>
            )
    } else if (this.props.s.displaySentimentType === 'negative' && this.props.s.displayModifier == 'volumeBySentiment') {
        return (
            <Typography variant="title" style={{fontSize:'1.4em', paddingBottom:'1em'}}>Toggle through your negative reviews!</Typography>
            )
    } else if (this.props.s.displayModifier === "time") {
        return (
         <Typography variant="title" style={{fontSize:'1.4em', paddingBottom:'1em'}}>View Your Five Most Recent Reviews</Typography>
            )
    } else if (this.props.s.displayModifier === "timebymonth") {
        return <Typography variant="title" style={{fontSize:'1.4em', paddingBottom:'1em'}}></Typography>
    }
        else return (
        <Typography variant="title" style={{fontSize:'1.4em', paddingBottom:'1em'}}> {this.props.s.displayTitle}</Typography>
        )
    }


    render() {
        return <div>
        {this.prepareHtml()}
      </div>
    }
}
export default withStyles(styles)(DisplayTitle)
