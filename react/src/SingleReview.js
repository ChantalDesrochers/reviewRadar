import React, { Component } from "react";
import 'typeface-roboto'
import Grid from '@material-ui/core/Grid'
import { Typography } from "@material-ui/core";
import Date from "./Date.js"
import NameAndSite from './NameAndSite.js'
import { withStyles } from '@material-ui/core/styles';

const styles = {
    
        reviewText: {overflow: 'hidden', maxHeight: '320px', fontSize: '2.2em', variant:'body', paddingTop: 25, paddingLeft:50, paddingRight:50},
    dateLeftSingle: {padding:10, float: 'right'}
}
class SingleReview extends Component {
    mouseController = (message) => {
        switch (message) {
            case 'enter-review':
           styles.reviewText = {overflow: 'auto', maxHeight: '320px', textAlign: 'left', fontSize:  '2.2em', paddingTop: 25, paddingLeft:50, paddingRight:50 }
                this.forceUpdate();
                //       console.log('in enter review', styles);
                break;
            case 'exit-review':
        styles.reviewText = {overflow: 'hidden', maxHeight: '320px', textAlign: 'left', fontSize:  '2.2em', display: 'block', variant:'body', paddingTop: 25, paddingLeft:50, paddingRight:50}
                this.forceUpdate();
                //     console.log('in exit review', styles);
                break;
        }
    }
    prepareHtml = (fadeBool, reviewsToShow) => {
        const index = this.props.s.visibleReview;
        const review = this.props.s.reviews[index].description;
        const rating = this.props.s.reviews[index].rating;
        const date = this.props.s.reviews[index].datePublished;
        const name = this.props.s.reviews[index].author;
        const site = this.props.s.reviews[index].origin;
        return (
            <div>
                <div className={'full-cue-card-review'}  >
                    <Grid container spacing={0} >
                        <Grid item sm={12} style={{ float: 'left', width: "50%" }}>
                            <Grid style={{ float: 'left', width: "50%",  paddingTop:'15px', paddingLeft:'25px' }} item sm={6}>
                                <NameAndSite name={name} site={site} />
                            </Grid>
                        </Grid>
                        <Grid item sm={12} >
                            <Grid style={{ float: 'left', width: "50%", paddingLeft:'25px' }} item sm={6}>
                                <Date style={styles.dateLeftSingle} date={date} />
                            </Grid>
                        </Grid>
                        <Grid item sm={12} >
                            <Typography variant='body' onMouseOver={() => this.mouseController('enter-review')} onMouseLeave={() => this.mouseController('exit-review')} style={styles.reviewText}>
                              <div className='aroundreview'>  {review} </div>
                            </Typography>
                        </Grid>
                    </Grid>
                </div>
            </div >
        )
    }
    render() {
        return (
            <div style={{ padding: 0, height: '100%' }}>
                {this.prepareHtml()}
            </div>
        )
    }
}
export default withStyles(styles)(SingleReview)
