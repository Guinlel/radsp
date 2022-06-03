import React from "react";

function MenuBurger(props){

           
    return(
        <div className="menu-burger-container">
            <button id='menu-button'className="menu-burger" onClick={props.handleClick}>Menu</button>
        </div>
    )
}

export default MenuBurger