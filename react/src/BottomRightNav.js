import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
class BottomRightNav extends Component {
    render() {
        return (
                <Grid container spacing={0}>
                    <Grid item sm={1}>
                        <Button variant="contained" data-message="sentiment" onClick={() => this.props.topNavClickHandler('sentiment')}>
                            Sentiments
                </Button>
                </Grid>
                    <Grid item sm={1}>
                        <Button variant="contained" data-message="sentiment" onClick={() => this.props.topNavClickHandler('sentiment')}>
                            Sentiments
                </Button>
                </Grid>
                    <Grid item sm={1}>
                        <Button variant="contained" data-message="sentiment" onClick={() => this.props.topNavClickHandler('sentiment')}>
                            Sentiments
                </Button>
                </Grid>
                    <Grid item sm={1}>
                        <Button variant="contained" data-message="keyword" onClick={() => this.props.topNavClickHandler('keyword')}>
                            Keywords
                        </Button>
                    </Grid>
                </Grid>
        )
    }
}
export default BottomRightNav
