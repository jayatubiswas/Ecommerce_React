import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import { createSvgIcon } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
function Header() {
    return (
        <div className='header'>
          <img
                className="header__logo"
                src="https://www.freepnglogos.com/uploads/flipkart-logo-png/flipkart-logo-transparent-vector-3.png" data-original="/uploads/flipkart-logo-png/flipkart-logo-transparent-vector-3.png" alt="Flipkart" title="Flipkart"
            />
            <div className='header__search'>
               <input 
               className='header__searchInput'
               type="text" SearchIcon
               /> 
               <SearchIcon
               className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <div className="header__option">
                    
                    <span className="header__optionLineTwo">
                      <button className = "Button">Login</button>
                    </span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Returns 
                    </span>
                    <span className="header__optionLineTwo">
                        & Orders
                    </span>

                </div>
                <div className="header__option">

                </div>
            </div>

            <div className="header__optionBasket">
                <ShoppingCartIcon />
                <span className="header__optionLineTwo header__basketCount">0</span>
            </div>
          
        </div>
    )
}

export default Header

