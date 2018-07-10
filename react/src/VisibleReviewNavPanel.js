import React, { Component } from "react";
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import { LabelOutline, ArrowDownward, ArrowUpward, TrendingFlat } from '@material-ui/icons'
 import { withStyles } from '@material-ui/core/styles';
 import IconButton from '@material-ui/core/IconButton';
 let styles = {
    buttonContainerForModifierSentimentVolumeFocusReviews: {marginTop:'100px'} ,
    buttonContainerForModifierVolumeFocusReview: { },
    buttonContainerForModifierVolumeFocusChart: {position: 'absolute', top: 650, float: 'left'},
    
    LeftButtonsLeftRight:{height:'75px', backgroundColor:'#f7d784', padding:0},
    LeftArrowIcon:{height:80, width:100}
 }

class VisibleReviewNavPanel extends Component {
    changeDisplayedReviews = (direction) => {
        this.props.reviewSwitch(direction);
    }
    changeSummarizedReviews = (direction) => {
        this.props.clickHandlerForSentimentSummary(direction)
    }
    pickNavButtonType = () => {
        if (this.props.s.displayModifier === 'volume' && this.props.s.dataFocus === 'review') {
            return (<div className="buttons" style={styles.buttonContainerForModifierSentimentVolumeFocusReviews}>
                       <Grid container style={{paddingLeft:'70px'}} >
                       <Grid item sm={4}></Grid>
                <Grid item sm={2}>
                    <Button style={styles.LeftButtonsLeftRight} variant="contained" onClick={() => this.changeDisplayedReviews('backward')} >         
                        <TrendingFlat style={styles.LeftArrowIcon}className="icon-flipped" />
                    </Button>
                </Grid>
  
                <Grid item sm={2}>
                    <Button style={styles.LeftButtonsLeftRight} variant="contained"  onClick={() => this.changeDisplayedReviews('forward')} >
                    <TrendingFlat style={styles.LeftArrowIcon}/>
                    </Button>
               </Grid>
               <Grid item sm={4}></Grid>
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
                           <ArrowDownward />
                       </Button>
                   </Grid>
               
                   <Grid item sm={6}>
                       <Button style={{ backgroundColor: '#f7eac8' }} variant="contained" size="small" onClick={() => this.changeSummarizedReviews('down')} >
                           <ArrowUpward />
                       </Button>
                  </Grid>
           </Grid>
           </div>
        }
    }
    render() {
        return (
            <div style={{height:'100%', width:'100%', marginTop:-50}} >
                {this.pickNavButtonType()}
            </div>
        )
    }
}
export default withStyles(styles)(VisibleReviewNavPanel);
