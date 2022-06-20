import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
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
                <ul className="ul-nav">
                    <li>
                        <NavLink className={(navData)=> navData.isActive ? "link-active" :"link"} to="/">Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink className={(navData)=> navData.isActive ? "link-active" :"link"} to="/radionucleide">Radionucléides</NavLink>
                    </li>
                    <li>
                        <NavLink className={(navData)=> navData.isActive ? "link-active" :"link"} to="/conversion">Conversion Ci en Bq</NavLink>
                    </li>
                    <li>
                        <NavLink className={(navData)=> navData.isActive ? "link-active" :"link"} to="/calcul-dose">Calcul de dose selon la distance </NavLink>
                    </li>
                    <li>
                        <NavLink className={(navData)=> navData.isActive ? "link-active" :"link"} to="/calcul-dose-beta">Calcul de dose absorbée pour les rayonnements β </NavLink>
                    </li>
                    <li>
                        <NavLink className={(navData)=> navData.isActive ? "link-active" :"link"} to="/calcul-dose-gamma">Calcul de dose absorbée pour les rayonnements γ </NavLink>
                    </li>
                    <li>
                        <NavLink className={(navData)=> navData.isActive ? "link-active" :"link"} to="/calcul-perimetre">Calcul de distance selon la dose</NavLink>
                    </li>
                    <li>
                        <NavLink className={(navData)=> navData.isActive ? "link-active" :"link"} to="/activite-restante">Activité restante</NavLink>
                    </li>
                    <li>
                        <NavLink className={(navData)=> navData.isActive ? "link-active" :"link"} to="/etiquette">Etiquettes de Transport</NavLink>
                    </li>
                    <li>
                        <NavLink className={(navData)=> navData.isActive ? "link-active" :"link"} to="/memo-rad">Memo RAD</NavLink>
                    </li>
                    <li>
                        <NavLink className={(navData)=> navData.isActive ? "link-active" :"link"} to="/meteo">Météo</NavLink>
                    </li>
                    <li>
                        <NavLink className={(navData)=> navData.isActive ? "link-active" : "link"} to="/a-propos">A propos</NavLink>
                    </li>
                </ul>    
            </nav>
        </div>
    )

}

export default Navigation;