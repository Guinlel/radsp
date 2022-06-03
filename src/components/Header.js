import React from "react";
import Navigation from "./Navigation";
import headerLogo from '../img/icon-header-blanc.png';
import "./Navigation.css";

function Header (){
    return (
        <header className="header">
            <img src={headerLogo} alt="Icon RAD.SP" className="logo-header"/>
            <Navigation/>
        </header>
    )
}

export default Header;