import React, { Component } from 'react';
import Summary from './Summary';
import Total from './Total';

class Cart extends Component {
    render(){
        const cart = Object.keys(this.props.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.selected[feature];
            
            return(
                <Summary 
                    featureHash={featureHash}
                    feature={feature}
                    selectedOption={selectedOption}
                    USCurrencyFormat={this.props.USCurrencyFormat}
                />
            )
        }
        
    )

    return(
        <>
            <h2>Your Cart</h2>
            {cart}
            <Total 
                USCurrencyFormat={this.props.USCurrencyFormat}
                selected={this.props.selected}
            />
        </>
            
    )

    
}

}

export default Cart;