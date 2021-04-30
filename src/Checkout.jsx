import React from 'react'
import "./checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img 
                    className="checkout__ad"
                    alt=""
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Coupons/ART/Diwali-18/stripe_pc._CB483582784_.jpg"
                />
                <div>
                    <h2 className="checkout__title">
                        Your Shopping Cart
                    </h2>
                </div>
                <div>

                    <div className="checkout__right">
                        <Subtotal />
                    </div> 
                </div>  
            </div>            
        </div>
    )
}

export default Checkout
