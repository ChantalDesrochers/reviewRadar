import React, { Component } from "react";
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import { LabelOutline } from '@material-ui/icons'



class VisibleReviewNavPanel extends Component {
    changeDisplayedReviews = (direction) => {
        console.log('in change displayed reviews direction is,', direction);
       this.props.reviewSwitch(direction); 
    }

    render() {
        // const finalRating = this.parseSentimentData(this.props.watsonRating);
        return (
            <Grid className="buttons" container style={{ marginLeft: '35%', position: 'absolute', top: 450 }}>
                <Grid item sm={12}>
                </Grid>
                <Grid item sm={1}>
                    <div style={{ textAlign: 'center' }}>
                        <Button variant="contained" size="small" onClick={() => this.changeDisplayedReviews('backward')} >
                            <LabelOutline className="icon-flipped" />
                        </Button>
                    </div>
                </Grid>
                <Grid item sm={2}>
                    <div style={{ textAlign: 'center' }}>
                        <Button variant="contained" size="small" onClick={() => this.changeDisplayedReviews('forward')} >
                            <LabelOutline />
                        </Button>
                    </div>
                </Grid>
                <Grid item sm={4}>

                </Grid>

            </Grid>
        );
    }
}
export default VisibleReviewNavPanel

