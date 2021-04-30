import React from 'react'
import "./Product.css";

function Product({title,image,price,rating}) {
    return (
        <div className="product">
          <div className="product__info">
              <p>{title}</p>
              <p className="product__price">
                  <span>₹</span>
                  <strong> {price}</strong>
              </p>
              <div className="product__rating">
                {Array(rating).fill().map((_, i) => (
                    <p>⭐</p>
                ))}
              </div>
              <div>
                  <img
                    className="product__img"
                   alt=""
                    src={image}
                 />
                   <button className="product__button">
                    Add to Cart
                    </button>
                    <div>
                    <button className="product__button">
                    Buy Now
                    </button>
                    </div>
                </div>

            </div>  
        </div>
    )
}

export default Product
