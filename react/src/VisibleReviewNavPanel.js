import React, { Component } from "react";
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import { LabelOutline } from '@material-ui/icons'
 import { withStyles } from '@material-ui/core/styles';

 let styles = {
   
    buttonContainerForModifierVolumeFocusReview: { marginLeft: '35%', position: 'absolute', top: 450, backgroundColor: 'blue' },
    buttonContainerForModifierVolumeFocusChart: {position: 'absolute', top: 600, float: 'left'}
 }

class VisibleReviewNavPanel extends Component {
    changeDisplayedReviews = (direction) => {
        this.props.reviewSwitch(direction);
    }
    pickNavButtonType = () => {
        if (this.props.s.displayModifier === 'volume' && this.props.s.dataFocus === 'review') {
            return (<Grid className="buttons" style={styles.buttonContainerForModifierVolumeFocusReview}>
                <Grid item sm={2}>
                    <div style={{ textAlign: 'center' }}>
                        <Button style={{ backgroundColor: '#f7eac8' }} variant="contained" size="small" onClick={() => this.changeDisplayedReviews('backward')} >
                            <LabelOutline className="icon-flipped" />
                        </Button>
                    </div>
                </Grid>
                <Grid item sm={2}>
                    <div style={{ textAlign: 'center' }}>
                        <Button style={{ backgroundColor: '#f7eac8' }} variant="contained" size="small" onClick={() => this.changeDisplayedReviews('forward')} >
                            <LabelOutline />
                        </Button>
                    </div>
                </Grid>
            </Grid>)
        }
        else if (this.props.s.displayModifier === 'volume' && this.props.s.dataFocus === 'chart'){
            // return (<div style={styles.buttonContainerForModifierVolumeFocusChart}>
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
            return <p> volume by sentiment needs down arrow </p>
        }
    }
    render() {
        console.log('state in visible review nav panel', this.props.s);

        return (
            <div>
                {this.pickNavButtonType()}
            </div>
        )
    }
}
export default withStyles(styles)(VisibleReviewNavPanel);

