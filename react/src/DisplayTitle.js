import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import 'typeface-roboto'
const styles = {
    SingleReviewLeft: { textAlign: 'center', margin: 'auto', color: 'black', position: 'relative', left: '40' },
    SingleReviewLeftPaper: { height: '100%', padding: '25px', backgroundColor: '#f7eed7' },
    SingleReviewLeftContainer: { margin: 'auto', height: '45px', width: '1100px' },
    SingleReviewLeftContainerMultiple: { margin: 'auto', height: '45px', width: '1100px' },

    SingleReviewRight: { textAlign: 'center', margin: 'auto', color: 'black', position: 'relative', left: '40', fontSize: '30px' },
    SingleReviewRightPaper: { height: '100%', padding: '25px', backgroundColor: '#f7eed7', marginTop: '10px' },
    SingleReviewRightContainer: { margin: 'auto', height: '25px', width: '500px' },
    SingleReviewRightContainerMultiple: { margin: 'auto', height: '45px', width: '500px' }
}
class DisplayTitle extends Component {

    prepareHtml = () => {
        console.log('in displaxy title state', this.props.s)

        if (this.props.s.displaying === 'keyword' && this.props.s.displayModifier === 'volume') {
            if (this.props.s.dataFocus === 'review') {
                return (
                    <div style={styles.SingleReviewLeftContainer}>
                        <Paper style={styles.SingleReviewLeftPaper}>
                            <Typography variant="display2" style={{ ...styles.SingleReviewLeft, fontSize: '46px', paddingTop: '-3px' }}>
                                Reviews about...<i>'{this.props.s.keywordChartTarget}'</i></Typography></Paper></div>)
            }
            else if (this.props.s.dataFocus === 'chart') {
                return (
                    <div style={styles.SingleReviewRightContainer}>
                        <Paper style={styles.SingleReviewRightPaper}>
                            <div style={{ marginTop: '-11px' }}>
                                <Typography variant="subheading" style={styles.SingleReviewRight}>
                                    Reviews about...  '<i><b>{this.props.s.keywordChartTarget}'</b></i> </Typography></div></Paper></div>)
            }
        } else if (this.props.s.displaying === 'sentiment' && this.props.s.displayModifier === 'volume') {
            if (this.props.s.dataFocus === 'review') {
                return (
                    <div style={styles.SingleReviewLeftContainer}>
                        <Paper style={styles.SingleReviewLeftPaper}>
                            <Typography variant="display2" style={styles.SingleReviewLeft}>Reviews Sorted By Sentiment</Typography></Paper></div>
                )
            }
            else if (this.props.s.dataFocus === 'chart') {
                return (
                    <div style={styles.SingleReviewRightContainer}>
                        <Paper style={styles.SingleReviewRightPaper}>
                            <div style={{ marginTop: '-11px' }}>
                                <Typography variant="subheading" style={styles.SingleReviewRight}>Reviews Sorted By Sentiment</Typography></div></Paper></div>
                )
            }
        }
        else if (this.props.s.displaySentimentType === 'positive' && this.props.s.displayModifier === 'volumeBySentiment') {

            if (this.props.s.dataFocus === 'review') {
                console.log('the review switch worked');
                return (
                    <div style={styles.SingleReviewLeftContainerMultiple}>
                        <Paper style={styles.SingleReviewLeftPaper}> <Typography variant="display2" style={styles.SingleReviewLeft}>Positive Reviews</Typography></Paper></div>
                )
            }

            else {
                return (
                    <div style={styles.SingleReviewRightContainer}>
                        <Paper style={styles.SingleReviewRightPaper}>
                            <div style={{ marginTop: '-11px' }}>
                                <Typography variant="subheading" style={styles.SingleReviewRight}>
                                    Positive Reviews</Typography></div></Paper></div>)
            }




        } else if (this.props.s.displaySentimentType === 'negative' && this.props.s.displayModifier === 'volumeBySentiment') {
            if (this.props.s.dataFocus === 'review') {
                return (
                    <div style={styles.SingleReviewLeftContainerMultiple}>
                        <Paper style={styles.SingleReviewLeftPaper}>  <Typography variant="display2" style={styles.SingleReviewLeft}>Negative Reviews</Typography></Paper></div>
                )
            }
            else {
                return (
                    <div style={styles.SingleReviewRightContainer}>
                        <Paper style={styles.SingleReviewRightPaper}>
                            <div style={{ marginTop: '-11px' }}>
                                <Typography variant="subheading" style={styles.SingleReviewRight}>
                                    Negative Reviews</Typography></div></Paper></div>)
            }

        } else if (this.props.s.displaySentimentType === 'very positive' && this.props.s.displayModifier === 'volumeBySentiment') {
            if (this.props.s.dataFocus === 'review') {
                return (
                    <div style={styles.SingleReviewLeftContainerMultiple}>
                        <Paper style={styles.SingleReviewLeftPaper}>  <Typography variant="display2" style={styles.SingleReviewLeft}>Very Positive Reviews</Typography></Paper></div>
                )
            }
            else {
                return (
                    <div style={styles.SingleReviewRightContainer}>
                        <Paper style={styles.SingleReviewRightPaper}>
                            <div style={{ marginTop: '-11px' }}>
                                <Typography variant="subheading" style={styles.SingleReviewRight}>
                                    Very Positive</Typography></div></Paper></div>)
            }

        } else if (this.props.s.displaySentimentType === 'neutral' && this.props.s.displayModifier === 'volumeBySentiment') {

            if (this.props.s.dataFocus === 'review') {
                return (
                    <div style={styles.SingleReviewLeftContainerMultiple}>
                        <Paper style={styles.SingleReviewLeftPaper}>  <Typography variant="display2" style={styles.SingleReviewLeft}>Neutral Reviews</Typography></Paper></div>
                )
            }
            else {
                return (
                    <div style={styles.SingleReviewRightContainer}>
                        <Paper style={styles.SingleReviewRightPaper}>
                            <div style={{ marginTop: '-11px' }}>
                                <Typography variant="subheading" style={styles.SingleReviewRight}>
                                    Neutral</Typography></div></Paper></div>)
            }

        }
        else if (this.props.s.displaySentimentType === 'very negative' && this.props.s.displayModifier === 'volumeBySentiment') {

            if (this.props.s.dataFocus === 'review') {
                return (
                    <div style={styles.SingleReviewLeftContainerMultiple}>
                        <Paper style={styles.SingleReviewLeftPaper}>  <Typography variant="display2" style={styles.SingleReviewLeft}>Very Negative Reviews</Typography></Paper></div>
                )
            }
            else {
                return (
                    <div style={styles.SingleReviewRightContainer}>
                        <Paper style={styles.SingleReviewRightPaper}>
                            <div style={{ marginTop: '-11px' }}>
                                <Typography variant="subheading" style={styles.SingleReviewRight}>
                                    Very Negative</Typography></div></Paper></div>)
            }



        }

        else if (this.props.s.displayModifier === "time") {

            if (this.props.s.dataFocus === 'review') {
                return (

                    <div style={styles.SingleReviewLeftContainerMultiple}>
                        <Paper style={styles.SingleReviewLeftPaper}>  <Typography variant="display2" style={styles.SingleReviewLeft}>Your Five Most Recent Reviews</Typography></Paper></div>
                )
            }
            else if (this.props.s.dataFocus === 'chart') {


                return (
                    <div style={styles.SingleReviewRightContainer}>
                        <Paper style={styles.SingleReviewRightPaper}>
                            <div style={{ marginTop: '-11px' }}>
                                <Typography variant="subheading" style={styles.SingleReviewRight}>
                                    Your Five Most Recent Reviews</Typography></div></Paper></div>)
            }

        } else if (this.props.s.displayModifier === "timebymonth" && this.props.s.displaying === "sentiment") {

            if (this.props.s.dataFocus === 'review') {
                return <div style={styles.SingleReviewLeftContainerMultiple}>
                    <Paper style={styles.SingleReviewLeftPaper}>  <Typography variant="display2" style={styles.SingleReviewLeft}>{this.props.s.CurrentMonth} Reviews </Typography></Paper></div>
            }
            else if (this.props.s.dataFocus === 'chart') {


                return (
                    <div style={styles.SingleReviewRightContainer}>
                        <Paper style={styles.SingleReviewRightPaper}>
                            <div style={{ marginTop: '-11px' }}>
                                <Typography variant="subheading" style={styles.SingleReviewRight}>
                                    {this.props.s.CurrentMonth} Reviews </Typography></div></Paper></div>)
            }
        } else if (this.props.s.displayModifier === "timebymonth") {
            if (this.props.s.dataFocus === 'review') {
                return <div style={styles.SingleReviewLeftContainerMultiple}>
                    <Paper style={styles.SingleReviewLeftPaper}>  <Typography variant="display2" style={styles.SingleReviewLeft}>{this.props.s.CurrentMonth} reviews about <i>{this.props.s.keywordChartTarget}</i></Typography></Paper></div>
            } else if (this.props.s.dataFocus === 'chart') {


                return (
                    <div style={styles.SingleReviewRightContainer}>
                        <Paper style={styles.SingleReviewRightPaper}>
                            <div style={{ marginTop: '-11px' }}>
                                <Typography variant="subheading" style={styles.SingleReviewRight}>
                                    {this.props.s.CurrentMonth} Reviews </Typography></div></Paper></div>)
            }
        }


        else return (

            <Typography variant="title" style={{ fontSize: '1.4em', paddingBottom: '1em' }}>{this.props.s.displayTitle}</Typography>
        )


    }


    render() {
        return <div>
            {this.prepareHtml()}
        </div>
    }
}
export default withStyles(styles)(DisplayTitle)
