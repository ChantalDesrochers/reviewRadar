import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
class BottomRightNav extends Component {
    render() {
        return (
            <div style={{textAlign: "center"}}>
            <p> these buttons move down and are tabs</p>
                <Grid container spacing={8}>
                    <Grid item sm={12}>
                        <Button variant="contained" data-message="sentiment" onClick={() => this.props.clickHandler('sentiment')}>
                            Sentiments
                </Button>
                </Grid>
                    <Grid item sm={12}>
                        <Button variant="contained" data-message="keyword" onClick={() => this.props.clickHandler('keyword')}>
                            Keywords
                        </Button>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
export default BottomRightNav
