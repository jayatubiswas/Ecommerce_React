import React from 'react'
import "./subtotal.css"
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';

function Subtotal() {
    const [{basket }, dispatch] = useStateValue();

    return (
    <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                           Subtotal ({basket.length} items): <strong>{getBasketTotal(basket)}</strong>
                       </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />
                            This Order Contains a Gift
                        </small>
                    </>
                )}
             decimalScaale={4}
             value={getBasketTotal(basket)}
             displayType={"text"}
             thousandSeparotor={true}
             prefix={"₹"}
            />
            <div>
            <button className="check__button">Proceed To Checkout</button>
            </div>
            
        </div>
    )
}

export default Subtotal
