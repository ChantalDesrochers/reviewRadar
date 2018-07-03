import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
class BottomRightNav extends Component {
    render() {
        return (
            <div style={{textAlign: "center"}}>
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

// <Grid container style={styles.MainContainer} spacing={8}>
// <Grid style={styles.LeftContainer} item sm={8}>

// .center {
//     margin: auto;
//     width: 50%;
//     border: 3px solid green;
//     padding: 10px;
// }