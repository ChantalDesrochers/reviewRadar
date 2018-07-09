import React, { Component } from "react";
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import { LabelOutline, ArrowDownward, ArrowUpward } from '@material-ui/icons'
 import { withStyles } from '@material-ui/core/styles';

 let styles = {
    buttonContainerForModifierSentimentVolumeFocusReviews: {position: 'absolute', left: '50%', top: 600, float: 'left'},
    buttonContainerForModifierVolumeFocusReview: { marginLeft: '40%', position: 'absolute', top: 400},
    buttonContainerForModifierVolumeFocusChart: {position: 'absolute', top: 650, float: 'left'}
 }

class VisibleReviewNavPanel extends Component {
    changeDisplayedReviews = (direction) => {
        this.props.reviewSwitch(direction);
    }
    changeSummarizedReviews = (direction) => {
        this.props.clickHandlerForSentimentSummary(direction)
    }
    pickNavButtonType = () => {
        console.log('in but')
        if (this.props.s.displayModifier === 'volume' && this.props.s.dataFocus === 'review') {
            return (<div className="buttons" style={styles.buttonContainerForModifierVolumeFocusReview}>
                       <Grid container >
                <Grid item sm={3}>
                    <Button style={{ backgroundColor: 'blue' }} variant="contained" size="small" onClick={() => this.changeDisplayedReviews('backward')} >
                        <LabelOutline className="icon-flipped" />
                    </Button>
                </Grid>
            <Grid item sm={6}>
            </Grid>
                <Grid item sm={3}>
                    <Button style={{ backgroundColor: '#f7eac8' }} variant="contained" size="small" onClick={() => this.changeDisplayedReviews('forward')} >
                        <LabelOutline />
                    </Button>
               </Grid>
        </Grid>
            </div>)
        }
        else if (this.props.s.displayModifier === 'volume' && this.props.s.dataFocus === 'chart'){
            // console.log(' chart keyword ')
         return (
         <div style={styles.buttonContainerForModifierVolumeFocusChart}>
         <Grid container >
                <Grid item sm={6}>
                    <Button style={{ backgroundColor: 'green' }} variant="contained" size="small" onClick={() => this.changeDisplayedReviews('backward')} >
                        <LabelOutline className="icon-flipped" />
                    </Button>
                </Grid>
            
                <Grid item sm={6}>
                    <Button style={{ backgroundColor: '#f7eac8' }} variant="contained" size="small" onClick={() => this.changeDisplayedReviews('forward')} >
                        <LabelOutline />
                    </Button>
               </Grid>
        </Grid>
         </div>)
               }
        else if (this.props.s.displayModifier === 'keyword' && this.props.s.dataFocus === 'chart'){
            // return (<div style={styles.buttonContainerForModifierVolumeFocusChart}>
            console.log(' chart keyword ')
         return (
         <div style={styles.buttonContainerForModifierVolumeFocusChart}>
         <Grid container >
                <Grid item sm={6}>
                    <Button style={{ backgroundColor: 'green' }} variant="contained" size="small" onClick={() => this.changeDisplayedReviews('backward')} >
                        <LabelOutline className="icon-flipped" />
                    </Button>
                </Grid>
            
                <Grid item sm={6}>
                    <Button style={{ backgroundColor: '#f7eac8' }} variant="contained" size="small" onClick={() => this.changeDisplayedReviews('forward')} >
                        <LabelOutline />
                    </Button>
               </Grid>
        </Grid>
        </div>)
        }
        else if (this.props.s.displayModifier === 'volumeBySentiment') {
            return  <div style={styles.buttonContainerForModifierSentimentVolumeFocusReviews}>
            <Grid container >
                   <Grid item sm={6}>
      
                       <Button style={{ backgroundColor: 'red' }} variant="contained" size="small" onClick={() => this.changeSummarizedReviews ('up')} >
                           <ArrowUpward />
                       </Button>
                   </Grid>
               
                   <Grid item sm={6}>
                       <Button style={{ backgroundColor: '#f7eac8' }} variant="contained" size="small" onClick={() => this.props.changeSummarizedReviews('down')} >
                           <ArrowDownward />
                       </Button>
                  </Grid>
           </Grid>
           </div>
        }
    }
    render() {
        return (
            <div>
                {this.pickNavButtonType()}
            </div>
        )
    }
}
export default withStyles(styles)(VisibleReviewNavPanel);
