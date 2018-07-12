import React, { Component } from "react";
import Paper from '@material-ui/core/Paper'
import { Star, SwapHoriz } from '@material-ui/icons'
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

class SwapButton extends Component {

    
    render() {
        return (
            <div>
          <Button style={{width:40, height:40, backgroundColor:'#add9ca'}} variant="extendedFab" color="primary" className="swap-button" onClick={() => this.props.swapDisplaySides()}>
        <SwapHoriz style={{width:25, height:25, color:'black'}}   />
      </Button>
          </div>
        );
    }
}
export default SwapButton
