import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
class BottomRightNav extends Component {
    render() {
        return (
                <Grid container spacing={0}>
                    <Grid item sm={1}>
                        <Button variant="contained" data-message="sentiment" onClick={() => this.props.clickHandler('sentiment')}>
                            Sentiments
                </Button>
                </Grid>
                    <Grid item sm={1}>
                        <Button variant="contained" data-message="sentiment" onClick={() => this.props.clickHandler('sentiment')}>
                            Sentiments
                </Button>
                </Grid>
                    <Grid item sm={1}>
                        <Button variant="contained" data-message="sentiment" onClick={() => this.props.clickHandler('sentiment')}>
                            Sentiments
                </Button>
                </Grid>
                    <Grid item sm={1}>
                        <Button variant="contained" data-message="keyword" onClick={() => this.props.clickHandler('keyword')}>
                            Keywords
                        </Button>
                    </Grid>
                </Grid>
        )
    }
}
export default BottomRightNav
