<<<<<<< HEAD
import React , {useState} from "react";
import { Menu, Box ,Button } from "@mui/material";
import Navigation from "./Navigation";
import "./Navigation.css";

function MenuBurger(){
    const [anchor, setAnchor] = useState(null);
    const [state , setState] = useState(false);
    const navigation = document.getElementsByClassName("navigation")
    const open = Boolean(anchor);
    const handleClick = (event) =>{
        setAnchor(event.currentTarget)
    }
    const handleClose =()=>{
        setAnchor(null)
    }
    const toggleMenu = ()=>{
        if (state === 'false'){
            setState('true')
        } else if (state ==='true'){
            setState('false')
        }
        toggleHandle();
    }
    const toggleHandle = ()=>{
        if (state==='true'){
            navigation.setAttribute("class","visible")
        } else {
            navigation.setAttribute("class","invisible")
        }
    }
    return (
        <div>
            <Button sx={{marginTop: 2 , marginLeft: 2}} variant="contained" onClick={handleClick}>Menu</Button>
            <Menu id="menu-burger" anchorEl={anchor} open={open} onClose={handleClose}>
                <Navigation toggleMenu={toggleMenu} />
            </Menu>
=======
import React from "react";

function MenuBurger(props){
    const nav = document.getElementById('navigation');

           
    return(
        <div className="menu-burger-container">
            <button id='menu-button'className="menu-burger" onClick={props.handleClick}>Menu</button>
>>>>>>> test-branch
        </div>
    )
}

<<<<<<< HEAD
export default MenuBurger;
=======
export default MenuBurger
>>>>>>> test-branch
