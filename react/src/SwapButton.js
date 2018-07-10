import React, { Component } from "react";
import Paper from '@material-ui/core/Paper'
import { Star, SwapHoriz } from '@material-ui/icons'
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

class SwapButton extends Component {

    
    render() {
        return (
            <div>
          <Button style={{width:60, height:60, backgroundColor:"#f7eac8"}} variant="extendedFab" color="primary" className="swap-button" onClick={() => this.props.swapDisplaySides()}>
        <SwapHoriz style={{width:50, height:50, color:'black'}}   />
      </Button>
          </div>
        );
    }
}
export default SwapButton
