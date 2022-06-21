import React from "react";
import {ReactComponent as MenuBurgerIcon} from '../img/menu.svg';

function MenuBurger(props){

           
    return(
        <div className="menu-burger-container">
            <MenuBurgerIcon id='menu-button' className="menu-burger" onClick={props.handleClick}/>
        </div>
    )
}

export default MenuBurger