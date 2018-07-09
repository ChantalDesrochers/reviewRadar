import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';


const styles ={

}
class DisplayTitle extends Component {

    prepareHtml =() => {
        console.log('in dispaly title state', this.props.s)
        return (

        <Typography variant="title" style={{fontSize:'1.4em'}}> {this.props.s.displayTitle}</Typography>
        )
    }
  
    render() {
        return <div>
        {this.prepareHtml()}
      </div>
    }
}
export default withStyles(styles)(DisplayTitle)