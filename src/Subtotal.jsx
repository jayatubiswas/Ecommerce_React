import React from 'react'
import "./subtotal.css"
import CurrencyFormat from "react-currency-format";

function Subtotal() {
    return (
    <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                           Subtotal (0 items): <strong>0</strong>
                       </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />
                            This Order Contains a Gift
                        </small>
                    </>
                )}
             decimalScaale={2}
             value={0}
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
