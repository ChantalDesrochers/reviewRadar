import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'

const styles = {
SingleReviewLeft: {textAlign:'center', margin:'auto', color:'black', position:'relative', left:'40' },
SingleReviewLeftPaper: {height:'100%', padding:'25px'},
SingleReviewLeftContainer: {margin: 'auto', height:'50px', width:'1100px'}
}
class DisplayTitle extends Component {

    prepareHtml = () => {
        console.log('in displaxy title state', this.props.s)
        if (this.props.s.displaying === 'keyword' && this.props.s.displayModifier === 'volume') {
            return (<Typography variant="title" style={{ fontSize: '1.4em', float: 'left', paddingBottom: '2em' }}> reviews about...   <b style={{ fontSize: '2em', textAlign: 'center' }}><i>{this.props.s.keywordChartTarget}</i></b> </Typography>)

        } else if (this.props.s.displaying === 'sentiment' && this.props.s.displayModifier === 'volume') {
            return (
               <div style={styles.SingleReviewLeftContainer}><Paper style={styles.SingleReviewLeftPaper}><Typography variant="display2" style={styles.SingleReviewLeft}>Full Reviews</Typography></Paper></div>
            )
        }
        else if (this.props.s.displaySentimentType === 'positive' && this.props.s.displayModifier === 'volumeBySentiment') {
            return (
                <Typography variant="title" style={{ fontSize: '1.4em', paddingBottom: '1em', float: 'left' }}>Toggle through your positive reviews!</Typography>
            )
        } else if (this.props.s.displaySentimentType === 'negative' && this.props.s.displayModifier === 'volumeBySentiment') {
            return (
                <Typography variant="title" style={{ fontSize: '1.4em', paddingBottom: '1em', float: 'left' }}>Toggle through your negative reviews!</Typography>
            )
        } else if (this.props.s.displayModifier === "time") {
            return (
                <Typography variant="title" style={{ fontSize: '1.4em', paddingBottom: '1em', float: 'left' }}>View Your Five Most Recent Reviews</Typography>
            )
        } else if (this.props.s.displayModifier === "timebymonth") {
            return <Typography variant="title" style={{ fontSize: '1.4em', paddingBottom: '1em', float: 'left' }}></Typography>
        }
        else return (
            <Typography variant="title" style={{ fontSize: '1.4em', paddingBottom: '1em', float: 'left' }}> {this.props.s.displayTitle}</Typography>
        )
    }


    render() {
        return <div>
            {this.prepareHtml()}
        </div>
    }
}
export default withStyles(styles)(DisplayTitle)
