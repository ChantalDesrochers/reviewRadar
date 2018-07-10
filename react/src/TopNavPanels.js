import React, { Component } from "react";
import Grid from '@material-ui/core/Grid'
import TopNavPanel from './TopNavPanel.js'
import ChartsToShow from './ChartsToShow.js'
import { Link } from "@reach/router";


const styles ={
    TopNavPanel: { float: 'left', paddingTop: '1%', paddingBottom: '1%', paddingLeft: '10%', paddingRight: '10%', },
}
class TopNavPanels extends Component {
    render() {
        const color1 = '#82d9ba'
        const color2 = '#e8d28b'
        const color3 = '#db848b'
        const color4 = '#88c8e3'
        return (
                <Grid item sm={8} style={{margin:'auto'}} >
                    <Grid item sm={4} style={styles.TopNavPanel}>
                      <TopNavPanel backgroundColor={color1} destination={"charts"} title={"Chart Land"} topNavClickHandler={this.props.topNavClickHandler}/>
                    </Grid>
                    <Grid item sm={4} style={styles.TopNavPanel}>
                        <TopNavPanel  backgroundColor={color3} destination={"sentiment"} title={"How Customers Felt"} topNavClickHandler={this.props.topNavClickHandler} />
                    </Grid>
                    <Grid item sm={4} style={styles.TopNavPanel}>
                        <TopNavPanel  backgroundColor={color4} destination={"keyword"} title={"What Customers Mentioned"} topNavClickHandler={this.props.topNavClickHandler} />
                    </Grid>
                </Grid>
        )
    }
}
export default TopNavPanels