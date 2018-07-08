import React, { Component } from "react";
import Paper from '@material-ui/core/Paper'
import { Star, SwapHoriz } from '@material-ui/icons'
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

class SwapButton extends Component {

    
    render() {
        console.log('ion swap button my props are:', this.props)
        return (
            <div>
          <Button variant="fab" color="primary" className="swap-button" onClick={() => this.props.swapDisplaySides()}>
        <SwapHoriz />
      </Button>
          </div>
        );
    }
}
export default SwapButton
