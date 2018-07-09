import React, { Component } from "react";
import Grid from '@material-ui/core/Grid'
import TopNavPanel from './TopNavPanel.js'

const styles ={
    TopNavPanel: { float: 'left', padding:'25px' },
}
class TopNavPanels extends Component {
    render() {
        const color1 = '#82d9ba'
        const color2 = '#e8d28b'
        const color3 = '#db848b'
        const color4 = '#88c8e3'
        return (
                <Grid item sm={8} style={{margin:'auto'}} >
                    <Grid item sm={3} style={styles.TopNavPanel}>
                        <TopNavPanel backgroundColor={color1} destination={"charts"} title={"Chart Land"} topNavClickHandler={this.props.topNavClickHandler} />
                    </Grid>
                  {/*  <Grid item sm={3} style={styles.TopNavPanel}>
                        <TopNavPanel  backgroundColor={color2} destination={"keyword"} title={"What Customers Mentioned"} topNavClickHandler={this.props.topNavClickHandler} />
                    </Grid>*/}
                    <Grid item sm={3} style={styles.TopNavPanel}>
                        <TopNavPanel  backgroundColor={color3} destination={"sentiment"} title={"How Customers Felt"} topNavClickHandler={this.props.topNavClickHandler} />
                    </Grid>
                    <Grid item sm={3} style={styles.TopNavPanel}>
                        <TopNavPanel  backgroundColor={color4} destination={"keyword"} title={"What Customers Mentioned"} topNavClickHandler={this.props.topNavClickHandler} />
                    </Grid>
                </Grid>
        )
    }
}
export default TopNavPanels