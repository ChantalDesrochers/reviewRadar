import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import { Typography } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';


let styles = {
   Text: { fontSize:'1.4em'}, 

    }
class TopNavPanel extends Component {

    prepareHtml =() => {

        return (
        <Button style={{backgroundColor: this.props.backgroundColor, height:'70px', width:'270px', marginRight:'-140px'}} variant="contained" onClick={() => this.props.topNavClickHandler(this.props.destination)} >
        <Typography variant="title" style={styles.Text}>{this.props.title}</Typography>
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