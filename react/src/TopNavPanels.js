import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import TopNavPanel from './TopNavPanel.js'
import { withStyles } from '@material-ui/core/styles';

const styles ={
   // MainContainer: { height: '100%', marginTop: 8 },
    TopNavPanel: { float: 'left', padding: 20 },
}
class TopNavPanels extends Component {
    render() {
        return (   
                <Grid item sm={8}>
                    <Grid item sm={3} style={styles.TopNavPanel}>
                        <TopNavPanel destination={"sentiment"} title={"How Customers Felt"} clickHandler={this.props.clickHandler} />
                    </Grid>
                    <Grid item sm={3} style={styles.TopNavPanel}>
                        <TopNavPanel destination={"keyword"} title={"What Customers Mentioned"} clickHandler={this.props.clickHandler} />
                    </Grid>
                    <Grid item sm={3} style={styles.TopNavPanel}>
                        <TopNavPanel destination={"sentiment"} title={"How Customers Felt"} clickHandler={this.props.clickHandler} />
                    </Grid>
                    <Grid item sm={3} style={styles.TopNavPanel}>
                        <TopNavPanel destination={"keyword"} title={"What Customers Mentioned"} clickHandler={this.props.clickHandler} />
                    </Grid>
                </Grid>
        )
    }
}
export default TopNavPanels