import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {
    const [{basket }, dispatch] = useStateValue();

    return (
        <div className='header'>
            <Link to="/">
            <img
                className="header__logo"
                src="https://www.freepnglogos.com/uploads/flipkart-logo-png/flipkart-logo-transparent-vector-3.png" data-original="/uploads/flipkart-logo-png/flipkart-logo-transparent-vector-3.png" alt="Flipkart" title="Flipkart"
            />
            </Link>

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

            </div>
                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingCartIcon />
                        <span className="header__optionLineTwo header__basketCount">
                            {basket?. length}
                        </span>
                    </div>
                </Link>
            


          
        </div>
    )
}

export default Header

