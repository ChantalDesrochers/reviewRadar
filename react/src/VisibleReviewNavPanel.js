import React, { Component } from "react";
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import { LabelOutline, ArrowDownward, ArrowUpward, TrendingFlat } from '@material-ui/icons'
 import { withStyles } from '@material-ui/core/styles';
 import IconButton from '@material-ui/core/IconButton';
 let styles = {
    buttonContainerForModifierVolumeFocusReview: {marginTop:'100px'} ,
    buttonContainerForModifierSentimentVolumeFocusReviews: { position:'absolute', marginTop:'-480px', marginLeft:'115px'},
    buttonContainerForModifierVolumeFocusChart: {position:'relative', top:'225px', left:'36%'},
    color1:'#add9ca',
    color2:'#ccdce3',
    color3:'#bad7e3',
    color4:'#dbb8bb',
    LeftButtonsLeftRight:{height:'60px', backgroundColor:'#bad7e3', padding:0},
    LeftArrowIcon:{height:50, width:75}
 }

class VisibleReviewNavPanel extends Component {
    changeDisplayedReviews = (direction) => {
        this.props.reviewSwitch(direction);
    }
    changeSummarizedReviews = (direction) => {
        this.props.clickHandlerForSentimentSummary(direction)
    }
    pickNavButtonType = () => {
        console.log('in pick nav type ')
        if (this.props.s.displayModifier === 'volume' && this.props.s.dataFocus === 'review') {
            return (<div className="buttons" style={styles.buttonContainerForModifierVolumeFocusReview}>
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
        else if (this.props.s.displayModifier === 'volume' && this.props.s.dataFocus === 'chart' && this.props.s.displaying==='sentiment'){
         console.log(' chart volume ')
         return (
         <div style={styles.buttonContainerForModifierVolumeFocusChart}>
         <Grid container >
                <Grid item sm={2}>
                    <Button style={{ backgroundColor:  '#f7eac8', height:50}} variant="contained" size="small" onClick={() => this.changeDisplayedReviews('backward')} >
                        <TrendingFlat style={{height:41, width:51}} className="icon-flipped" />
                    </Button>
                </Grid>
            
                <Grid item sm={2}>
                    <Button style={{ backgroundColor: '#f7eac8', height:50 }} variant="contained" size="small" onClick={() => this.changeDisplayedReviews('forward')} >
                        <TrendingFlat style={{height:41, width:51}}  />
                    </Button>
               </Grid>
        </Grid>
         </div>)
               }
        else if (this.props.s.displayModifier === 'volume' && this.props.s.dataFocus === 'chart' && this.props.s.displaying==='keyword'){
            // return (<div style={styles.buttonContainerForModifierVolumeFocusChart}>
            console.log(' chart keyword ')
         return (
         <div style={{position:'absolute', top:'697px', right:'285px'}}>
         <Grid container >
                <Grid item sm={6}>
                    <Button style={{ backgroundColor:  '#f7eac8', width:5, marginLeft:'-70px' }} variant="contained" size="small" onClick={() => this.changeDisplayedReviews('backward')} >
                    <TrendingFlat style={{height:35, width:50}} className="icon-flipped"  />
                    </Button>
                </Grid>
            
                <Grid item sm={6}>
                    <Button style={{ backgroundColor: '#f7eac8' }} variant="contained" size="small" onClick={() => this.changeDisplayedReviews('forward')} >
                    <TrendingFlat style={{height:35, width:50}}  />
                    </Button>
               </Grid>
        </Grid>
        </div>)
        }
        else if (this.props.s.displayModifier === 'volumeBySentiment') {
            return  <div style={styles.buttonContainerForModifierSentimentVolumeFocusReviews}>
            {/* <Grid container >
            <Grid item sm={4}></Grid>
                   <Grid item sm={2}>
      
                       <Button style={{ backgroundColor: '#f7eac8' }} variant="contained" size="small" onClick={() => this.changeSummarizedReviews ('up')} >
                           <ArrowDownward />
                       </Button>
                   </Grid>
               
                   <Grid item sm={2}>
                       <Button style={{ backgroundColor: '#f7eac8' }} variant="contained" size="small" onClick={() => this.changeSummarizedReviews('down')} >
                           <ArrowUpward />
                       </Button>
                  </Grid>
                  <Grid item sm={4}></Grid>
           </Grid> */}
           </div>
        }
    }
    render() {
        return (
            <div style={{height:'100%', width:'100%', marginTop:-190}} >
                {this.pickNavButtonType()}
            </div>
        )
    }
}
export default withStyles(styles)(VisibleReviewNavPanel);
