import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MenuBurger from "./MenuBurger";
import "./Navigation.css";
import {ReactComponent as CloseLogo} from '../img/close.svg'

function Navigation() {
    const [isActive, setActive] = useState('false');
    const nav = document.getElementById('navigation');

    useEffect(()=>{
        document.getElementById('close-img').addEventListener('click',(e)=>{
            setActive(!isActive);
            nav.className = 'navigation';
        })
    })

    const handleClick = () => {
        console.log(isActive);
        setActive(!isActive);
    }
    return (
        <div className="nav-container">
            <MenuBurger handleClick={handleClick}/>
            <nav id='navigation' className={isActive ? "navigation" : "navigation-visible"}>
                <CloseLogo id="close-img" className="close-img" />
                <Link to="/" className="link">Accueil</Link>
                <Link to="/conversion" className="link"> Conversion</Link>
                <Link to="/calcul-dose" className="link">Calcul de dose</Link>
                <Link to="/calcul-perimetre" className="link">Calcul de périmètre</Link>
                <Link to="/activite-restante" className="link"> Activité restante </Link>
                <Link to="/meteo" className="link">Meteo</Link>
            </nav>
        </div>

    )

}

export default Navigation;