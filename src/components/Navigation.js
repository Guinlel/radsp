import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MenuBurger from "./MenuBurger";
import "./Navigation.css";
import {ReactComponent as CloseLogo} from '../img/close.svg'

function Navigation() {
    const [isActive, setActive] = useState('false');

    useEffect(()=>{
        document.getElementById('close-img').addEventListener('click',(e)=>{
            setActive(!isActive);
            // nav.className = 'navigation';
        })
    })

    const handleClick = () => {
        setActive(!isActive);
    }
    return (
        <div className="nav-container">
            <MenuBurger handleClick={handleClick}/>
            <nav id='navigation' className={isActive ? "navigation" : "navigation-visible"}>
                <CloseLogo id="close-img" className="close-img" />
                <Link to="/" className="link">Accueil</Link>
                <Link to="/radionucleide" className="link">Radionucléides</Link>
                <Link to="/conversion" className="link"> Conversion Ci vers Bq</Link>
                <Link to="/calcul-dose" className="link">Calcul de dose selon la distance</Link>
                <Link to="/calcul-perimetre" className="link">Calcul de distance selon la dose</Link>
                <Link to="/activite-restante" className="link"> Activité restante </Link>
                <Link to="/etiquette" className="link">Etiquettes de Transport</Link>
                <Link to="/meteo" className="link">Meteo</Link>
        
            </nav>
        </div>
    )

}

export default Navigation;