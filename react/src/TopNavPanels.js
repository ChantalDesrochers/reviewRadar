import React, { Component } from "react";
import Grid from '@material-ui/core/Grid'
import TopNavPanel from './TopNavPanel.js'

const styles ={
    TopNavPanel: { float: 'left', padding: 20 },
}
class TopNavPanels extends Component {
    render() {
        return (
                <Grid item sm={8}>
                    <Grid item sm={3} style={styles.TopNavPanel}>
                        <TopNavPanel destination={"charts"} title={"All The Data"} topNavClickHandler={this.props.topNavClickHandler} />
                    </Grid>
                    <Grid item sm={3} style={styles.TopNavPanel}>
                        <TopNavPanel destination={"keyword"} title={"What Customers Mentioned"} topNavClickHandler={this.props.topNavClickHandler} />
                    </Grid>
                    <Grid item sm={3} style={styles.TopNavPanel}>
                        <TopNavPanel destination={"sentiment"} title={"How Customers Felt"} topNavClickHandler={this.props.topNavClickHandler} />
                    </Grid>
                    <Grid item sm={3} style={styles.TopNavPanel}>
                        <TopNavPanel destination={"keyword"} title={"What Customers Mentioned"} topNavClickHandler={this.props.topNavClickHandler} />
                    </Grid>
                </Grid>
        )
    }
}
export default TopNavPanels