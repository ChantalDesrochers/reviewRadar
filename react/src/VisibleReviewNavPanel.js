import React, { Component } from "react";
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import { LabelOutline } from '@material-ui/icons'



class VisibleReviewNavPanel extends Component {
    changeDisplayedReviews = (direction) => {
        this.props.reviewSwitch(direction);
    }
    render() {
        // const finalRating = this.parseSentimentData(this.props.watsonRating);
        return (
            <Grid className="buttons" container style={{ marginLeft: '35%', position: 'absolute', top: 450 }}>
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
            </Grid>
        );
    }
}
export default VisibleReviewNavPanel

