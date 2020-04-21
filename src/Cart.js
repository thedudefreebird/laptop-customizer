import React from "react";
import Summary from "./Summary";

const Cart = props => {
    return(
        <section className="main__summary">
            <h2>Your cart</h2>
            <Summary summary={props.summary} />
            <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <div className="summary__total__value">
                {props.USCurrencyFormat.format(props.total)}
              </div>
            </div>
          </section>
    );
};

export default Cart;