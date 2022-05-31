import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuBurger from "./MenuBurger";
import "./Navigation.css"

function Navigation() {
    const [isActive, setActive] = useState('false');

    const BodyClick = ()=>{
        function handleBodyClick (){
            
        }
    }

    const handleClick = () => {
        setActive(!isActive);
    }
    return (
        <div className="nav-container">
            <MenuBurger handleClick={handleClick}/>
            <nav id='navigation' className={isActive ? "navigation" : "navigation-visible"}>
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