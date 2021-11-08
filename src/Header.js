import React from 'react';
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search"
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import logo from "./img/bioluniel.png";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
const [{ basket }, dispatch] = useStateValue();


    return (
        <div className ="header">
            <Link to="/">
            <img className="header__logo" src={logo}/>
            </Link>

            <div className="header__option">
            <Link to ="/">
            <span className="header__optionlineTwo">Home</span>
            </Link>
            </div>

            <div className="header__option">
            <Link to ="/Aboutus">
            <span className="header__optionlineTwo">About Us</span>
            </Link>
            </div>

            <div className="header__option">
            <Link to ="/Contact">
            <span className="header__optionlineTwo">Products</span>
            </Link>
            </div>

            <div className="header__option">
            <Link to ="/Contact">
            <span className="header__optionlineTwo">Contact</span>
            </Link>
            </div>

          
                
                <div className="header__nav">
                    <Link to="/login"> 
                    <div className="header__option">
                        <span className="header__optionlineOne">Hello Guest</span>
                        <span className="header__optionlineTwo">Sign In</span>
                    </div>   
                    </Link>   
                    <div className="header__option">
                        <span className="header__optionlineOne">Return</span>
                        <span className="header__optionlineTwo">and Orders</span></div>     
                    <div className="header__option">
                        <span className="header__optionlineOne">Your</span>
                        <span className="header__optionlineTwo">Prime</span></div>

                        <Link to="/checkout">  
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                    <span className="header__optionlineTwo header__basketCount">
                       { basket.length }
                        </span>

                    </div>
                    </Link>
                </div>
        </div>
    )
}

export default Header;
