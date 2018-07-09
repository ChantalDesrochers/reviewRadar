import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import { Typography } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';


let styles = {
   fontSize: 1.5 
    }
class TopNavPanel extends Component {

    prepareHtml =() => {

        return (
        <Button style={{backgroundColor: this.props.backgroundColor, height:110}} variant="contained" onClick={() => this.props.topNavClickHandler(this.props.destination)} >
        <Typography variant="title" style={{fontSize:'1.4em'}}>{this.props.title}</Typography>
      </Button>
        )
    }
  
    render() {
        return   <div>
        {this.prepareHtml()}
      </div>
    }
}
export default withStyles(styles)(TopNavPanel)